import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { columns, loldata } from "../data";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useDispatch } from "react-redux";
import { setModal } from "../redux/fileModalSlice.js";
import { useSelector } from "react-redux";
import { FileView } from "./FileViewer";
import "./FileTable.css";
import differenceBy from "lodash/differenceBy";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import {  Modal } from "antd";

const { confirm } = Modal;
function FileTable() {
  // const [data, setData] = useState([]);
  const [data, setData] = useState(loldata);
  // const [loading, setLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [row, setrow] = useState();
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  // useEffect(() => {
  //   const url = "http://localhost:8000/getallfiles";
  //   const fetchData = async () => {
  //     try {

  //       setData([])
  //       const response = await fetch(url);
  //       const json = await response.json();
  //       const files = []
  //       for (const i in json) {

  //         console.log(json[i].value)
  //         files.push(json[i].value)

  //       }
  //       setData(files)
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  const tableData = {
    columns,
    data,
  };
  const style = {
    buttonStyle:
      "text-white hover:text-red-500 bg-red-500 hover:bg-[#E3F2FD] duration-300 focus:outline-none text-raleway font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2",
  };
  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
    console.log(selectedRows);
  }, []);
  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      confirm({
        title: "Are you sure you want to delete these files?",
        icon: <ExclamationCircleOutlined />,
        content: selectedRows.map((r) => r.fileName+", "),
        okText: "Yes",
        okType: "danger",
        cancelText: "No",

        onOk() {
          console.log("OK");
          //TODO: Delete from database
          setToggleCleared(!toggleCleared);
          setData(differenceBy(data, selectedRows, "fileName"));
        },

        onCancel() {
          console.log("Cancel");
        },
      });
    };
    
    return (
      <button onClick={handleDelete} type="button" className={style.buttonStyle}>
          Delete
        </button>
    );
  }, [data, selectedRows, toggleCleared]);

  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  return loading == true ? (
    <div>loading </div>
  ) : (
    <div className="">
      <div className="">
        <DataTableExtensions {...tableData}>
          <DataTable
            title="Documents"
            columns={columns}
            data={data}
            // noHeader
            defaultSortField="id"
            defaultSortAsc={false}
            pagination
            highlightOnHover
            onRowClicked={(selrow) => {
              dispatch(setModal(true));
              console.log(selrow);
              // setrow(row);
            }}
            selectableRows
            contextActions={contextActions}
            onSelectedRowsChange={handleRowSelected}
            clearSelectedRows={toggleCleared}
          />
        </DataTableExtensions>
      </div>
      {modal.isModal ? <FileView type={"pdf"} 
      // rellink={row.hash}
        rellink="QmSFr7mfrbiijCTCT8kw3vuqHg2xq86uJkHomY21KLkfNA"
      /> : <div></div>}
    </div>
  );
}

export default FileTable;
