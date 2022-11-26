import React, { Fragment, useEffect, useState } from 'react'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TOKEN, USER_LOGIN } from '../../util/settings/config';
import _ from 'lodash';
import QuanLyNguoiDung from '../../pages/Admin/QuanLyNguoiDung/QuanLyNguoiDung';
import './AdminTemplate.scss'
import QuanLyCongViec from '../../pages/Admin/QuanLyCongViec/QuanLyCongViec';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



export default function AdminTemplate() {

  const { userLogin } = useSelector(state => state.AuthReducers)
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = collapsed => {
    // console.log(collapsed);
    setCollapsed(collapsed);
  };
  useEffect(() => {
    window.scrollTo(0, 0);

  })

  if (!localStorage.getItem(USER_LOGIN)) {
    alert('Bạn không có quyền truy cập vào trang này !')
    return <Navigate to='/' />
  }

  if (userLogin.user.role !== 'ADMIN') {
    alert('Bạn không có quyền truy cập vào trang này !')
    return <Navigate to='/' />

  }
  const operations = <Fragment>
    {!_.isEmpty(userLogin) ? <Fragment>
      <DropdownButton className='border-0 bg-transparent' id="dropdown-basic-button" title={`${userLogin.user.name}`} >
        {/* <Dropdown.Item href="/admin">Admin</Dropdown.Item> */}
        <Dropdown.Item href={`/profile/${userLogin.user.id}`}>Profile</Dropdown.Item>
        <Dropdown.Item href="/" onClick={() => {
          localStorage.removeItem(USER_LOGIN)
          localStorage.removeItem(TOKEN)

          window.location.reload()
        }}>Logout</Dropdown.Item>
      </DropdownButton> </Fragment> : ''}
  </Fragment>
  return (
    <>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <NavLink to='/' className="header-logo text-white flex site-logo justify-center items-center" style={{ height: '120px' }}>
            <svg width="120" height="45" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g fill="#fff" className='fill-fiverr'><path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
              </g>
              <g fill="#1dbf73" className='fill'><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path></g>
            </svg>
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
          <Header className="site-layout-background" style={{ padding: 0 }} >
            <div className="text-right pr-10 pt-1">{operations}</div>
          </Header>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Outlet />
            {/* <QuanLyNguoiDung /> */}
            {/* <QuanLyCongViec /> */}

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
