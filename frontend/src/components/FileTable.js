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
import differenceBy from 'lodash/differenceBy';
import OurButton from "./OurButton";

function FileTable() {
  const [fileData, setFileData] = useState(data);
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
  //         setFileData([...fileData, file]);
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
    fileData,
  };
  const handleRowSelected = React.useCallback(state => {
		setSelectedRows(state.selectedRows);
	}, []);
  const contextActions = React.useMemo(() => {
		const handleDelete = () => {
			
			if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.title)}?`)) {
				setToggleCleared(!toggleCleared);
				setFileData(differenceBy(fileData, selectedRows, 'title'));
			}
		};
    console.log(fileData);

		return (
			<OurButton onClick={handleDelete} title="Delete" />
		);
	}, [fileData, selectedRows, toggleCleared]);
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  return (
    <div className="">
      <div className="">
        {/* <DataTableExtensions {...tableData}> */}
          <DataTable
            title="Documents"
            columns={columns}
            data={fileData}
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
        {/* </DataTableExtensions> */}
      </div>
      {modal.isModal ? <FileView type={"pdf"}/> : <div></div>}
    </div>
  );
}

export default FileTable;
