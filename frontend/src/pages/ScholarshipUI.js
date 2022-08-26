
import React, { useState, useEffect } from 'react'
import SchInfoCard from '../components/SchInfoCard'
import AppliedSch from '../components/AppliedSch';
import {MdOutlinePendingActions} from 'react-icons/md'
import {TiTickOutline} from 'react-icons/ti'
import {ImCross} from 'react-icons/im'
import { useSelector } from "react-redux";
import AppliedSchU from './user/userApplied';

const ScholarshipUI = () => {

  const[existData,setexistData]=useState([])
  const[applyData,setapplyData]=useState([])
  const[loading,setLoading]=useState(true);
  const user = useSelector((state) => state.user);
 const schModal = useSelector((state) => state.schModal)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url="http://localhost:8000/getallscholarship";
        setexistData([]);
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
        setexistData(files);
        console.log(files)
        setLoading(false);

      } catch (error) {
        console.log(error);
      }
      
      try {
        setapplyData([]);
        const scholarshipEmail = user.useremail;
        const body = { scholarshipEmail };
        console.log(JSON.stringify(body));
        const url1="http://localhost:8000/getscholarshipbyemail"
        const response = await fetch(url1, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
        const json = await response.json();
        const files = []
        for (const i in json) {
          files.push(json[i].value);

        }
        console.log(files);
        setapplyData(files)
      } catch (error) {
        console.log(error);
      }
  };
    fetchData();
  },[schModal.isApplyModal])
  return (
    <div>
        <div className='font-raleway px-5 pb-3 font-bold text-[20px] text-govtblue'>Apply for existing government scholarships</div>
        <div className='flex-wrap'>
        <div className=''>
        <SchInfoCard no="555" name="Atal Bihari Vajpayee General Scholarship Scheme (ICCR)" desc="The Council has introduced return airfare for all under this scheme w.e.f 2022-23. The earlier students will continue to be governed by earlier guidelines." />
        <SchInfoCard no="665" name="Suborno Jayanti Scholarship Scheme (ICCR)" desc="The scholarships to Bangladesh nationals will be offered under one scheme Suborno Jayanti Scholarship Scheme subsuming all other schemes under which scholarships were being offered till now." />
        </div>
        <div className=''>
        <SchInfoCard no="545" name="Dr. A.P.J Abdul Kalam Commonwealth Scholarship Scheme (ICCR)" desc="For the nationals of Commonwealth countries." />
        <SchInfoCard no="53" name="Nehru Memorial Scholarship Scheme (ICCR)" desc="For the nationals of Sri Lanka." />
        </div>
        <div className=''>
        <SchInfoCard no="5435" name="Dr. S. Radhakrishnan Cultural Exchange Scholarship Scheme (ICCR)" desc="For the nationals of 29 countries namely, Australia, Belarus, Brazil, Cambodia, Canada, China, Colombia, Cuba, France, Guyana, Hungary, Indonesia, Israel, Kuwait, Laos, Malaysia, Mexico, Mongolia, Myanmar, Norway, Romania, Russia, Slovenia, Spain, Syria, Turkmenistan, Uzbekistan, Vietnam and Yemen." />
        <SchInfoCard no="445645" name="Africa Scholarship Scheme (MEA)" desc="For the nationals of 54 countries in the African continent" />
        </div>
        <div className='font-raleway px-5 py-3 font-bold text-[20px] text-govtblue'>New Scholarships</div>
        {existData.map((item)=><SchInfoCard name={item.scholarshipName} desc={item.scholarshipDesc} no={item.scholarshipNumber}/>)}
        <div className='font-raleway px-5 py-3 font-bold text-[20px] text-govtblue'>Applied Scholarships</div>
        <div>
        {/* {existData.map((item)=>console.log(item.scholarshipNumber))} */}
        {applyData.map((item)=><AppliedSchU name={item.Degree} status={item.approved}  />)}
        </div>
        </div>
    </div>
  )
}

export default ScholarshipUI

