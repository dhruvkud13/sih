import {
  FileOutlined, DeleteOutlined
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import "../css/FileSystem.css";
import FileTable from "../components/FileTable";
import OurButton from "../components/OurButton";
import Fade from "react-reveal/Fade";
import { useDispatch } from "react-redux";
import { setFormModal } from "../redux/formModalSlice.js";
import { useSelector } from "react-redux";
import UploadForm from "../components/Form";
const { Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("All Files", "1", <FileOutlined />),
  getItem("Deleted Files", "2", <DeleteOutlined />),
  // getItem("User", "sub1", <UserOutlined />, [
  //   getItem("Tom", "3"),
  //   getItem("Bill", "4"),
  //   getItem("Alex", "5"),
  // ]),
  // getItem("Team", "sub2", <TeamOutlined />, [
  //   getItem("Team 1", "6"),
  //   getItem("Team 2", "8"),
  // ]),
  // getItem("User Files", "3", <FileOutlined />),
];

const Filesys = () => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const formModal = useSelector((state) => state.formModal);
  return (
    <div className="">
      <Layout
        style={{
          // paddingTop: "64px",
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          // style={{ backgroundColor: "#282C83" }}
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          //   style={{paddingTop: '64px'}}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            // color="black"
            // style={{ backgroundColor: "#282C83", color: "white" }}
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          {/* <Header
        className="site-layout-background"
        style={{
          padding: 0,
        }}
      /> */}
          <Fade bottom>
            <Content
              style={{
                margin: "0 16px",
              }}
            >
              <Breadcrumb
                style={{
                  margin: "16px 0",
                }}
              >
                {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Username</Breadcrumb.Item> */}
              </Breadcrumb>
              <div
                className="site-layout-background flex flex-col"
                style={{
                  padding: 24,
                  minHeight: 360,
                }}
              >
                <div className="flex justify-end">
                  <OurButton
                    title="Add New Doc"
                    onClick={() => {
                      dispatch(setFormModal(true));
                      console.log(formModal.isFormModal);
                    }}
                  />
                </div>
                <FileTable />
              </div>
            </Content>
          </Fade>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            ICCR DMS ©2022
          </Footer>
        </Layout>
      </Layout>
      {formModal.isFormModal ? <UploadForm /> : <div></div>}
    </div>
  );
};

export default Filesys;
