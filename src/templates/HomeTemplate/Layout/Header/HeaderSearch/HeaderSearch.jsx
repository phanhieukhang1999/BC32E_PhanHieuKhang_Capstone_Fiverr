import React from 'react'
import { SearchOutlined } from '@ant-design/icons'

export default function HeaderSearch() {
    return (
        <form className='search-form flex'>
            <input className='search-input' type="search" placeholder='What service are you looking for today?' />
            <button className='search-button'>
                <SearchOutlined className='search-icon' />
            </button>
        </form>
    )
}
