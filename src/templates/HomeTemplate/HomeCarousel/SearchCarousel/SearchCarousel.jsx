import React, { useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

export default function SearchCarousel() {
    const navigate = useNavigate()
    const [valueSearch, setValueSearch] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/listJob/${valueSearch}`);
        setValueSearch("");
    };
    return (
        <form onSubmit={handleSubmit} className='search-form flex'>
            <SearchOutlined className='search-icon' />
            <input className='search-input' type="search" placeholder='Try "building mobile app"' value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} />
            <button className='search-button'>
                Search
            </button>
        </form>
    )
}
