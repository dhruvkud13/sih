import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { columns } from "../data";
import { useDispatch } from "react-redux";
import { setModal } from "../redux/fileModalSlice.js";
import { setFormModal, setFolPath, setType } from "../redux/formModalSlice";
import { useSelector } from "react-redux";
import { FileView } from "./FileViewer";
import "./FileTable.css";
import differenceBy from "lodash/differenceBy";
import { ExclamationCircleOutlined, LeftOutlined } from "@ant-design/icons";
import { Modal } from "antd";

import Fade from "react-reveal/Fade";
const { confirm } = Modal;
const FolderTable = () => {

  // const [loading, setLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [row, setrow] = useState();
  const [path, setPath] = useState([]);
  // const [allData, setAllData] = useState(loldata);
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const user = useSelector((state) => state.user);
  const formModal = useSelector((state)=>state.formModal)
  useEffect(() => {
    const url = "http://localhost:8000/getallfilesfolders";
    const fetchData = async () => {
      try {
        setAllData([]);
        const response = await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const json = await response.json();
        const files = [];
        for (const i in json) {
          // console.log(json[i].value);
          files.push(json[i].value);
        }
        setAllData(files);
        console.log(files)
        setLoading(false);

      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [path,formModal.isFormModal]);
  useEffect(() => {
    setData(
      allData.filter((item) => {
        // if(JSON.stringify(item.path) == JSON.stringify(path))
        console.log(item)
        return JSON.stringify(item.path) == JSON.stringify(path);
      }))
  }, [allData,path])
  
  const rowClicked = (selrow) => {
    // console.log(selrow);
    // setrow(row);
    if (selrow.type === "file") dispatch(setModal(true));
    else {
      let fname = "";
      data.map((item) => {
        if (item.fileNumber === selrow.fileNumber) fname = item.fileName;
      });
      var tempPath = [];
      tempPath = path;
      tempPath.push(fname);
      setPath(tempPath);
      // console.log(path)
      setData(
        allData.filter((item) => {
          return JSON.stringify(item.path) == JSON.stringify(path);
        })
      );
    }
  };
  const tableData = {
    columns,
    data,
  };
  const style = {
    delStyle:
      "text-white hover:text-red-500 bg-red-500 hover:bg-[#E3F2FD] duration-300 focus:outline-none text-raleway font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2",
    buttonStyle:
      "text-white hover:text-govtblue bg-bgblue hover:bg-white duration-300 focus:outline-none text-raleway font-medium rounded-full text-sm px-4 py-2.5 text-center mb-2 mx-1",
    backStyle:
      "text-white hover:text-govtblue bg-bgblue hover:bg-white duration-300 focus:outline-none text-raleway font-medium rounded-full text-sm px-3 py-1.5 text-center mb-2",
  };
  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
    // console.log(selectedRows);
  }, []);
  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      confirm({
        title: "Are you sure you want to delete these files?",
        icon: <ExclamationCircleOutlined />,
        content: selectedRows.map((r) => r.fileName + ", "),
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
      <button onClick={handleDelete} type="button" className={style.delStyle}>
        Delete
      </button>
    );
  }, [data, selectedRows, toggleCleared]);

  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  return loading === true ? (
    <div>loading </div>
  ) : (
    <Fade right>
      <div className="">
        <div className="flex justify-between">
          <div
            className={style.backStyle}
            onClick={() => {
              let temp = [...path];
              // console.log(temp)
              temp.pop();
              // console.log(temp)
              return setPath(temp);
            }}
          >
            <LeftOutlined />
          </div>
          <div><button

            onClick={() => {
              dispatch(setFormModal(true));
              dispatch(setType("file"));
              // console.log(formModal.isFormModal);
            }}
            type="button"
            className={style.buttonStyle}
          >
            Add New Doc
          </button><button
            onClick={() => {
              dispatch(setFormModal(true));
              dispatch(setType("folder"));
              dispatch(setFolPath(path));
              // console.log(formModal.isFormModal);
            }}
            type="button"
            className={style.buttonStyle}
          >
              Add Folder
            </button></div>

        </div>
        <div className="">
          <DataTableExtensions {...tableData}>
            <DataTable
              title="Files and folders"
              columns={columns}
              data={data}
              // noHeader
              defaultSortField="id"
              defaultSortAsc={false}
              pagination
              highlightOnHover
              onRowClicked={rowClicked}
              selectableRows
              contextActions={contextActions}
              onSelectedRowsChange={handleRowSelected}
              clearSelectedRows={toggleCleared}
            />
          </DataTableExtensions>
        </div>
        {modal.isModal ? (
          <FileView
            type={"pdf"}
            // rellink={row.hash}
            rellink="QmSFr7mfrbiijCTCT8kw3vuqHg2xq86uJkHomY21KLkfNA"
          />
        ) : (
          <div></div>
        )}
      </div>
    </Fade>
  );
};

export default FolderTable;
