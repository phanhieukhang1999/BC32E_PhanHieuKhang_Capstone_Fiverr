import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate'

export default function Routers() {
    const routing = useRoutes([
        {
            path: '/',
            element: <HomeTemplate />,
            children: [
                {
                    path: 'home',
                    element: <Home />
                },


            ]
        }
    ])
    return routing
}
