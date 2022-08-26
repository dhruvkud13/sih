import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setDeetsModal } from "../redux/deetsModalSlice";
import Fade from "react-reveal/Fade";
import { AiOutlineClose } from "react-icons/ai";
import { setModal } from "../redux/fileModalSlice.js";
import { FileView } from "../components/FileViewer";
const Details = (props) => {
  const handleApprove = async (e) => {
    const url = "http://localhost:8000/approvescholar";
    try {
      const email = user.useremail;
      const scholarshipID = props.no
      console.log(scholarshipID);
      const body = { email, scholarshipID };
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then((res) => {
        return res.json();
      }).then((data) => {
        console.log(data);
      })
    } catch (err) {
      console.log(err);
    }
  }
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const user=useSelector((state) => state.user);
  const oncrossclick = () => {
    dispatch(setDeetsModal(false));
  };
  return (
    <div className="absolute flex items-center justify-center top-0 min-w-full min-h-screen font-raleway">
      <Fade bottom>
        <div className="rounded-xl flex flex-col items-center justify-center  bg-white p-5 shadow-2xl ">
          <div className="flex justify-around w-[100%]">
            {" "}
            <div className="text-[28px] font-bold pr-5">Student Details</div>
            <AiOutlineClose size={20} onClick={oncrossclick} />
          </div>
          <div onClick={() => dispatch(setModal(true))}></div>
          <div onClick={() => { handleApprove() }}>Aprove</div>
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
      </Fade>
    </div>
  );
};

export default Details;
