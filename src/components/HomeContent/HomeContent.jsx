import React, { Fragment, useState } from 'react'
// Modal React player
import { Modal, Button } from "antd";
import ReactPlayer from "react-player";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
// swiper core styles
import 'swiper/css';
import "swiper/swiper.min.css";
// import "swiper/navigation";
import './HomeContent.scss'

// logo HomeContent Explore the marketplace 
import logo1 from "../../assets/img/graphics-design.d32a2f8.svg"
import logo2 from "../../assets/img/online-marketing.74e221b.svg";
import logo3 from "../../assets/img/writing-translation.32ebe2e.svg";
import logo4 from "../../assets/img/video-animation.f0d9d71.svg";
import logo5 from "../../assets/img/music-audio.320af20.svg";
import logo6 from "../../assets/img/programming.9362366.svg";
import logo7 from "../../assets/img/business.bbdf319.svg";
import logo8 from "../../assets/img/lifestyle.745b575.svg";
import logo9 from "../../assets/img/data.718910f.svg";
export default function HomeContent() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    SwiperCore.use([Autoplay, EffectFade, Navigation]);

    return (
        <div className='HomeContent'>
            <div className="container">
                <div className="grid grid-cols-12 flex items-center">
                    <div className="left col-span-6 w-5/6">
                        <h2 className='text-4xl font-semibold'>A whole world of freelance talent at your fingertips</h2>
                        <ul>
                            <li>
                                <span>
                                    <i class="fa-regular fa-circle-check"></i>
                                    The best for every budget
                                </span>
                                <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                            </li>
                            <li>
                                <span>
                                    <i class="fa-regular fa-circle-check"></i>
                                    Quality work done quickly
                                </span>
                                <p>Find the right freelancer to begin working on your project within minutes.</p>
                            </li>
                            <li>
                                <span>
                                    <i class="fa-regular fa-circle-check"></i>
                                    Protected payments, every time
                                </span>
                                <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
                            </li>
                            <li>
                                <span>
                                    <i class="fa-regular fa-circle-check"></i>
                                    24/7 support
                                </span>
                                <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
                            </li>

                        </ul>
                    </div>
                    <div className="right col-span-6">
                        <img src="./img/selling-proposition-still-1400-x1.png" alt="..." onClick={showModal} />
                        <i class="fa-solid fa-play" onClick={showModal}></i>
                        <Modal

                            visible={isModalVisible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            width={"680px"}
                        >
                            <ReactPlayer
                                controls
                                url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
                            />
                        </Modal>
                    </div>
                </div>
            </div>
            <div className='bottom py-10 bg-white'>
                <div className="container">
                    <Fragment>
                        <Swiper
                            navigation
                            loop
                            spaceBetween={0}
                            slidesPerView={1}
                            onSlideChange={() => { }}
                            onSwiper={(swiper) => { }}
                        >
                            <SwiperSlide>
                                <div className='grid grid-cols-12 w-full flex items-center'>
                                    <div className="left col-span-5">
                                        <img src="./img/testimonial-video-still-rooted.jpg" alt="..." onClick={showModal} />
                                        <i className="fa fa-play" onClick={showModal}></i>
                                        <Modal
                                            visible={isModalVisible}
                                            onOk={handleOk}
                                            onCancel={handleCancel}
                                            width={"680px"}
                                        >
                                            <ReactPlayer
                                                controls
                                                url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw"
                                            />
                                        </Modal>
                                    </div>
                                    <div className="right col-span-7 px-14 mt-3">
                                        <span className="text-gray-400 font-medium text-lg">
                                            Kay Kim, Co-founder |{" "}
                                            <span className="text-black font-bold">rooted</span>
                                        </span>
                                        <p className="mt-3 text-3xl text-green-900 font-semibold italic">
                                            "It's extremely exciting that Fiverr has freelancers from
                                            all over the world — it broadens the talent pool. One of the
                                            best things about Fiverr is that while we're sleeping,
                                            someone's working."
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='grid grid-cols-12 w-full flex items-center'>
                                    <div className="left col-span-5">
                                        <img src="./img/testimonial-video-still-haerfest.jpg" alt="..." onClick={showModal} />
                                        <i className="fa fa-play" onClick={showModal}></i>
                                        <Modal
                                            visible={isModalVisible}
                                            onOk={handleOk}
                                            onCancel={handleCancel}
                                            width={"680px"}
                                        >
                                            <ReactPlayer
                                                controls
                                                url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw"
                                            />
                                        </Modal>
                                    </div>
                                    <div className="right col-span-7 px-14 ">
                                        <span className="text-gray-400 font-medium text-lg">
                                            Tim and Dan Joo, Co-Founders |{" "}
                                            <span className="text-black font-bold">HAERFERT</span>
                                        </span>
                                        <p className="mt-3 text-3xl text-green-900 font-semibold italic">
                                            "When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='grid grid-cols-12 w-full flex items-center'>
                                    <div className="left col-span-5">
                                        <img src="./img/testimonial-video-still-lavender.jpg" alt="..." onClick={showModal} />
                                        <i className="fa fa-play" onClick={showModal}></i>
                                        <Modal
                                            visible={isModalVisible}
                                            onOk={handleOk}
                                            onCancel={handleCancel}
                                            width={"680px"}
                                        >
                                            <ReactPlayer
                                                controls
                                                url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw"
                                            />
                                        </Modal>
                                    </div>
                                    <div className="right col-span-7 px-14 ">
                                        <span className="text-gray-400 font-medium text-lg">
                                            Brighid Gannon (DNP, PMHNP-BC), Co-Founder |{" "}
                                            <span className="text-black font-bold">Lavender</span>
                                        </span>
                                        <p className="mt-3 text-3xl text-green-900 font-semibold italic">
                                            "We used Fiverr for SEO, our logo, website, copy, animated
                                            videos — literally everything. It was like working with a
                                            human right next to you versus being across the world."
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='grid grid-cols-12 w-full flex items-center'>
                                    <div className="left col-span-5">
                                        <img src="./img/testimonial-video-still-naadam.jpg" alt="..." onClick={showModal} />
                                        <i className="fa fa-play" onClick={showModal}></i>
                                        <Modal
                                            visible={isModalVisible}
                                            onOk={handleOk}
                                            onCancel={handleCancel}
                                            width={"680px"}
                                        >
                                            <ReactPlayer
                                                controls
                                                url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw"
                                            />
                                        </Modal>
                                    </div>
                                    <div className="right col-span-7 px-14 ">
                                        <span className="text-gray-400 font-medium text-lg">
                                            Caitlin Tormey, Chief Commercial Officer|{" "}
                                            <span className="text-black font-bold">NAADAM</span>
                                        </span>
                                        <p className="mt-3 text-3xl text-green-900 font-semibold italic">
                                            "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </Fragment>
                </div>
            </div>
            <div className='marketplace  bg-white'>
                <div className="container">
                    <h2 className='text-4xl font-bold text-gray-700'>Explore the marketplace</h2>
                    <ul className='grid grid-cols-5 items-center marketplace-list flex flex-wrap'>
                        <li>
                            <a href="">
                                <img src={logo1} alt="..." />
                                <span>Graphics & Design</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={logo2} alt="..." />
                                <span>Digital Marketing</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={logo3} alt="..." />
                                <span>Writing & Translation</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={logo4} alt="..." />
                                <span>Video & Animation</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={logo5} alt="..." />
                                <span>Music & Audio</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={logo6} alt="..." />
                                <span>Programming & Tech</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={logo7} alt="..." />
                                <span>Business</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={logo8} alt="..." />
                                <span>Lifestyle</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={logo9} alt="..." />
                                <span>Data</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
