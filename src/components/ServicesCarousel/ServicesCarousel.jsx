import React, { Component } from 'react'
import Slider from "react-slick";

import './ServicesCarousel.scss'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",boxShadow: '0 2px 5px 0 rgb(0 0 0 / 15%)' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", fontSize: '40px', boxShadow: '0 2px 5px 0 rgb(0 0 0 / 15%)', borderRadius: '50%',height:'34px', width:'34px'}}
      onClick={onClick}
    />
  );
}

export default function ServicesCarousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='ServicesCarousel'>
      <div className="container">
        <h2 className='text-3xl text-gray-700 font-bold'>Popular Professional service</h2>
        <Slider {...settings}>
          <div className='card'>
            <img src="./img/logo-design-2x.jpg" alt="" />
            <div className='card-body'>
              <span>Build your brand</span>
              <p>Logo Design</p>
            </div>
          </div>
          <div className='card'>
            <img src="./img/wordpress-2x.jpg" alt="" />
            <div className='card-body'>
              <span>Customize your site</span>
              <p>WordPress</p>
            </div>
          </div>
          <div className='card'>
            <img src="./img/voiceover-2x.jpg" alt="" />
            <div className='card-body'>
              <span>Share your message</span>
              <p>Voice Over</p>
            </div>
          </div>
          <div className='card'>
            <img src="./img/animated-explainer-2x.jpg" alt="" />
            <div className='card-body'>
              <span>Engage your audience</span>
              <p>Video Explainer</p>
            </div>
          </div>
          <div className='card'>
            <img src="./img/social-2x.jpg" alt="" />
            <div className='card-body'>
              <span>Reach more customers</span>
              <p>Social Media</p>
            </div>
          </div>
          <div className='card'>
            <img src="./img/seo-2x.jpg" alt="" />
            <div className='card-body'>
              <span>Unlock growth online</span>
              <p>SEO</p>
            </div>
          </div>
          <div className='card'>
            <img src="./img/illustration-2x.jpg" alt="" />
            <div className='card-body'>
              <span>Color your dreams</span>
              <p>Illustration</p>
            </div>
          </div>
          <div className='card'>
            <img src="./img/translation-2x.jpg" alt="" />
            <div className='card-body'>
              <span>Go global</span>
              <p>Translation</p>
            </div>
          </div>
          <div className='card'>
            <img src="./img/data-entry-2x.jpg" alt="" />
            <div className='card-body'>
              <span>Learn your business</span>
              <p>Data Entry</p>
            </div>
          </div>
          <div className='card'>
            <img src="./img/book-covers-2x.jpg" alt="" />
            <div className='card-body'>
              <span>Showcase your story</span>
              <p>Book Covers</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}
