import React from 'react'

const SchInfoCard = (props) => {
  return (
    <div>
    <div className="rounded-xl shadow-md px-5 py-3 font-raleway flex flex-col">
      
        <div className="font-bold text-[18px]">{props.name}</div>
        <div>{props.desc}</div>
        <div className="text-txtgrey"></div>
    </div>
    </div>
  )
}

export default SchInfoCard