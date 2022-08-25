import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import "antd/dist/antd.css";
import { Form, Input} from "antd";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setCreateModal } from "../../redux/schModalSlice.js";
import axios from "axios";


const CreateSch = () => {
  const { TextArea } = Input;
  const [fileList, setFileList] = useState([]);
  const [name,setName]=useState("");
    const[scholarship,setScholarship]=useState("");
  const [text, setText] = useState("");
//   const [dropdown, setDropdown] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const schModal = useSelector((state) => state.schModal);
  const handleSubmit =async (e) => {
    e.preventDefault();
    const url ="http://localhost:8000/createScholarship";

    
    try {
        const email=user.useremail;
      const body={name,scholarship,text,email};
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then((res)=>{
        console.log(res);
      }).then((data)=>{
        console.log(data);
      })
    } catch (err) {
      console.log(err);
    }
  };
  const oncrossclick = () => {
    console.log(schModal.isCreateModal);
    dispatch(setCreateModal(false));
  };

  console.log(name);
    console.log(scholarship);
    console.log(text);
    console.log(fileList);
  return (
    <div className="absolute flex items-center justify-center top-0 min-w-full min-h-screen font-raleway">
      <Fade bottom>
        <div className=" rounded-xl flex flex-col items-center justify-center  bg-white p-10 shadow-2xl ">
          <div className="flex justify-end w-[100%]">
            {" "}
            <div className="text-[30px] font-bold pr-5">CREATE SCHOLARSHIP</div>
            <AiOutlineClose size={20} onClick={oncrossclick} />
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
            <Form.Item label="Enter Organisation Name">
                <Input value={name} onChange={(e) => setName(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Enter Name of Scholarship">
                <Input value={scholarship} onChange={(e) => setScholarship(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Scholarship Description ">
              <TextArea
                rows={4}
                placeholder="Description:"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Form.Item>
          </Form>
          <div className="mt-4">
            <button
              className=" bg-white hover:bg-bgblue duration-200 hover:text-white px-4 py-2 rounded-2xl text-[16px] font-semibold"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default CreateSch;