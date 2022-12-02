import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { SearchOutlined, MenuOutlined } from '@ant-design/icons'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Header.scss'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import HeaderSearch from './HeaderSearch/HeaderSearch'
import { useSelector } from 'react-redux'
import { TOKEN, USER_LOGIN } from '../../../../util/settings/config';
export default function Header(props) {
  let scrollHeader = 'scrollHeader'
  const [offset, setOffset] = useState(0)

  const { userLogin } = useSelector(state => state.AuthReducers)
  const navigate = useNavigate()
  // useEffect(() => {
  //   const onScroll = () => setOffset(window.pageYOffset);
  //   window.removeEventListener("scroll", onScroll);
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [])


  
  return (

    <div className={`Header`}>
      <header className={`fiverr-header p-2 bg-white`}>
        <div className="container flex justify-between p-1 mx-auto">
          <NavLink to='/' className="header-logo flex site-logo items-center">
            <svg width="89" height="27" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g fill="#404145" className='fill-fiverr'><path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
              </g>
              <g fill="#1dbf73" className='fill'><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path></g>
            </svg>
          </NavLink>

          <div className='fiverr-header-search flex items-center' >
            {/* <form className='search-form flex'>
              <input className='search-input' type="search" placeholder='What service are you looking for today?' />
              <button className='search-button'>
                <SearchOutlined className='search-icon' />
              </button>
            </form> */}
            <HeaderSearch />
          </div>


          {/* Sidebar */}
          <input type="checkbox" id="check" />
          <label htmlFor="check" className='checkbtn'>
            <MenuOutlined />
          </label>


          <ul className="fiverr-nav items-stretch mb-0  hidden space-x-3 lg:flex">
            <li className="flex">
              <Link rel="noopener noreferrer" to='/404' className="nav-link flex items-center p-1 -mb-1 dark:border-transparent text-gray-500 hover:text-green-500 active::text-blue-700">Fiverr Business</Link>
            </li>
            <li className="flex">
              <Link rel="noopener noreferrer" to='/404' className="nav-link flex items-center p-1 -mb-1 dark:border-transparent text-gray-500 hover:text-green-500">Explore</Link>
            </li>
            <li className="flex">
              <Link rel="noopener noreferrer" to='/404' className="nav-link flex items-center p-1 -mb-1 dark:border-transparent text-gray-500 hover:text-green-500">English</Link>
            </li>
            <li className="flex">
              <Link rel="noopener noreferrer" to='/404' className="nav-link flex items-center p-1 -mb-1 dark:border-transparent text-gray-500 hover:text-green-500">US$ USD</Link>
            </li>
            <li className="flex">
              <Link rel="noopener noreferrer" to='/404' className="nav-link flex items-center p-1 -mb-1 dark:border-transparent text-gray-500 hover:text-green-500">Become a Seller</Link>
            </li>
            {userLogin.token ? (
              <DropdownButton id="dropdown-basic-button" title={`${userLogin.user.name}`} >
                {/* <Dropdown.Item href="/admin">Admin</Dropdown.Item> */}
                <Dropdown.Item href={`/profile/${userLogin.user.id}`}>Profile</Dropdown.Item>
                <Dropdown.Item href="/" onClick={() => {
                  localStorage.removeItem(USER_LOGIN)
                  localStorage.removeItem(TOKEN)

                  window.location.reload()
                }}>Logout</Dropdown.Item>
              </DropdownButton>
            ) : null}

            {!userLogin.token ? (
              <>
                <li className="flex">
                  <NavLink rel="noopener noreferrer" to='/login' className="nav-link flex items-center p-1 -mb-1 dark:border-transparent text-gray-500 hover:text-green-500">Sign In</NavLink>
                </li>
                <li className="flex">
                  <NavLink rel="noopener noreferrer" to='/register' className="nav-link flex items-center rounded text-gray-500 hover:text-green-500 "><span >Join</span></NavLink>
                </li>
              </>
            ) : null}

          </ul>


          {/* <button title="Open menu" type="button" className="p-4 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button> */}
        </div>
      </header>
      {/* <hr/> */}
      <div className='header-menu  bg-white'>
        <div className='container mx-auto'>
          <HeaderMenu />
        </div>
      </div>
    </div>







  )
}
