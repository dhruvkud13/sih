import React,{useEffect, useState} from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { columns, data } from "../data";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useDispatch } from "react-redux";
import { setModal } from "../redux/fileModalSlice.js";
import { useSelector } from "react-redux";
import { FileView } from "./FileViewer";
import "./FileTable.css";

function FileTable() {
  const [fileData, setFileData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url = "http://localhost:3000/getallfiles";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        for (const file in json) {
          if(file.fileVisibility)
          setFileData([...fileData, file]);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // console.log(data); //why is this empty?
  }, []);
  const tableData = {
    columns,
    data,
  };
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  return (
    <div className="">
      <div className="">
        <DataTableExtensions {...tableData}>
          <DataTable
            columns={columns}
            data={data}
            noHeader
            defaultSortField="id"
            defaultSortAsc={false}
            pagination
            highlightOnHover
            onRowClicked={() => dispatch(setModal(true))}
          />
        </DataTableExtensions>
      </div>
      {modal.isModal ? <FileView type={"pdf"}/> : <div></div>}
    </div>
  );
}

export default FileTable;
