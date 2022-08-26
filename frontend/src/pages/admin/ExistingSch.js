import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SchInfoCard from "../../components/SchInfoCard";
import { setFormModal } from "../../redux/formModalSlice";
import { setCreateModal } from "../../redux/schModalSlice";
import CreateSch from "./CreateSch";

const ExistingSch = () => {
  const style = {
    buttonStyle:
      "text-white mt-2 mr-5 hover:text-govtblue bg-bgblue hover:bg-white duration-300 focus:outline-none text-raleway font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2",
  };
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const schModal = useSelector((state) => state.schModal);
  const[data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const url="http://localhost:8000/getallscholarship";
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
  },[schModal.isCreateModal])
  return (
    <div>
      <div className="flex justify-between">
        <div className="font-raleway px-5 mt-2 font-bold text-[20px] text-govtblue">
          Existing Government Scholarships
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {
              dispatch(setCreateModal(true));
              console.log(schModal.isCreateModal);
              // console.log(formModal.isFormModal);
            }}
            type="button"
            className={style.buttonStyle}
          >
            Add New Doc
          </button>
        </div>
      </div>
      <div className="flex-wrap">
        <div className="">
          <SchInfoCard
            name="Atal Bihari Vajpayee General Scholarship Scheme (ICCR)"
            desc="The Council has introduced return airfare for all under this scheme w.e.f 2022-23. The earlier students will continue to be governed by earlier guidelines."
          />
          <SchInfoCard
            name="Suborno Jayanti Scholarship Scheme (ICCR)"
            desc="The scholarships to Bangladesh nationals will be offered under one scheme Suborno Jayanti Scholarship Scheme subsuming all other schemes under which scholarships were being offered till now."
          />
        </div>
        <div className="">
          <SchInfoCard
            name="Dr. A.P.J Abdul Kalam Commonwealth Scholarship Scheme (ICCR)"
            desc="For the nationals of Commonwealth countries."
          />
          <SchInfoCard
            name="Nehru Memorial Scholarship Scheme (ICCR)"
            desc="For the nationals of Sri Lanka."
          />
        </div>
        <div className="">
          <SchInfoCard
            name="Dr. S. Radhakrishnan Cultural Exchange Scholarship Scheme (ICCR)"
            desc="For the nationals of 29 countries namely, Australia, Belarus, Brazil, Cambodia, Canada, China, Colombia, Cuba, France, Guyana, Hungary, Indonesia, Israel, Kuwait, Laos, Malaysia, Mexico, Mongolia, Myanmar, Norway, Romania, Russia, Slovenia, Spain, Syria, Turkmenistan, Uzbekistan, Vietnam and Yemen."
          />
          <SchInfoCard
            name="Africa Scholarship Scheme (MEA)"
            desc="For the nationals of 54 countries in the African continent"
          />
        </div>
      </div>
      <div>New Scholarships</div>
      {data.map((item)=>(
        <SchInfoCard name={item.scholarshipName} desc={item.scholarshipDesc}/>
      ))}
      
    </div>
  );
};

export default ExistingSch;
