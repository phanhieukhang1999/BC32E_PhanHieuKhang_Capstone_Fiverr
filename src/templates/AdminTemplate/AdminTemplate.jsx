import React, { useState } from 'react'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { Breadcrumb, Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


export default function AdminTemplate() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <NavLink to='/' className="logo p-5">
            <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="..." />
          </NavLink>

          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<UserOutlined />}>
              <NavLink to="/admin/QuanLyNguoiDung">Quản lý người dùng</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<FileOutlined />}>
              <NavLink to="/admin/QuanLyCongViec">Quản lý công việc</NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<FileOutlined />}>
              <NavLink to="/admin/QuanLyLoaiCongViec">Quản lý loại công việc</NavLink>
            </Menu.Item>
            <Menu.Item key="4" icon={<DesktopOutlined />}>
              <NavLink to="/admin/QuanLyDichVu">Quản lý dịch vụ</NavLink>
            </Menu.Item>
            {/* <SubMenu key="sub1" icon={<FileOutlined />} title="Films">
              <Menu.Item key="10" icon={<FileOutlined />}>
                <NavLink to="/admin/films">Films</NavLink>

              </Menu.Item>
              <Menu.Item key="11" icon={<FileOutlined />}>
                <NavLink to="/admin/films/addnew">Add new</NavLink>


              </Menu.Item>
            </SubMenu>
            <Menu.Item key="3" icon={<DesktopOutlined />}>
              <NavLink to="/admin/showtimes">Showtime</NavLink>

            </Menu.Item> */}
          
          </Menu>
        </Sider>


        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          />
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            
            {/* <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              Bill is a cat.
            </div> */}
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2022 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  )
}
