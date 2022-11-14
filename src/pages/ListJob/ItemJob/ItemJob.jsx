import React from 'react'
import { Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export default function ItemJob(props) {
    const navigate = useNavigate()
    const { listJob } = props
    return (
        <div className="px-3 py-3" onClick={() => navigate(`/detailJob/${listJob.id}`)}>
            <Card>
                <Card.Img
                    role="button"
                    height={200}
                    variant="top"
                    src={listJob.congViec.hinhAnh ? listJob.congViec.hinhAnh : "https://picsum.photos/200/200"}
                // src={listJob.congViec.hinhAnh}
                // src='https://picsum.photos/200/200'
                />
                <Card.Body>
                    <div className='flex items-center'>
                    <img src={listJob.avatar} style={{heigth:'30px', width: '30px', borderRadius:50}} alt="" />
                    <span className='ml-3'>{listJob.tenNguoiTao}</span>
                    </div>
                    <Card.Text role="button">
                        <span className="limit-line h5" style={{ height: "3.2rem", WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', display: '-webkit-box' }}>
                            {listJob.congViec.tenCongViec}
                        </span>
                    </Card.Text>
                    <div className="h6">
                        <span className="mr-1">
                            <i className=" text-warning fas fa-star"></i>
                        </span>
                        <span className="text-warning mr-1">{listJob.congViec.saoCongViec}</span>
                        <span className="text-muted">({listJob.congViec.danhGia})</span>
                    </div>
                </Card.Body>
                <div className="d-flex justify-content-between align-items-center px-3 py-1 border border-top-secondary border-right-0 border-left-0 border-bottom-0">
                    <span className="h4 mb-0 text-muted">
                        <i className="fas fa-heart"></i>
                    </span>
                    <div className=" align-items-center">
                        <span className="h6">STARTING AT</span>
                        <span className="h4 ml-1">{listJob.congViec.giaTien}$</span>
                    </div>
                </div>
            </Card>
        </div>
    )
}
