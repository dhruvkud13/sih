import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobInfoCard from "../../components/jobInfoCard";
import { setFormModal } from "../../redux/formModalSlice";
import { setCreateModal } from "../../redux/jobModalSlice";
import HiringCreate from "../../components/HiringCreate";

const ExistingJobs = () => {
  const style = {
    buttonStyle:
      "text-white mt-2 mr-5 hover:text-govtblue bg-bgblue hover:bg-white duration-300 focus:outline-none text-raleway font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2",
  };
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const jobModal = useSelector((state) => state.jobModal);
  const[data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const url="http://localhost:8000/getalljob";
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
  },[jobModal.isCreateModal])
  return (
    <div>
      <div className="flex justify-between">
        <div className="font-raleway px-5 mt-2 font-bold text-[20px] text-govtblue">
          Existing Jobs
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {
              dispatch(setCreateModal(true));
              console.log(jobModal.isCreateModal);
              // console.log(formModal.isFormModal);
            }}
            type="button"
            className={style.buttonStyle}
          >
            Add New Job
          </button>
        </div>
      </div>
      <div className="flex-wrap">
      {data.map((item)=>(
        <JobInfoCard name={item.JobDesc} desc={item.JobDesc}/>
      ))}
      </div>
      <div>New Jobs</div>
      {data.map((item)=>(
        <JobInfoCard name={item.jobName} desc={item.jobDesc} no={item.JobNumber}/>
      ))}
      
    </div>
  );
};

export default ExistingJobs;
