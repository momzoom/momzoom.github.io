import React from "react"
import { Link, push } from "gatsby"
import { Layout as AntLayout, PageHeader, Image } from "antd"
import logo from "../../static/logo@2x.png" // 这里告诉 Webpack 这个 JS 文件用了这张图片

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
  {
    /* <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1> */
  }
  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">
          <Image width={120} src={logo} />
        </Link>
      </h1>
    )
  } else {
    header = (
      <PageHeader
        // className="site-page-header"
        onBack={() => push("/")}
        title={title}
      />
    )
  }

  return (
    <AntLayout data-is-root-path={isRootPath}>
      <Header className="header">
        <div className="logo" />

        <header className="global-header">{header}</header>
        {/* <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu> */}
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
        <AntLayout
          className="global-wrapper"
          style={{ padding: "0 24px 24px" }}
        >
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
          <Footer style={{ textAlign: "center" }}>萌天天小朋友前端团队</Footer>
        </AntLayout>
      </AntLayout>
    </AntLayout>
  )
}

export default Layout
