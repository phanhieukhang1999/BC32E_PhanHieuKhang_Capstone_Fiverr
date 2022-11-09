import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

import './HeaderMenu.scss'


export default function HeaderMenu() {
    return (
        <Menu mode="horizontal" defaultSelectedKeys={['mail']}>

            <Menu.SubMenu key="SubMenu" title="Graphic & Design" >
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
            </Menu.SubMenu>
            <Menu.SubMenu title="Digital Maketing" >

                <Menu.Item key="four" icon={<AppstoreOutlined />}>
                    Logo Design
                </Menu.Item>
                <Menu.Item key="five" icon={<AppstoreOutlined />}>
                    Brand Style Guides
                </Menu.Item>


                <Menu.Item key="four" icon={<AppstoreOutlined />}>
                    Navigation Four
                </Menu.Item>
                <Menu.Item key="five" icon={<AppstoreOutlined />}>
                    Navigation Five
                </Menu.Item>

            </Menu.SubMenu>
            <Menu.SubMenu title="Writing & Translation" >

                <Menu.Item key="four" icon={<AppstoreOutlined />}>
                    Logo Design
                </Menu.Item>
                <Menu.Item key="five" icon={<AppstoreOutlined />}>
                    Brand Style Guides
                </Menu.Item>


                <Menu.Item key="four" icon={<AppstoreOutlined />}>
                    Navigation Four
                </Menu.Item>
                <Menu.Item key="five" icon={<AppstoreOutlined />}>
                    Navigation Five
                </Menu.Item>

            </Menu.SubMenu>
            <Menu.SubMenu title="Video & Animation" >

                <Menu.Item key="four" icon={<AppstoreOutlined />}>
                    Logo Design
                </Menu.Item>
                <Menu.Item key="five" icon={<AppstoreOutlined />}>
                    Brand Style Guides
                </Menu.Item>


                <Menu.Item key="four" icon={<AppstoreOutlined />}>
                    Navigation Four
                </Menu.Item>
                <Menu.Item key="five" icon={<AppstoreOutlined />}>
                    Navigation Five
                </Menu.Item>

            </Menu.SubMenu>
            <Menu.SubMenu title="Music & Audio" >

                <Menu.Item key="four" icon={<AppstoreOutlined />}>
                    Logo Design
                </Menu.Item>
                <Menu.Item key="five" icon={<AppstoreOutlined />}>
                    Brand Style Guides
                </Menu.Item>


                <Menu.Item key="four" icon={<AppstoreOutlined />}>
                    Navigation Four
                </Menu.Item>
                <Menu.Item key="five" icon={<AppstoreOutlined />}>
                    Navigation Five
                </Menu.Item>

            </Menu.SubMenu>
            <Menu.SubMenu title="Programming & Tech" >

                <Menu.Item key="four" icon={<AppstoreOutlined />}>
                    Logo Design
                </Menu.Item>
                <Menu.Item key="five" icon={<AppstoreOutlined />}>
                    Brand Style Guides
                </Menu.Item>


                <Menu.Item key="four" icon={<AppstoreOutlined />}>
                    Navigation Four
                </Menu.Item>
                <Menu.Item key="five" icon={<AppstoreOutlined />}>
                    Navigation Five
                </Menu.Item>

            </Menu.SubMenu>
            <Menu.SubMenu title="Business" >

                <Menu.Item key="four" icon={<AppstoreOutlined />}>
                    Logo Design
                </Menu.Item>
                <Menu.Item key="five" icon={<AppstoreOutlined />}>
                    Brand Style Guides
                </Menu.Item>


                <Menu.Item key="four" icon={<AppstoreOutlined />}>
                    Navigation Four
                </Menu.Item>
                <Menu.Item key="five" icon={<AppstoreOutlined />}>
                    Navigation Five
                </Menu.Item>

            </Menu.SubMenu>
            <Menu.SubMenu title="Life Style" >

                <Menu.Item key="four" icon={<AppstoreOutlined />}>
                    Logo Design
                </Menu.Item>
                <Menu.Item key="five" icon={<AppstoreOutlined />}>
                    Brand Style Guides
                </Menu.Item>


                <Menu.Item key="four" icon={<AppstoreOutlined />}>
                    Navigation Four
                </Menu.Item>
                <Menu.Item key="five" icon={<AppstoreOutlined />}>
                    Navigation Five
                </Menu.Item>

            </Menu.SubMenu>
            <Menu.SubMenu title="Trending" >

                <Menu.Item key="four" icon={<AppstoreOutlined />}>
                    Logo Design
                </Menu.Item>
                <Menu.Item key="five" icon={<AppstoreOutlined />}>
                    Brand Style Guides
                </Menu.Item>


                <Menu.Item key="four" icon={<AppstoreOutlined />}>
                    Navigation Four
                </Menu.Item>
                <Menu.Item key="five" icon={<AppstoreOutlined />}>
                    Navigation Five
                </Menu.Item>

            </Menu.SubMenu>
            {/* <Menu.SubMenu key="SubMenu" title="Degital Marketing" icon={<SettingOutlined />}>
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
            </Menu.SubMenu>
            <Menu.SubMenu key="SubMenu" title="Writing & Translation" icon={<SettingOutlined />}>
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
            </Menu.SubMenu>
            <Menu.SubMenu key="SubMenu" title="Video & Animation" icon={<SettingOutlined />}>
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
            </Menu.SubMenu>
            <Menu.SubMenu key="SubMenu" title="Music & Audio" icon={<SettingOutlined />}>
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
            </Menu.SubMenu>
            <Menu.SubMenu key="SubMenu" title="Programming & Tech" icon={<SettingOutlined />}>
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
            </Menu.SubMenu>
            <Menu.SubMenu key="SubMenu" title="Business" icon={<SettingOutlined />}>
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
            </Menu.SubMenu>
            <Menu.SubMenu key="SubMenu" title="Lift Style" icon={<SettingOutlined />}>
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
            </Menu.SubMenu>
            <Menu.SubMenu key="SubMenu" title="Trending" icon={<SettingOutlined />}>
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
        </Menu>
    )
}
