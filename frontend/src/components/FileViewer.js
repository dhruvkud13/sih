import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setModal } from "../redux/fileModalSlice.js";
import { useSelector } from "react-redux";
import img from "../images/kj.jpeg";
export const FileView = (props) => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const oncrossclick = () => {
    dispatch(setModal(false));
  };
  const link = "https://ishaanhello.infura-ipfs.io/ipfs/" + props.rellink
  return (
    <div className="absolute flex items-center justify-center min-w-full min-h-screen">
      <div className="flex items-center justify-center shadow-2xl">
        <div className=" h-[800px] w-[900px] flex">
          {props.type === "pdf" ? (
            <div className=" h-[800px] w-[900px] flex">
              <Viewer fileUrl={link} />
            </div>
          ) : (
            <div className="bg-white flex items-center justify-center">
              <img src={img} alt="" height={"800px"} width={"900px"} />
            </div>
          )}
          <div className="absolute pl-2 pt-2">
            <AiOutlineClose size={20} onClick={oncrossclick} />
          </div>
        </div>
      </div>
    </div>
  );
};
