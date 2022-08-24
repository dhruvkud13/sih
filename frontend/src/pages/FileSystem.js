import {
  FileOutlined,
  DeleteOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import "../css/FileSystem.css";
import FileTable from "../components/FileTable";
import Fade from "react-reveal/Fade";
import { useSelector } from "react-redux";
import UploadForm from "../components/Form";
import Graphs from "./Graphs";
import DeletedTable from "../components/DeletedTable";
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
  getItem("Statistics", "3", <PieChartOutlined />),
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
  const [selectedKey, setSelectedKey] = useState("1");
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
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            onClick={({ key: newKey }) => {
              setSelectedKey(newKey);
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
                {selectedKey === "1" && <FileTable />}
                {selectedKey === "2" && <DeletedTable />}
                {selectedKey === "3" && <Graphs />}
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
