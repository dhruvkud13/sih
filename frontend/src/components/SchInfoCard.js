import React from 'react'
import { useDispatch } from 'react-redux'
import { setdefname, setSchModal,setschNo } from '../redux/schModalSlice'
const SchInfoCard = (props) => {
  console.log(props.no)
  const dispatch = useDispatch();
  return (
    <div onClick={() => { dispatch(setSchModal(true)); dispatch(setdefname(props.name)); dispatch(setschNo(props.no)) }}>
      <div className="rounded-xl cursor-pointer shadow-md px-5 py-3 font-raleway flex flex-col">

        <div className="font-bold text-[18px]">{props.name}</div>
        <div>{props.desc}</div>
        <div className="text-txtgrey"></div>
      </div>
    </div>
  )
}

export default SchInfoCard