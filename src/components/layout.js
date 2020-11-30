import React from "react"
import { Link, navigateTo } from "gatsby"
import { Layout as AntLayout, PageHeader, Menu } from "antd"
import { gold } from "@ant-design/colors"
import logo from "../../static/logo@2x.png"

// import {
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// } from "@ant-design/icons"
const { Header, Content, Footer } = AntLayout
// const { SubMenu } = Menu

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  if (isRootPath) {
    header = (
      <Link style={{ float: "left" }} to="/">
        <img alt="" width={120} src={logo} />
      </Link>
    )
  } else {
    header = (
      <PageHeader
        // className="site-page-header"
        onBack={() => navigateTo("/")}
        title={title}
      />
    )
  }

  return (
    <AntLayout data-is-root-path={isRootPath}>
      <Header style={{ backgroundColor: gold[5] }}>
        {header}
        <Menu
          theme="dark"
          style={{ backgroundColor: gold[5], float: "right" }}
          mode="horizontal"
          defaultSelectedKeys={[""]}
        >
          <Menu.Item key="1">日常分享</Menu.Item>
          <Menu.Item key="2">关于我们</Menu.Item>
          <Menu.Item key="3">技术探索</Menu.Item>
        </Menu>
      </Header>
      <AntLayout>
        {/* <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav 3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
         */}
        <AntLayout className="global-wrapper">
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </AntLayout>
      </AntLayout>
      <Footer style={{ textAlign: "center" }}>萌天天小朋友前端团队</Footer>
    </AntLayout>
  )
}

export default Layout
