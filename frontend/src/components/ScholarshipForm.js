import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Form, Input, Select, Upload, Modal, Button } from "antd";
import axios from "axios";
import { AiFillExclamationCircle, AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setSchModal } from "../redux/schModalSlice.js";
import { useSelector } from "react-redux";


const ScholarshipForm = () => {
//   const { TextArea } = Input;
//   const [fileList, setFileList] = useState([]);
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [dropdown2, setDropdown2] = useState("");
  const [isPassport, setIsPassport] = useState(false);
  const [isMarkSheet, setIsMarkSheet] = useState(false);
  const[data,setData]=useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
//   const handleSubmit = () => {
//     const url =
//       fileList[0].type == "image/jpeg"
//         ? "http://localhost:8000/uploadJPEG"
//         : "http://localhost:8000/uploadPDF";

//     const formData = new FormData();
//     formData.append("image", fileList[0].originFileObj);
//     formData.append("fileName", fileList[0].name);
//     // formData.append("fileType", fileList[0].type);
//     formData.append("fileDesc", text);
//     formData.append("docType", dropdown);
//     formData.append("fileOwner", user.username);
//     formData.append("fileEmail", user.useremail);
//     const config = {
//       headers: {
//         "content-type": "multipart/form-data",
//       },
//     };
//     try {
//       axios.post(url, formData, config).then((response) => {
//         // console.log(response.data);
//         console.log(response.data);
//         dispatch(setFormModal(false));
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const uploadButton = (
//     <div>
//       <PlusOutlined />
//       <div
//         style={{
//           marginTop: 8,
//         }}
//       >
//         Upload
//       </div>
//     </div>
//   );


useEffect(() => {
    const url="http://localhost:8000/getfilesbyuser";
    const fetchData = async () => {
      try{
        setData([]);
        const email=user.useremail;
       const body = { email };

        const response= await fetch(url, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            })
            const json = await response.json();
        const files = []
        for (const i in json) {
        files.push(json[i].value);

        }
        setData(files)
        

      }catch (error) {
        //       console.log(error);
    }
  };
  fetchData();
},[])

useEffect(() => {
  data.map((file) => {
    if(file.docType==="Passport"){
      return setIsPassport(true);
    }
    if(file.docType==="MarkSheet"){
      return setIsMarkSheet(true);
    }
  })
},[data])

console.log(name);
console.log(college);
console.log(dropdown);
console.log(dropdown2);
console.log(cgpa);

  const oncrossclick = () => {
    dispatch(setSchModal(false));
  };
  return (
    <div className="absolute flex items-center justify-center top-0 min-w-full min-h-screen font-raleway">
      <Fade bottom>
        <div className="h-[48rem] w-[32rem] rounded-xl flex flex-col items-center justify-center  bg-white p-20 shadow-2xl ">
          <div className="flex justify-end w-[32rem] pr-5 pt-10">
            {" "}
            <AiOutlineClose size={20} onClick={oncrossclick} />
          </div>
          <div className="text-[30px] font-bold">SCHOLARSHIP FORM</div>

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
            <Form.Item label="Enter Full Name">
                <Input value={name} onChange={(e) => setName(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Enter College Name">
                <Input value={college} onChange={(e) => setCollege(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Select Year of Graduation">
              <Select value={dropdown} onChange={(e) => setDropdown(e)}>
                <Select.Option value="2022">2022</Select.Option>
                <Select.Option value="2023">2023</Select.Option>
                <Select.Option value="2024">
                  2024
                </Select.Option>
                <Select.Option value="2025">2025</Select.Option>
                <Select.Option value="2026">2026</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Select Scholarship Scheme">
              <Select style={{width:300}} value={dropdown2} onChange={(e) => setDropdown2(e)}>
                <Select.Option value="ABV">Atal Bihari Vajpayee General Scholarship</Select.Option>
                <Select.Option value="SJS">Suborno Jayanti Scholarship</Select.Option>
                <Select.Option value="APJ">Dr. Kalam Commonwealth Scholarship </Select.Option>
                <Select.Option value="NMS">Nehru Memorial Scholarship</Select.Option>
                <Select.Option value="SRC">Dr. S. Radhakrishnan Cultural Exchange Scholarship</Select.Option>
                <Select.Option value="ASS">Africa Scholarship Scheme</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Enter CGPA (out of 10)">
                <Input value={cgpa} onChange={(e) => setCgpa(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Passport Status">
          {isPassport?(<Button>Passport Status</Button>):(<Button>No Passport</Button>)}
        </Form.Item>
        <Form.Item label="Marksheet Status">
          <Button onClick={()=>{}}>12th Marksheet Status</Button>
        </Form.Item>
          </Form>
          <div className="mt-4">
            <button
              className=" bg-white hover:bg-bgblue duration-200 hover:text-white px-4 py-2 rounded-2xl text-[16px] font-semibold"
            //   onClick={handleSubmit}
            >
              Apply
            </button>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ScholarshipForm;
