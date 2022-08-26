import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDeetsModal } from "../../redux/deetsModalSlice";
import { setFormModal } from "../../redux/formModalSlice";
import { useSelector } from "react-redux";
// import { setSchModal } from "../redux/schModalSlice.js";
import "../../components/FileTable.css";
import AppliedSch from "../../components/AppliedSch";
import { Modal } from "antd";
import Fade from "react-reveal/Fade";
import Details from "../../components/Details";


const { confirm } = Modal;
function ScholarshipFiles() {
  const schModal = useSelector((state) => state.schModal)
  const [data, setData] = useState([]);
  // const [data, setData] = useState(loldata);
  const [loading, setLoading] = useState(true);
  // const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const deetsModal = useSelector((state) => state.deetsModal)
  useEffect(() => {
    const url = "http://localhost:8000/getallapp";
    const fetchData = async () => {
      try {

        setData([])
        const response = await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
        const json = await response.json();
        const files = []
        for (const i in json) {
          if(json[i].value.cgpa>=7)
          files.push(json[i].value);
        }
        console.log(files)
        setData(files)
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const style = {
    approveStyle:
      "text-white hover:text-red-500 bg-red-500 hover:bg-[#E3F2FD] duration-300 focus:outline-none text-raleway font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2",
    rejectStyle:
      "text-white hover:text-govtblue bg-bgblue hover:bg-white duration-300 focus:outline-none text-raleway font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2",
  };
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  return loading === true ? (
    <div>loading </div>
  ) : (
    <div className="flex flex-col ">
      <div className="text-2xl font-raleway font-bold">Eligible Candidates:</div>
      <div className="flex flex-wrap">{data.map((item) => <AppliedSch name={item.Name} degree={item.Degree} cgpa={item.cgpa} coll={item.CollegeName} status={item.approved} no={item.scholarshipID} email={item.scholarshipEmail}/>)}</div>
      </div>
  );
}

export default ScholarshipFiles;
