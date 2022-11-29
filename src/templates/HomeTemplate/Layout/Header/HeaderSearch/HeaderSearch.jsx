import React, { useEffect, useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

export default function HeaderSearch() {
    const navigate = useNavigate()
    const [valueSearch, setValueSearch] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/listJob/${valueSearch}`);
        setValueSearch("");
    };
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <form onSubmit={handleSubmit} className='search-form flex'>
            <input className='search-input' type="search" placeholder='What service are you looking for today?' value={valueSearch} onChange={(e) => setValueSearch(e.target.value)}/>
            <button className='search-button'>
                <SearchOutlined className='search-icon' />
            </button>
        </form>
    )
}
