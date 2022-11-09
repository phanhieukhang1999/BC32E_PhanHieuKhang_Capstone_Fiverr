import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import './Header.scss'
import HeaderMenu from './HeaderMenu/HeaderMenu'
export default function Header(props) {

  return (

    <div className='Header'>
      <header className="fiverr-header p-3 bg-red-500">
        <div className="container flex justify-between p-1 mx-auto">
          <a className="flex site-logo items-center">
            <svg width="89" height="27" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g fill="#404145"><path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
              </g>
              <g fill="#1dbf73"><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path></g>
            </svg>
          </a>
          <div className='fiverr-header-search flex items-center'>
            <form className='search-form flex'>
              <input className='search-input' type="search" placeholder='What service are you looking for today?' />
              <button className='search-button'>
                <SearchOutlined className='search-icon' />
              </button>
            </form>
          </div>
          <ul className="fiverr-nav items-stretch mb-0  hidden space-x-3 lg:flex">

            <li className="flex">
              <NavLink rel="noopener noreferrer" href="#" className="nav-link flex items-center p-1 -mb-1 dark:border-transparent text-gray-500 hover:text-green-500 active::text-blue-700">Fiverr Business</NavLink>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="nav-link flex items-center p-1 -mb-1 dark:border-transparent text-gray-500 hover:text-green-500">Explore</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="nav-link flex items-center p-1 -mb-1 dark:border-transparent text-gray-500 hover:text-green-500">English</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="nav-link flex items-center p-1 -mb-1 dark:border-transparent text-gray-500 hover:text-green-500">US USD</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="nav-link flex items-center p-1 -mb-1 dark:border-transparent text-gray-500 hover:text-green-500">Become a Seller</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="nav-link flex items-center p-1 -mb-1 dark:border-transparent text-gray-500 hover:text-green-500">Sign In</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="nav-link flex items-center py-2 px-4 border border-white rounded text-gray-500 hover:text-green-500">Join</a>
            </li>
          </ul>


          <button title="Open menu" type="button" className="p-4 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      <div className='header-menu'>
        <div className='container mx-auto'>
        <HeaderMenu/>
        </div>
      </div>
    </div>







  )
}
