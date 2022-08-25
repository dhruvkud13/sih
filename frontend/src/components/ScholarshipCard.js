import React from "react";

const ScholarshipCard = (props) => {
  return (
    <div className="rounded-xl shadow-xl flex justify-evenly px-5 py-3 font-raleway">
      <div className="flex flex-col items-start">
        <div className="font-bold">{props.userName}</div>
        <div>{props.schType}</div>
        <div className="text-txtgrey">Click to view details</div>
      </div>
      <div>{props.dateCreated}</div>
    </div>
  );
};

export default ScholarshipCard;
