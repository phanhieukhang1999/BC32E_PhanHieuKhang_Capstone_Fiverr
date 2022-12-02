import React from 'react'
import { useRoutes } from 'react-router-dom'
import Error from '../pages/PageNotFound/PageNotFound'
import QuanLyCongViec from '../pages/Admin/QuanLyCongViec/QuanLyCongViec'
import QuanLyDichVu from '../pages/Admin/QuanLyDichVu/QuanLyDichVu'
import QuanLyLoaiCongViec from '../pages/Admin/QuanLyLoaiCongViec/QuanLyLoaiCongViec'
import QuanLyNguoiDung from '../pages/Admin/QuanLyNguoiDung/QuanLyNguoiDung'
import DetailJob from '../pages/DetailJob/DetailJob'
import Home from '../pages/Home/Home'
import ListJob from '../pages/ListJob/ListJob'
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'
import Register from '../pages/Register/Register'
import AdminTemplate from '../templates/AdminTemplate/AdminTemplate'
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate'
import MenuDetail from '../templates/HomeTemplate/Layout/Header/HeaderMenu/MenuDetail/MenuDetail'
import MenuItem from '../templates/HomeTemplate/Layout/Header/HeaderMenu/MenuItem/MenuItem'
import PageNotFound from '../pages/PageNotFound/PageNotFound'

export default function Routers() {
    const routing = useRoutes([
        {
            path: '/',
            element:
                <HomeTemplate >

                </HomeTemplate>,
            children: [
                {
                    // path: '/',
                    // element: <Navigate to='home'/>
                },
                {
                    path: '/',
                    element: <Home />
                },

                {
                    path: 'home',
                    element: <Home />
                },
                {
                    path: 'listJob/:valueSearch',
                    element: <ListJob />,
                    children: [
                        {
                            path: '404',
                            element: <PageNotFound/>
                        }
                    ]

                },
                {
                    path: ':idMenu',
                    element: <MenuDetail />
                },
                {
                    path: ':idMenu/:idItem',
                    element: <MenuItem />
                },

                {
                    path: 'detailJob/:jobId',
                    element: <DetailJob />
                },
                {
                    path: 'login',
                    element: <Login />
                },
                {
                    path: 'register',
                    element: <Register />
                },
                {
                    path: 'profile/:idProfile',
                    element: <Profile />
                },
                {
                    path: '404',
                    element: <PageNotFound />
                }


            ]
        },
        {
            path: '/',
            element: <AdminTemplate />,
            children: [
                {
                    path: 'admin',
                    element: <QuanLyNguoiDung />,

                },
                {
                    path: '/admin/QuanLyNguoiDung',
                    element: <QuanLyNguoiDung />,

                },
                {
                    path: '/admin/QuanLyCongViec',
                    element: <QuanLyCongViec />,

                },
                {
                    path: '/admin/QuanLyLoaiCongViec',
                    element: <QuanLyLoaiCongViec />,

                },
                {
                    path: '/admin/QuanLyDichVu',
                    element: <QuanLyDichVu />,

                },

            ]
        }
    ])
    return routing
}
