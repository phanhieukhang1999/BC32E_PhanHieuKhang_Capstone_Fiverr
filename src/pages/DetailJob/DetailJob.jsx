import React from 'react'
import { Progress } from 'antd';
import { Tabs, Form, Input } from "antd";

import './DetailJob.scss'
import './OrderJob/OrderJob.scss'
import OrderJob from './OrderJob/OrderJob';
export default function DetailJob() {
  return (
    <div className='DetailJob py-36'>
      <div className="container">
        <div className="row">
          <div className="left col-8">
            <p>
              ABC
              <i class="fa-solid fa-chevron-right"></i>
              123
              <i class="fa-solid fa-chevron-right"></i>
              abc
            </p>
            <h2>Design twitch logo stream overlays alerts and screens</h2>
            <div className='user flex'>
              <img src="https://picsum.photos/35/35" alt="" />
              <span>admin</span>
              <div className='star'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>(123)</span>
              </div>
            </div>
            <img src="https://picsum.photos/1000/600" alt="" className='mt-3'/>
            <div className='about'>
              <h4 className="my-4">About This Gig</h4>

              <p className="text-muted h6 mb-4" style={{ lineHeight: 1.5 }}>
                \nHi There,\r\n\r\n\r\n\r\nHave You Been Looking for a Brand Logo with Complete Corporate Brand Identity?\r\n\r\n\r\n\r\nHi, I am Talha, a Passionate Professional Graphic Designer designing brand logos & brand Identity for many Years, I have successfully designed brand logos with the complete corporate brand identity for different brands around the world.\r\n\r\n\r\n\r\nI also would love to do demanded designs, Just leave your request, I will respond instantly."
              </p>
              <p>
                Plus - MOST SELLING!\r\nUS$65\r\n3 logo options + source file in Ai, EPS, SVG, PDF, and PSD\r\n\r\n2 Days Delivery\r\n5 Revisions\r\n3 concepts included\r\nLogo transparency\r\nVector file\r\nPrintable file\r\nSource file"
              </p>
            </div>
            <hr />
            <div className='about-seller mt-5'>
              <h4>About the seller</h4>
              <div className='flex'>
                <img src="https://picsum.photos/50/50" alt="..." width={50}
                  height={50}
                  className="rounded-circle" />
                <div>
                  <p>admin</p>
                  <span>abadasd</span>
                  <div className='star'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    (1123)
                  </div>
                  <button>Contact me</button>
                </div>
              </div>
            </div>

            <div className='FAQ mt-5'>
              <h4>FAQ</h4>
              <ul className='mt-4'>
                <span className='flex justify-between items-center'>
                  Why choose Softriver?
                  <i class="fa-solid fa-chevron-down"></i>
                </span>
                <hr />
                <span className='flex justify-between items-center'>
                  What Package should I choose?
                  <i class="fa-solid fa-chevron-down"></i>
                </span>
                <hr />
                <span className='flex justify-between items-center'>
                  What is your Design Process?
                  <i class="fa-solid fa-chevron-down"></i>
                </span>
                <hr />
                <span className='flex justify-between items-center'>
                  What does the Social Media Kit and Stationery Designs include?
                  <i class="fa-solid fa-chevron-down"></i>
                </span>
                <hr />
              </ul>
            </div>
            <div className='review'>
              <div className='top flex justify-between items-center'>
                <div className='left flex items-center'>
                  <b>123 Review </b>
                  <div className='text-warning ml-3 mb-1'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star mr-3"></i>
                    <b className='text-xl'>5</b>
                  </div>
                </div>
                <div className='right'>
                  <span>
                    Sort by <b>Most relevant <i class="fa-solid fa-chevron-down"></i></b>
                  </span>
                </div>
              </div>
              <div className="bottom flex">
                <div className="left mr-8">
                  <div className='rating'>
                    <div style={{ width: 400 }}>
                      <div className='flex items-center'>
                        <span className='mr-4 text-blue-500 flex items-center'>5
                          <span className='ml-2'>Stars</span>
                        </span>
                        <Progress percent={100} size="small" />
                        <span className='text-blue-500'>(999+)</span>

                      </div>
                      <div className='flex items-center'>
                        <span className='mr-4 text-blue-500 flex items-center'>4
                          <span className='ml-2'>Stars</span>
                        </span>
                        <Progress percent={70} size="small" />
                        <span className='text-blue-500'>(456)</span>

                      </div>
                      <div className='flex items-center'>
                        <span className='mr-4 text-blue-500 flex items-center'>3
                          <span className='ml-2'>Stars</span>
                        </span>
                        <Progress percent={50} size="small" />
                        <span className='text-blue-500'>(123)</span>

                      </div>
                      <div className='flex items-center'>
                        <span className='mr-4 text-blue-500 flex items-center'>2
                          <span className='ml-2'>Stars</span>
                        </span>
                        <Progress percent={30} size="small" />
                        <span className='text-blue-500'>(123)</span>

                      </div>
                      <div className='flex items-center'>
                        <span className='mr-4 text-blue-500 flex items-center'>1
                          <span className='ml-2'>Stars</span>
                        </span>
                        <Progress percent={10} size="small" />
                        <span className='text-blue-500'>(10)</span>

                      </div>

                    </div>

                  </div>
                </div>
                <div className="right flex flex-col">
                  <span>Rating Breakdown</span>
                  <ul>
                    <li className='flex justify-between'>
                      Seller communication level
                      <span>5
                        <i class="fa-solid fa-star text-warning"></i></span>
                    </li>
                    <li>
                      Recommend to a friend
                      5
                      <i class="fa-solid fa-star text-warning"></i>
                    </li>
                    <li>
                      Service as described
                      5
                      <i class="fa-solid fa-star text-warning"></i>
                    </li>
                  </ul>
                </div>

              </div>
              <div className='mt-3'>
                <h4>Filter</h4>
                <span>Industry <b>All Industries</b> <i class="fa-solid fa-chevron-down"></i></span>
              </div>
              <hr />
            </div>

            <div className="comment">
              <div className='info'>
                <div className='flex items-center mb-3'>
                  <img src="https://picsum.photos/35/35" alt="..." className='rounded mr-2' />
                  <span>admin</span>
                  <i class="fa-solid fa-star text-warning ml-2"> 5</i>
                </div>
                <span>ádasdasdasd</span>
                <div className='flex items-center mt-3'>
                  <i class="fa-regular fa-thumbs-up"></i>
                  <span className='mx-2'>Helpful</span>
                  <i class="fa-regular fa-thumbs-down"></i>
                  <span className='mx-2'>Not Helpful</span>

                </div>
              </div>
              <div className='commet-bottom mt-5 flex'>
                <div>
                  <img src="https://picsum.photos/35/35" alt="..." className='rounded mr-2' />
                </div>
                <Form className='w-full'>
                  <Form.Item name="content" className="mb-2 ">
                    <Input.TextArea />
                  </Form.Item>
                  <div>
                    <button className="btn btn-primary" type="submit">
                      Add Comment
                    </button>
                  </div>
                </Form>
              </div>
            </div>


          </div>
          <div className="right col-4 mt-3">
            <div className='tab'>
              <Tabs size="large" defaultActiveKey="1" centered type='card'>
                <Tabs.TabPane tab="Basic" key="1">
                  <OrderJob />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Stardard" key="2">
                  <OrderJob />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Premium" key="3">
                  <OrderJob />
                </Tabs.TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
