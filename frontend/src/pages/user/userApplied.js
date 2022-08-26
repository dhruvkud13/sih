import React from 'react'
import { useNavigate } from 'react-router-dom';



const AppliedSchU = (props) => {
  const navigate = useNavigate();
  const approveText = () => { if (props.status == 0) { return "Pending"; } else if (props.status == 1) { return "Approved"; } else { return "Rejected" }; }
  const onPressed = () => { if (props.status == 1) navigate("/bankform") }
  const styles = {
    statusStyle: `rounded-xl shadow-md px-5 py-3 font-raleway flex flex-col ${props.status == 1 ? "border-2 border-green-500" : props.status==2?"border-2 border-red-500":""}`,
  }
  return (
    <div>
      <div onClick={() => { onPressed() }} className={styles.statusStyle}>

        <div className="font-bold text-[18px] ">{props.name}</div>
        <div>{props.date}</div>
        <div className='flex flex-row'>Status: {approveText()}</div>
        <div className="text-txtgrey"></div>
      </div>
    </div>
  )
}

export default AppliedSchU