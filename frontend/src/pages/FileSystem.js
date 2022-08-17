import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import "../css/FileSystem.css";
import FileTable from "../components/FileTable";
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
  getItem("Employee Files", "2", <FileOutlined />),
  // getItem("User", "sub1", <UserOutlined />, [
  //   getItem("Tom", "3"),
  //   getItem("Bill", "4"),
  //   getItem("Alex", "5"),
  // ]),
  // getItem("Team", "sub2", <TeamOutlined />, [
  //   getItem("Team 1", "6"),
  //   getItem("Team 2", "8"),
  // ]),
  getItem("User Files", "3", <FileOutlined />),
];

const Filesys = () => {
  const [collapsed, setCollapsed] = useState(false);
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
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Username</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <FileTable />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            ICCR DMS ©2022
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Filesys;
