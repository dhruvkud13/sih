import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Form, Input, Select, Upload, Modal } from "antd";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setFormModal } from "../redux/formModalSlice.js";
import { useSelector } from "react-redux";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

export const UploadForm = () => {
  const { TextArea } = Input;
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const [text, setText] = useState("");
  const [dropdown, setDropdown] = useState("");
  const handleCancel = () => setPreviewVisible(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleSubmit = () => {
    const url =
      fileList[0].type === "image/jpeg"
        ? "http://localhost:8000/uploadJPEG"
        : "http://localhost:8000/uploadPDF";

    const formData = new FormData();
    formData.append("image", fileList[0].originFileObj);
    formData.append("fileName", fileList[0].name);
    // formData.append("fileType", fileList[0].type);
    formData.append("fileDesc", text);
    formData.append("docType", dropdown);
    formData.append("fileOwner", user.username);
    formData.append("fileEmail", user.useremail);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    try {
      axios.post(url, formData, config).then((response) => {
        // console.log(response.data);
        console.log(response.data);
        dispatch(setFormModal(false));
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = ({ file: newFile, fileList: newFileList }) => {
    console.log(newFileList);
    setFileList(newFileList);
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const oncrossclick = () => {
    dispatch(setFormModal(false));
  };
  return (
    <div className="absolute flex items-center justify-center top-0 min-w-full min-h-screen font-raleway">
      <Fade bottom>
        <div className=" rounded-xl flex flex-col items-center justify-center  bg-white p-10 shadow-2xl ">
          <div className="flex justify-end w-[100%]">
            {" "}
            <div className="text-[30px] font-bold pr-5">UPLOAD FILE</div>
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
            <Form.Item label="Select document to upload">
              <Select value={dropdown} onChange={(e) => setDropdown(e)}>
                <Select.Option value="Aadhar Card">Aadhar Card</Select.Option>
                <Select.Option value="Ration Card">Ration Card</Select.Option>
                <Select.Option value="Driving License">
                  Driving License
                </Select.Option>
                <Select.Option value="Passport">Passport</Select.Option>
                <Select.Option value="PAN Card">PAN Card</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Enter Description">
              <TextArea
                rows={4}
                placeholder="Description:"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Upload Document Here!" valuePropName="fileList">
              <Upload
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                beforeUpload={() => false}
                accept=".pdf,.jpeg"
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
              <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
              >
                <img
                  alt="example"
                  style={{
                    width: "100%",
                  }}
                  src={previewImage}
                />
              </Modal>
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

export const FolderForm = () => {const { TextArea } = Input;
const [fileName, setFileName] = useState("");
const dispatch = useDispatch();
const user = useSelector((state) => state.user);
const formModal=useSelector((state)=>state.formModal);

const handleSubmit = async() => {
  
  try {
    const url ="http://localhost:8000/createFolder";
  const body={"type":"folder","fileOwner":user.username,"fileEmail":user.useremail, "path":formModal.path, "fileName":fileName};
    await fetch("url", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }).then((res) => {
          
          return res.json()
        }).then((data)=>{
         
        });
  } catch (err) {
    console.log(err);
  }
};
const oncrossclick = () => {
  dispatch(setFormModal(false));
};
return (
  <div className="absolute flex items-center justify-center top-0 min-w-full min-h-screen font-raleway">
    <Fade bottom>
      <div className="rounded-xl flex flex-col items-center justify-center  bg-white p-5 shadow-2xl ">
        <div className="flex justify-around w-[100%]">
          {" "}
          <div className="text-[28px] font-bold pr-5">Create New Folder</div>
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
);}
