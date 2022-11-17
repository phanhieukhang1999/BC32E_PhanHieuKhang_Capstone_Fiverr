import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { USER_LOGIN } from '../../../util/settings/config'
import './OrderJob.scss'
export default function OrderJob(props) {
    const { item } = props
    // if (!localStorage.getItem(USER_LOGIN)) {
    //     return <Navigate to='/login' />
    // }
    const { detailJobs } = useSelector(state => state.CongViecReducers)

    const navigate = useNavigate()
    return (
        <div className="p-3">
            <div className="d-flex justify-content-between">
                <h5>Stardard</h5>
                <p className="h5  text-black">{item.congViec?.giaTien}$</p>
            </div>
            <p className="disabled h6 my-4" >
                {item.congViec?.tenCongViec}
            </p>
            <div className='timeJob mb-3'>
                <i class="fa-regular fa-clock mx-2"></i>
                30 Day Delivery
                <i class="fa-solid fa-rotate mx-2"></i>
                Revlslons
            </div>
            <span>
                {item.congViec?.moTaNgan}
            </span>
            <div className='flex flex-col'>
                {(!localStorage.getItem(USER_LOGIN)) ? (
                    <>
                        <button className="btn-lg btn btn-success btn-block my-4" onClick={() => navigate(`/login`)}>
                            <span>Continue ({item?.congViec?.giaTien}$)</span>
                        </button>

                        <div role="button" className="h5 text-success text-center">
                            Compare Package
                        </div>
                    </>
                ) : (
                    <>
                        <button className="btn-lg btn btn-success btn-block my-4" onClick={() => {
                            alert('Thuê thành công')
                        }}>
                            <span>Continue ({item?.congViec?.giaTien}$)</span>
                        </button>

                        <div role="button" className="h5 text-success text-center">
                            Compare Package
                        </div>
                    </>
                )}

                {/* <button className="btn-lg btn btn-success btn-block my-4" onClick={() => navigate(`/login`)}>
                    Continue ($1000)
                </button>

                <div role="button" className="h5 text-success text-center">
                    Compare Package
                </div> */}

            </div>
        </div>
    )
}
