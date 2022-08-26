import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Form, Input, Select, Upload, Modal } from "antd";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setFormModal } from "../redux/formModalSlice.js";
import { setFolModal } from "../redux/folModalSlice.js";
import { useSelector } from "react-redux";
import { Spin } from "antd";
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
  const [loading, setLoading] = useState(false);
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
    console.log(fileList[0].name)
    console.log(fileList[0].originFileObj)
    console.log(text)
    console.log(dropdown)
    console.log(user.useremail)
    const formData = new FormData();
    formData.append("image", fileList[0].originFileObj);
    formData.append("fileName", fileList[0].name);
    // formData.append("fileType", fileList[0].type);
    formData.append("fileDesc", text);
    formData.append("docType", dropdown);
    formData.append("fileOwner", user.username);
    formData.append("fileEmail", user.useremail);
    formData.append("path", []);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    try {
      setLoading(true);
      axios.post(url, formData, config).then((response) => {
        // console.log(response.data);
        console.log(response.data);
        setLoading(false);
        dispatch(setFormModal(false));
      });
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  const handleChange = ({ file: newFile, fileList: newFileList }) => {
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
                <Select.Option value="Marksheet">Marksheet</Select.Option>
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
      {loading && <div className="absolute flex min-h-full min-w-full items-center justify-center"><Spin /></div>}
    </div>
  );
};
