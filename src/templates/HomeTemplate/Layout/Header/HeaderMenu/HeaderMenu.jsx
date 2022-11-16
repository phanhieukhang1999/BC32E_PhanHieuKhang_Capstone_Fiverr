import React, { useEffect } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

import './HeaderMenu.scss'

import { useSelector, useDispatch, } from 'react-redux';
import { layCongViecTheoChiTietLoaiAction, layMenuCongViecAction } from '../../../../../redux/actions/CongViecActions';

import { Link, useNavigate } from 'react-router-dom';

export default function HeaderMenu() {
    const navigate = useNavigate()
    const { menuJob } = useSelector(state => state.CongViecReducers)
    console.log("menuJob: ", menuJob);
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(layCongViecTheoChiTietLoaiAction())

        dispatch(layMenuCongViecAction())
    }, [])

    // const reloadPage = () => {
    //     window.location.reload();
    // }
    
    const renderMenuJob = () => {

        return menuJob?.map((menu, index) => {
            return <Menu.SubMenu title={menu.tenLoaiCongViec} key={index.id} onTitleClick={() => navigate(`${menu.id}`)}>
                
                {menu.dsNhomChiTietLoai?.map((item, index) => {
                    return <Menu.Item key={index.id}>
                        <Link to={`/${menu.id}/${item.id}`}>
                            {item.tenNhom} 
                        </Link>
                    </Menu.Item>
                })}

               


            </Menu.SubMenu>
        })
    }
    // const renderItemMenu = () => {
    //     return menuJob?.map((item, index) => {
    //         return <Menu.Item icon={<AppstoreOutlined />}>
    //             {item.tenNhom}
    //         </Menu.Item>
    //     })
    // }
    return (
        <>
            <Menu mode="horizontal" defaultSelectedKeys={['mail']} >

                {/* <Menu.SubMenu key="SubMenu" title="Graphic & Design" >

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

                </Menu.SubMenu> */}


                {renderMenuJob()}



            </Menu>

        </>
    )
}
