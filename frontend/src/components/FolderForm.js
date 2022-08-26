import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import "antd/dist/antd.css";
import { Form, Input} from "antd";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setFolModal } from "../redux/folModalSlice.js";
import { useSelector } from "react-redux";
import { Spin } from "antd";
export const FolderForm = () => {
  const { TextArea } = Input;
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const folModal = useSelector((state) => state.folModal);
  console.log(folModal)
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const url = "http://localhost:8000/createFolder";
      const body = { "path": folModal.path, "fileName": fileName, "fileEmail": user.useremail };
      // console.log(JSON.stringify(body))
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then((res) => {
        dispatch(setFolModal(false))
        setLoading(false);
        console.log(res)
      });
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  const onxclick = () => {
    dispatch(setFolModal(false));
  };
  return (
    <div className="absolute flex items-center justify-center top-0 min-w-full min-h-screen font-raleway">
    <div className="absolute"><Spin/></div>
      <Fade bottom>
        <div className="rounded-xl flex flex-col items-center justify-center  bg-white p-5 shadow-2xl ">
          <div className="flex justify-around w-[100%]">
            {" "}
            <div className="text-[28px] font-bold pr-5">Create New Folder</div>
            <AiOutlineClose size={20} onClick={onxclick} />
          </div>

          <Form
            labelCol={{
              span: 30,
            }}
            wrapperCol={{
              span: 50,
            }}
            labelAlign="left"
            layout="vertical"

          >
            <Form.Item label="Enter Folder Name">
              <TextArea
                rows={1}
                placeholder="Folder Name"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
              />
            </Form.Item>
          </Form>
          <div className="mt-4">
            <button
              className=" bg-white hover:bg-bgblue duration-200 hover:text-white px-4 py-2 rounded-2xl text-[16px] font-semibold"
              onClick={handleSubmit}
            >
              ADD
            </button>
          </div>
        </div>
      </Fade>
    </div>
  );
}
