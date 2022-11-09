import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Layout/Footer/Footer'
import Header from './Layout/Header/Header'

export default function HomeTemplate() {
  return (
    <div>
        <Header/>

        <Outlet/>
        
        <hr/>
        <Footer/>

    </div>
  )
}
