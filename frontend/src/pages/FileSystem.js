import {
  FileOutlined,
  DeleteOutlined,
  PieChartOutlined,
  FolderOutlined,
  HomeOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import "../css/FileSystem.css";
import FileTable from "../components/FileTable";
import Fade from "react-reveal/Fade";
import { useSelector } from "react-redux";
import { UploadForm, FolderForm } from "../components/Form";
import Graphs from "./Graphs";
import Folders from "../components/FolderTable";
import DeletedTable from "../components/DeletedTable";
import ScholarshipUI from "./ScholarshipUI";
import UserHome from "./user/Home";
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
  getItem("DashBoard", "0", <HomeOutlined />),
  getItem("All Files", "1", <FileOutlined />),
  getItem("Deleted Files", "2", <DeleteOutlined />),
  getItem("Folders", "3", <FolderOutlined />),
  getItem("Statistics", "4", <PieChartOutlined />),
  getItem("Scholarships", "5", <BookOutlined />),
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
  const [selectedKey, setSelectedKey] = useState(
    localStorage.getItem("key") == null ? "0" : localStorage.getItem("key")
  );
  const formModal = useSelector((state) => state.formModal);
  return (
    <div className="">
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={[
              localStorage.getItem("key") == null
                ? "0"
                : localStorage.getItem("key"),
            ]}
            mode="inline"
            items={items}
            onClick={({ key: newKey }) => {
              setSelectedKey(newKey);
              localStorage.setItem("key", newKey);
              console.log(selectedKey);
            }}
          />
        </Sider>
        <Layout className="site-layout">
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
                {selectedKey === "0" && <UserHome />}
                {selectedKey === "1" && <FileTable />}
                {selectedKey === "2" && <DeletedTable />}
                {selectedKey === "3" && <Folders />}
                {selectedKey === "4" && <Graphs />}
                {selectedKey === "5" && <ScholarshipUI />}
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
      {formModal.isFormModal ? (
        formModal.type == "file" ? (
          <UploadForm />
        ) : (
          <FolderForm />
        )
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Filesys;
