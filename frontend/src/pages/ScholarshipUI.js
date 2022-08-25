import React from "react";
import ScholarshipCard from "../components/ScholarshipCard";
import { useSelector } from "react-redux";
const ScholarshipUI = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="flex flex-col">
    <div className="font-bold text-xl">Scholarships:</div>
    <div className="flex flex-wrap">{user.userType == "admin" ? (
        <ScholarshipCard userName="dhruv" />
      ) : (
        <ScholarshipCard
          userName="dhruv"
          schType="rip Scholarship"
          dateCreated="22/8/22"
        />
      )}</div>
      
    </div>
  );
};

export default ScholarshipUI;
