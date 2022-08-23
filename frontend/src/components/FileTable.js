import React from "react";
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
