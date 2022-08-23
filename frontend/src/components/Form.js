import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import "antd/dist/antd.css";
import Icon from "@ant-design/icons";
import { Form, Input, Select, Cascader, Upload, Modal } from "antd";
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

const UploadForm = () => {
  const { TextArea } = Input;
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => setPreviewVisible(false);
  const dispatch = useDispatch();
  const formModal = useSelector((state) => state.formModal);
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
    const url = "http://localhost:3000/uploadPDF";
    const formData = new FormData();
    formData.append("image", fileList[0].originFileObj);
    formData.append("fileName", fileList[0].name);
    formData.append("fileType", fileList[0].type);
    formData.append("fileDesc",);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((response) => {
      // console.log(response.data);
      console.log(response.status);
    });
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
        <div className="h-[40rem] w-[32rem] rounded-xl flex flex-col items-center justify-center  bg-white p-20 shadow-2xl ">
          <div className="flex justify-end w-[32rem] pr-5">
            {" "}
            <AiOutlineClose size={20} onClick={oncrossclick} />
          </div>
          <div className="text-[30px] font-bold">DOCUMENT UPLOAD FORM</div>

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
                <Select>
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
                <TextArea rows={4} placeholder="Description:" />
              </Form.Item>
              <Form.Item label="Upload Document Here!" valuePropName="fileList">
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                  beforeUpload={()=>false}
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
          
              <button className=" bg-white hover:bg-bgblue duration-200 hover:text-white px-4 py-2 rounded-2xl text-[16px] font-semibold" onClick={handleSubmit}>
                SUBMIT
              </button>
            </div>
        </div>
      </Fade>
    </div>
  );
};

export default UploadForm;
