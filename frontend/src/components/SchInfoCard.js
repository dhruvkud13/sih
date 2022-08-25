import React from 'react'
import { useDispatch } from 'react-redux'
import { setdefname, setSchModal } from '../redux/schModalSlice'
const SchInfoCard = (props) => {
    const dispatch = useDispatch();
  return (
    <div onClick={()=>{dispatch(setSchModal(true)); dispatch(setdefname(props.name))}}>
    <div className="rounded-xl cursor-pointer shadow-md px-5 py-3 font-raleway flex flex-col">
      
        <div className="font-bold text-[18px]">{props.name}</div>
        <div>{props.desc}</div>
        <div className="text-txtgrey"></div>
    </div>
    </div>
  )
}

export default SchInfoCard