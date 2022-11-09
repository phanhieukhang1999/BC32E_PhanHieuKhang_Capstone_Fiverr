import React from 'react'
import { Carousel } from 'antd';

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
            <Carousel autoplay>
                <div className="carousel-img">
                    <img src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png" alt="..." />
                </div>
                <div className="carousel-img">
                    <img src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png" alt="..." />
                </div>
                <div className="carousel-img">
                    <img src="	https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png" alt="..." />
                </div>
                <div className="carousel-img">
                    <img src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png" alt="..." />
                </div>
            </Carousel>
        </div>
    )
}
