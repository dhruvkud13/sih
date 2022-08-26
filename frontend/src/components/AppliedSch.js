import React from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
const { confirm } = Modal;



const AppliedSch = (props) => {
  const user = useSelector((state) => state.user);
  const handleApprove=async(e)=>{
    const url="http://localhost:8000/approvescholar";
    try{
      const email=props.email;
      const scholarshipID=props.no
      console.log(scholarshipID);
        const body={email,scholarshipID};
        console.log(JSON.stringify(body))
        await fetch(url,{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(body),
        }).then((res)=>{
          return res.json();
        }).then((data)=>{
          console.log(data);
        })
    }catch(err){
      console.log(err);
    }
  }
  const handleReject=async(e)=>{
    const url="http://localhost:8000/rejectscholar";
    try{
      const email=props.email;
      const scholarshipID=props.no
      console.log(scholarshipID);
        const body={email,scholarshipID};
        console.log(JSON.stringify(body))
        await fetch(url,{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(body),
        }).then((res)=>{
          return res.json();
        }).then((data)=>{
          console.log(data);
        })
    }catch(err){
      console.log(err);
    }
  }
  const showConfirm = () => {
    confirm({
      title: 'Do you want to approve or dissapprove?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText:"Approve",
      cancelText:"Reject",
      onOk() {
        console.log('OK');
        handleApprove();
      },
  
      onCancel() {
        console.log('Cancel');
        handleReject();
      },
    });
  };
  return (
    <div onClick={showConfirm}>
        <div className="rounded-xl shadow-md px-5 py-3 font-raleway flex flex-col">
      
      <div className="font-bold text-[18px]">{props.name}</div>
      <div>{props.date}</div>
      <div className='flex flex-row'>Status: {props.status}</div>
      <div className="text-txtgrey"></div>
  </div>
    </div>
  )
}

export default AppliedSch