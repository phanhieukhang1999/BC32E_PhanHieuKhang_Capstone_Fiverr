import React, { useEffect } from 'react'
import { Progress } from 'antd';
import { Tabs, Form, Input } from "antd";

import './DetailJob.scss'
import './OrderJob/OrderJob.scss'
import OrderJob from './OrderJob/OrderJob';
import { useDispatch, useSelector } from 'react-redux';
import { layCongViecChiTietAction } from '../../redux/actions/CongViecActions';
import { useParams } from 'react-router-dom';
export default function DetailJob() {
  const { userLogin } = useSelector(state => state.AuthReducers)

  const { detailJob, jobId } = useParams()
  console.log("jobId: ", jobId);
  // console.log("detailJob: ", detailJob);
  const { detailJobs } = useSelector(state => state.CongViecReducers)
  console.log("detailJobs: ", detailJobs);
  // let binhLuan = useSelector(state => state.binhLuanServices.binhLuan)

  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    dispatch(layCongViecChiTietAction(jobId))
  }, [])


  return (
    <div className='DetailJob py-36'>
      <div className="container">
        <div className="row">
          <div className="left col-8">
            <p>
              {detailJobs?.tenLoaiCongViec}
              {/* 123123 */}
              <i class="fa-solid fa-chevron-right"></i>
              {detailJobs?.tenNhomChiTietLoai}
              <i class="fa-solid fa-chevron-right"></i>
              {detailJobs?.tenChiTietLoai}

            </p>
            <h2>{detailJobs?.congViec?.tenCongViec}</h2>
            <div className='user flex'>
              <img style={{ heigth: '35px', width: '35px' }} src={detailJobs?.avatar ? detailJobs?.avatar : "https://picsum.photos/35/35"} alt="" className='rounded-full mr-2' />
              <span>{detailJobs?.tenNguoiTao} |</span>
              <div className='star text-warning ml-2'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>({detailJobs?.congViec?.danhGia})</span>
              </div>
            </div>
            <img src={detailJobs?.congViec?.hinhAnh} alt="" className='mt-3 w-full' />


                    
            {/* <div className='about'>
              <h4 className="my-4">About This Gig</h4>

              <p className="text-muted h6 mb-4" style={{ lineHeight: 1.5 }}>
                {detailJobs?.congViec?.moTa}
              </p>
              <p>
                {detailJobs?.congViec?.moTaNgan}
              </p>
            </div>
            <hr />
            <div className='about-seller mt-5'>
              {userLogin.user ? (
                <>
                  <h4>About the Seller</h4>
                  <div className='flex'>
                    <img src={userLogin.user.avatar ? userLogin.user.avatar : 'https://picsum.photos/50/50'} alt="..." width={80}
                      height={50}
                      className="rounded-full mr-3" style={{ height: '80px' }} />
                    <div>
                      <p>{userLogin.user.avatar}</p>
                      <span>{userLogin.user.name}</span>
                      <p>{userLogin.user.skill}</p>
                      <div className='star text-warning'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        (999+)
                      </div>
                      <button className='mt-3 rounded border border-gray-600 py-2 px-4'>Contact me</button>
                    </div>
                  </div>
                </>
              ) : null}

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
              {userLogin.user ? (
                <>
                  <div className='info'>
                    <div className='flex items-center mb-3'>
                      <img src={userLogin.user.avatar ? userLogin.user.avatar : "https://picsum.photos/35/35"} alt="..." className='rounded mr-2' />
                      <span>{userLogin.user.name}</span>
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
                </>
              ) : null}

            </div> */}


          </div>
          <div className="right col-4 mt-3">
            <div className='tab'>
              <Tabs size="large" defaultActiveKey="2" centered type='card'>
                <Tabs.TabPane disabled tab="Basic" key="1">
                  <OrderJob />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Stardard" key="2">
                  <OrderJob item={detailJobs} />
                </Tabs.TabPane>
                <Tabs.TabPane disabled tab="Premium" key="3">
                  <OrderJob />
                </Tabs.TabPane>
              </Tabs >
            </div>
          </div>
          <div className="bottom col-8">
            <div className='about'>
              <h4 className="my-4">About This Gig</h4>

              <p className="text-muted h6 mb-4" style={{ lineHeight: 1.5 }}>
                {detailJobs?.congViec?.moTa}
              </p>
              <p>
                {detailJobs?.congViec?.moTaNgan}
              </p>
            </div>
            <hr />
            <div className='about-seller mt-5'>
              {userLogin.user ? (
                <>
                  <h4>About the Seller</h4>
                  <div className='flex'>
                    <img src={userLogin.user.avatar ? userLogin.user.avatar : 'https://picsum.photos/50/50'} alt="..." width={80}
                      height={50}
                      className="rounded-full mr-3" style={{ height: '80px' }} />
                    <div>
                      {/* <p>{userLogin.user.avatar}</p> */}
                      <span>{userLogin.user.name}</span>
                      <div>
                    {userLogin?.user?.skill.map((item, index) => {
                      return <span key={index} className='mr-2'>{item}</span>
                    })}
                  </div>
                      {/* <p>{userLogin.user.skill}</p> */}
                      <div className='star text-warning'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        (999+)
                      </div>
                      <button className='mt-3 rounded border border-gray-600 py-2 px-4'>Contact me</button>
                    </div>
                  </div>
                </>
              ) : null}

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
                    <div className='rating-main' style={{ width: 400 }}>
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
                    <li className='flex'>
                      Seller communication level
                      <span>5
                        <i class="fa-solid fa-star text-warning"></i></span>
                    </li>
                    <li>
                      Recommend to a friend
                      <span>5
                        <i class="fa-solid fa-star text-warning"></i></span>
                    </li>
                    <li>
                      Service as described
                      <span>5
                        <i class="fa-solid fa-star text-warning"></i></span>
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
              {userLogin?.user ? (
                <>
                  <div className='info'>
                    <div className='flex items-center mb-3'>
                      <img src={userLogin?.user?.avatar ? userLogin?.user?.avatar : "https://picsum.photos/35/35"} alt="..." className='rounded mr-2' />
                      <span>{userLogin?.user?.name}</span>
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
                </>
              ) : null}

            </div> 

          </div>
        </div>
      </div>
    </div>
  )
}
