import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setModal } from "../redux/fileModalSlice";
import { useSelector } from "react-redux";
export const FileView = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  console.log(modal.isModal);
  const oncrossclick = () => {
    dispatch(setModal(false));
  };
  return (
    <div className="absolute flex items-center justify-center top-0 min-w-full min-h-screen">
    <div className="flex items-center justify-center shadow-2xl">
      <div className=" h-[800px] w-[900px] flex">
        <Viewer fileUrl="sample.pdf" />
        <div className="absolute pl-2 pt-2">
          <AiOutlineClose
            size={20}
            onClick={oncrossclick}
          />
        </div>
      </div>
    </div>
  </div>
  );
};
