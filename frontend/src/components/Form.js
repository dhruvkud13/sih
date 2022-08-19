import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import 'antd/dist/antd.css';
import Icon from '@ant-design/icons';
import {
  Form,
  Input,
  Select,
  Cascader,
  Upload, Modal
} from 'antd';

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
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

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
  return (
    <div className="">
      <Fade right>
        <div className="flex flex-col  items-center justify-center min-h-screen font-raleway">
            <div className="text-[40px] font-bold">DOCUMENT UPLOAD FORM</div>
          <div className="h-[32rem] w-[32rem] rounded-xl flex flex-col items-center justify-center">
      <Form
        labelCol={{
          span: 30,
        }}
        wrapperCol={{
          span: 50,
        }}
        labelAlign="left"
        layout="vertical"
        // onValuesChange={onFormLayoutChange}
        // disabled={componentDisabled}
      >
        <Form.Item label="Select document to upload" >
          <Select>
            <Select.Option value="Aadhar Card">Aadhar Card</Select.Option>
            <Select.Option value="Ration Card">Ration Card</Select.Option>
            <Select.Option value="Driving License">Driving License</Select.Option>
            <Select.Option value="Passport">Passport</Select.Option>
            <Select.Option value="PAN Card">PAN Card</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Enter Description">
            <TextArea rows={4} placeholder="Description:" />
        </Form.Item>
        <Form.Item label="Upload Document Here!" valuePropName="fileList">
        <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        // action=""
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
        </Form.Item>
        {/* <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item> */}
      </Form>
          <div className="mt-4">
          {/* <Button type="primary" htmlType="submit" className=" bg-white  hover:bg-bgblue duration-200 hover:text-white px-4 py-2 rounded-2xl text-[16px] font-semibold">
          Submit
        </Button> */}
          <button
            className=" bg-white hover:bg-bgblue duration-200 hover:text-white px-4 py-2 rounded-2xl text-[16px] font-semibold"
          >
            SUBMIT
          </button>
        </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default UploadForm;