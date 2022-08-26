import React from 'react'
import { useDispatch } from 'react-redux'
import { setdefname, setJobModal,setJobID } from '../redux/jobModalSlice'
const JobInfoCard = (props) => {
  console.log(props.no)
  const dispatch = useDispatch();
  return (
    <div onClick={() => { dispatch(setJobModal(true)); dispatch(setdefname(props.name)); dispatch(setJobID(props.no)) }}>
      <div className="rounded-xl cursor-pointer shadow-md px-5 py-3 font-raleway flex flex-col">

        <div className="font-bold text-[18px]">{props.name}</div>
        <div>{props.desc}</div>
        <div className="text-txtgrey"></div>
      </div>
    </div>
  )
}

export default JobInfoCard