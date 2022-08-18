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
  Upload,
} from 'antd';


const UploadForm = () => {
const { TextArea } = Input;

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
          <Upload action="/upload.do" listType="picture-card" showUploadList={true} type="file" accept=".png, .jpg, .jpeg, .pdf" >
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                <Icon type="upload" />
                Upload
              </div>
            </div>
          </Upload>
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