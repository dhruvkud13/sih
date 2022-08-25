import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { columns } from "../data";
import { useDispatch } from "react-redux";
import { setModal } from "../redux/fileModalSlice.js";
import { setFormModal } from "../redux/formModalSlice";
import { useSelector } from "react-redux";
import {setFolModal} from "../redux/folModalSlice";
import { FileView } from "./FileViewer";
import "./FileTable.css";
import differenceBy from "lodash/differenceBy";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import {
  setjpeg,
  setpdf,
  setAadharCard,
  setRationCard,
  setDrivingLicense,
  setPassport,
  setPANCard,
} from "../redux/statSlice";
import Fade from "react-reveal/Fade";
import { FolderForm } from "./Form";

const { confirm } = Modal;
function FileTable() {
  const [data, setData] = useState([]);
  // const [data, setData] = useStat);
  const [loading, setLoading] = useState(true);
  // const [loading, setLoading] = useState(false);
  const [row, setrow] = useState();
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const user = useSelector((state) => state.user);
  const formModal = useSelector((state)=>state.formModal)
  useEffect(() => {
    const url =
      // user.userType === "user"
      //   ? "http://localhost:8000/getfilesbyuser"
        // : 
        "http://localhost:8000/getallfiles";
        const fetchData = async () => {
          try {
            setData([]);
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
            setData(files);
            console.log(files)
            setLoading(false);
    
          } catch (error) {
            console.log(error);
          }
        };
    fetchData();
    const initStats = () => {
      var pdfCount = 0;
      var jpegCount = 0;
      data.map((file) => {
        if (file.fileType === "image/jpeg") {
          jpegCount++;
        } else {
          pdfCount++;
        }
      })
      dispatch(setjpeg(jpegCount));
      dispatch(setpdf(pdfCount));
    }
    initStats();
    const docStats = () => {
      var aadharCount = 0;
      var rationCount = 0;
      var passportCount = 0;
      var panCount = 0;
      var drivingCount = 0;
      data.map((file) => {
        if (file.docType === "Aadhar Card") {
          aadharCount++;
        }
        else if (file.docType === "Ration Card") {
          rationCount++;
        }
        else if (file.docType === "Passport") {
          passportCount++;
        }
        else if (file.docType === "PAN Card") {
          panCount++;
        }
        else if (file.docType === "Driving License") {
          drivingCount++;
        }
      })
      dispatch(setAadharCard(aadharCount));
      dispatch(setRationCard(rationCount));
      dispatch(setPassport(passportCount));
      dispatch(setPANCard(panCount));
      dispatch(setDrivingLicense(drivingCount));
    }
    docStats();
  }, []);

  // useEffect(() => {
  //   const initStats = () => {
  //     var pdfCount = 0;
  //     var jpegCount = 0;
  //     data.map((file) => {
  //       if (file.fileType === "image/jpeg") {
  //         jpegCount++;
  //       } else {
  //         pdfCount++;
  //       }
  //     });
  //     dispatch(setjpeg(jpegCount));

  //     dispatch(setpdf(pdfCount));
  //   };
  //   initStats();
  // }, []);

  // useEffect(() => {
  //   const docStats = () => {
  //     var aadharCount = 0;
  //     var rationCount = 0;
  //     var passportCount = 0;
  //     var panCount = 0;
  //     var drivingCount = 0;
  //     data.map((file) => {
  //       if (file.docType === "Aadhar Card") {
  //         aadharCount++;
  //       } else if (file.docType === "Ration Card") {
  //         rationCount++;
  //       } else if (file.docType === "Passport") {
  //         passportCount++;
  //       } else if (file.docType === "PAN Card") {
  //         panCount++;
  //       } else if (file.docType === "Driving License") {
  //         drivingCount++;
  //       }
  //     });
  //     dispatch(setAadharCard(aadharCount));
  //     dispatch(setRationCard(rationCount));
  //     dispatch(setPassport(passportCount));
  //     dispatch(setPANCard(panCount));
  //     dispatch(setDrivingLicense(drivingCount));
  //   };
  //   docStats();
  // });
  const tableData = {
    columns,
    data,
  };
  const style = {
    delStyle:
      "text-white hover:text-red-500 bg-red-500 hover:bg-[#E3F2FD] duration-300 focus:outline-none text-raleway font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2",
    buttonStyle:
      "text-white hover:text-govtblue bg-bgblue hover:bg-white duration-300 focus:outline-none text-raleway font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2",
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
          const url = "http://localhost:8000/deletefile";
          selectedRows.map((selRow) => {
            const body = {
              fileNumber: selRow.fileNumber,
            };
            fetch(url, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            })
          })
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
        <div className="flex justify-end">
          <button
            onClick={() => {
              dispatch(setFormModal(true));
              dispatch(setFolModal(false));
            }}
            type="button"
            className={style.buttonStyle}
          >
            Add New Doc
          </button>
        </div>
        <div className="">
          <DataTableExtensions {...tableData}>
            <DataTable
              title="All files"
              columns={columns}
              data={data}
              // noHeader
              defaultSortField="id"
              defaultSortAsc={false}
              pagination
              highlightOnHover
              onRowClicked={(selrow) => {
                dispatch(setModal(true));
                // console.log(selrow);
                // setrow(row);
              }}
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
}

export default FileTable;
