import React from 'react'
import { Carousel } from 'antd';
import './HomeCarousel.scss'
import { SearchOutlined } from '@ant-design/icons'
import Search from './SearchCarousel/SearchCarousel';
import SearchCarousel from './SearchCarousel/SearchCarousel';

// const contentStyle = {
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
// };
export default function HomeCarousel() {
    return (
        <div className='Carousel'>
            <Carousel className='carousel-slider' autoplay>
                <div className="carousel-img">
                    <div className='carousel-people'>
                        <img src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png" alt="..." />
                        <p>Andrea, <b>Fashion Designer</b></p>
                    </div>
                </div>
                <div className="carousel-img">
                    <div className='carousel-people show-stars'>
                        <img src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png" alt="..." />
                        <p>Moon, <b>Marketing Expert</b></p>
                    </div>
                </div>
                <div className="carousel-img">
                    <div className='carousel-people'>
                        <img src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png" alt="..." />
                        <p>Ritika, <b>Shoemaker and Designer</b></p>
                    </div>
                </div>
                <div className="carousel-img">
                    <div className='carousel-people'>
                        <img src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png" alt="..." />
                        <p>Zach, <b>Bar Owner</b></p>
                    </div>
                </div>
                <div className="carousel-img">
                    <div className='carousel-people show-stars'>
                        <img src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png" alt="..." />
                        <p>Gabrielle, <b>Video Editor</b></p>
                    </div>
                </div>
            </Carousel>
            <div className='carousel-content'>
                <div className='carousel-header'>
                    <h1 className='font-domaine'>
                        <span>Find the perfect <i>freelance</i> services for your business</span>
                    </h1>
                    <div className='carousel-search'>
                        {/* <form className='search-form flex'>
                            <SearchOutlined className='search-icon' />
                            <input className='search-input' type="search" placeholder='Try "building mobile app"' />
                            <button className='search-button'>
                                Search
                            </button>
                        </form> */}
                        <SearchCarousel />
                    </div>
                    <div className='popular flex flex-wrap'>
                        Popular:
                        <ul className='flex justify-between flex-wrap'>
                            <li>
                                <a href="">Website Design</a>
                            </li>
                            <li>
                                <a href="">WordPress</a>
                            </li>
                            <li>
                                <a href="">Login Design</a>
                            </li>
                            <li>
                                <a href="">Video Editing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="social_brand flex justify-center items-center">
                <span>Trusted by:</span>
                <ul className='flex'>
                    <li>
                        <img src="./img/facebook.png" />
                    </li>
                    <li>
                        <img src="./img/google.png" />
                    </li>
                    <li>
                        <img src="./img/netflix.png" />
                    </li>
                    <li>
                        <img src="./img/paypal.png" />
                    </li>
                </ul>
            </div>
        </div>
    )
}
