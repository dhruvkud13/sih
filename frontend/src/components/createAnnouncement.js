import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import "antd/dist/antd.css";
import { Form, Input, Modal, Upload} from "antd";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { setCreateModal } from "../../redux/schModalSlice.js";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });


const CreateAnnouncement = () => {
  const { TextArea } = Input;
  const [name,setName]=useState("");
  const [text, setText] = useState("");
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
//   const [dropdown, setDropdown] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const schModal = useSelector((state) => state.schModal);
  const handleCancel = () => setPreviewVisible(false);
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
    const url ="http://localhost:8000/createAnnouncement";

    const formData = new FormData();
    formData.append("image", fileList[0].originFileObj);
    formData.append("announcementName", name);
    formData.append("announcementDesc", text);
    formData.append("announcementEmail", user.useremail);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    try {
        console.log(formData);
      axios.post(url, formData, config).then((response) => {
        // console.log(response.data);
        console.log(response.data);
        // dispatch(setFormModal(false));
      });
    } catch (err) {
      console.log(err);
    }
  };
  const oncrossclick = () => {
    console.log(schModal.isCreateModal);
    // dispatch(setCreateModal(false));
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

  console.log(name);
    console.log(text);
    console.log(fileList);
  return (
    <div className="absolute flex items-center justify-center top-0 min-w-full min-h-screen font-raleway">
      <Fade bottom>
        <div className=" rounded-xl flex flex-col items-center justify-center  bg-white p-10 shadow-2xl ">
          <div className="flex justify-end w-[100%]">
            {" "}
            <div className="text-[30px] font-bold pr-5">CREATE ANNOUNCEMENT</div>
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
            <Form.Item label="Enter Announcement">
                <Input value={name} onChange={(e) => setName(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Announcement Description ">
              <TextArea
                rows={4}
                placeholder="Description:"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Upload Announcement Here!" valuePropName="fileList">
              <Upload
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                beforeUpload={() => false}
                accept=".pdf"
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

export default CreateAnnouncement;