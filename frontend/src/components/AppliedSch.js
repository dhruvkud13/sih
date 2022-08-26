import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setModal } from '../redux/fileModalSlice';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { FileView } from './FileViewer';
const { confirm } = Modal;



const AppliedSch = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const user = useSelector((state) => state.user);
  const modal = useSelector((state) => state.modal);
  const handleApprove = async (e) => {
    const url = "http://localhost:8000/approvescholar";
    try {
      setLoading(true);
      const email = props.email;
      const scholarshipID = props.no
      console.log(scholarshipID);
      const body = { email, scholarshipID };
      console.log(JSON.stringify(body))
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then((res) => {
        return res.json();
      }).then((data) => {
        setLoading(false);
        console.log(data);
        localStorage.setItem("key",'0')
      })
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }
  const handleReject = async (e) => {
    const url = "http://localhost:8000/rejectscholar";
    try {
      setLoading(true);
      const email = props.email;
      const scholarshipID = props.no
      console.log(scholarshipID);
      const body = { email, scholarshipID };
      console.log(JSON.stringify(body))
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then((res) => {
        return res.json();
      }).then((data) => {
        setLoading(false);
        console.log(data);
        localStorage.setItem("key",'0')
      })
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }
  const showConfirm = () => {
    confirm({
      title: 'Do you want to approve or dissapprove?',
      icon: <ExclamationCircleOutlined />,
      content: `CGPA: ${props.cgpa} , Colllege name: ${props.coll}`,
      okText: "Approve",
      cancelText: "Reject",
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
    <div >
      <div className="rounded-xl shadow-md px-5 py-3 font-raleway flex flex-col items-center justify-center">
        <div onClick={() => { dispatch(setModal(true)) }}>View Marksheet</div>
        <div className="font-bold text-[18px]">{props.name}</div>
        <div>{props.date}</div>
        <div>{props.degree}</div>
        <div  className='flex'>Status: {props.status}</div>
        <div onClick={showConfirm} className="text-txtgrey">Decide</div>
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
  )
}

export default AppliedSch