import React from 'react'

const appliedSch = (props) => {
  return (
    <div>
        <div className="rounded-xl shadow-md px-5 py-3 font-raleway flex flex-col">
      
      <div className="font-bold text-[18px]">{props.name}</div>
      <div>{props.appliedDate}</div>
      <div className='flex flex-row'>Status: {props.status}<span className='ml-1'>{props.icon}</span></div>
      <div className="text-txtgrey"></div>
  </div>
    </div>
  )
}

export default appliedSch