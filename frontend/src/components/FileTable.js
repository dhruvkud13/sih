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
import OurButton from "./OurButton";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";

const { confirm } = Modal;
function FileTable() {
  const [data, setData] = useState(loldata);
  const [loading, setLoading] = useState(true);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  // useEffect(() => {
  //   const url = "http://localhost:3000/getallfiles";
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const json = await response.json();
  //       for (const file in json) {
  //         if(file.fileVisibility)
  //         setData([...data, file]);
  //       }
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
  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);
  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      confirm({
        title: "Are you sure delete these task?",
        icon: <ExclamationCircleOutlined />,
        content: selectedRows.map((r) => r.title),
        okText: "Yes",
        okType: "danger",
        cancelText: "No",

        onOk() {
          console.log("OK");
          //TODO: Delete from database
          setToggleCleared(!toggleCleared);
          setData(differenceBy(data, selectedRows, "title"));
        },

        onCancel() {
          console.log("Cancel");
        },
      });
    };

    return (
      <OurButton
        onClick={handleDelete}
        title="Delete"
        color="red-500"
        hoverColor="[#E3F2FD]"
        textHoverColor="red-500"
      />
    );
  }, [data, selectedRows, toggleCleared]);
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  return (
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
            onRowClicked={() => dispatch(setModal(true))}
            selectableRows
            contextActions={contextActions}
            onSelectedRowsChange={handleRowSelected}
            clearSelectedRows={toggleCleared}
          />
        </DataTableExtensions>
      </div>
      {modal.isModal ? <FileView type={"pdf"} /> : <div></div>}
    </div>
  );
}

export default FileTable;
