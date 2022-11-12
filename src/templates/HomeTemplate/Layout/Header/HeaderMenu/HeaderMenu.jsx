import React, { useEffect } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

import './HeaderMenu.scss'

import { useSelector, useDispatch, } from 'react-redux';
import { layMenuCongViecAction } from '../../../../../redux/actions/CongViecActions';

export default function HeaderMenu() {

    const { menuJob } = useSelector(state => state.CongViecReducers)
    const dispatch = useDispatch()

    useEffect(() => {
        const action = layMenuCongViecAction()
        dispatch(action)
    }, [])
    const renderMenuJob = () => {

        return menuJob?.map((menu, index) => {
            return <Menu.SubMenu title={menu.tenLoaiCongViec} key={index}>
                
                {/* <Menu.Item icon={<AppstoreOutlined />}>
                    {menu.tenNhom}
                </Menu.Item> */}
                    {renderItemMenu()}

            </Menu.SubMenu>
        })
    }
    const renderItemMenu = () => {
        return menuJob?.map((item, index) => {
            return <Menu.Item icon={<AppstoreOutlined />}>
                {item.tenNhom}
            </Menu.Item>
        })
    }
    return (
        <Menu mode="horizontal" defaultSelectedKeys={['mail']} >

            {/* <Menu.SubMenu key="SubMenu" title="Graphic & Design" >
                <Menu.ItemGroup title="Logo & Brand Identity">
                    <Menu.Item key="four" icon={<AppstoreOutlined />}>
                        Logo Design
                    </Menu.Item>
                    <Menu.Item key="five" icon={<AppstoreOutlined />}>
                        Brand Style Guides
                    </Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item Group">
                    <Menu.Item key="four" icon={<AppstoreOutlined />}>
                        Navigation Four
                    </Menu.Item>
                    <Menu.Item key="five" icon={<AppstoreOutlined />}>
                        Navigation Five
                    </Menu.Item>
                </Menu.ItemGroup>
            </Menu.SubMenu> */}

            {renderMenuJob()}


        </Menu>
    )
}
