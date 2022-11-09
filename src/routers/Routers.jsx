import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate'

export default function Routers() {
    const routing = useRoutes([
        {
            path: '/',
            element: <HomeTemplate >
                <Home/>
            </HomeTemplate>,
            children: [
                {
                    path: '/',
                    element: <Navigate to='home'/>
                },
                {
                    path: 'home',
                    element: <Home />
                },
                {
                    path: 'login',
                    element: <Login />
                },
                {
                    path: 'register',
                    element: <Register />
                }


            ]
        }
    ])
    return routing
}
