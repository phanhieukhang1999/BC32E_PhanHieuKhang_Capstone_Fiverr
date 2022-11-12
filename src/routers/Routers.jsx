import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ListJob from '../pages/ListJob/ListJob'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate'

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
                    element: <ListJob />
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
