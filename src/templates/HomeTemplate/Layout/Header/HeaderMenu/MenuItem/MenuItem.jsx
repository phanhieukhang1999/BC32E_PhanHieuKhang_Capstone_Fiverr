import React, { useEffect } from 'react'
import { Card } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import './MenuItem.scss'
import { useDispatch, useSelector } from 'react-redux';
import { layChiTietLoaiCongViecAction, layCongViecTheoChiTietLoaiAction } from '../../../../../../redux/actions/CongViecActions';
export default function MenuItem() {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const { idMenu, idItem } = useParams()
    const { menuItem } = useSelector(state => state.CongViecReducers)
    console.log("menuItem: ", menuItem);
    // console.log("RENDER",menuItem.dsNhomChiTietLoai.filter(item => item.id == idItem));
    useEffect(() => {
        dispatch(layChiTietLoaiCongViecAction(idMenu));
    }, [])
    return (
        <div className='menuItem py-36'>
            <div className="container">
                <div className='top-bar flex justify-between'>
                <div className='left flex flex-wrap'>
                    <DropdownButton id="dropdown-basic-button" className='mb-3' title="Category">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="dropdown-basic-button" className='mb-3' title="Service Options">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="dropdown-basic-button" className='mb-3' title="Seller Details">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="dropdown-basic-button" className='mb-3' title="Budget">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="dropdown-basic-button" className='mb-3' title="Delivery Time">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </div>

                <div className='right'>
                    <Form className='check flex'>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Pro Service" />
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Local sellers"
                        />
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Online Sellers"
                        />

                    </Form>
                </div>
            </div>
                <div className="row">
                    {menuItem.dsNhomChiTietLoai?.map((item) => {
                        return <div className="col-12 col-md-6 col-lg-3 mb-5">
                            <div className="px-3 py-3 flex " >
                                <Card className='mx-auto' key={item.id} onClick={() => navigate(`/detailJob/${item.id}`)}>

                                    <Card.Img
                                        role="button"
                                        variant="top"
                                        // heigth={160}
                                        src={item.hinhAnh ? item.hinhAnh : 'https://picsum.photos/200/200'}
                                        // src='https://picsum.photos/200/200'
                                        // style={{heigth:'160px'}} 
                                        style={{ height: 160 }}
                                    />
                                    <Card.Body>
                                        <div className='flex items-center'>
                                            <img src='https://picsum.photos/200/200' style={{ heigth: '30px', width: '30px', borderRadius: 50 }} alt="" />
                                            <span className='ml-3'>admin</span>
                                        </div>
                                        <Card.Text role="button">
                                            <span className="limit-line h5" style={{ height: "3.2rem", WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', display: '-webkit-box' }}>
                                                {item.tenNhom}
                                            </span>
                                        </Card.Text>
                                        <div className="h6">
                                            <span className="mr-1">
                                                <i className=" text-warning fas fa-star"></i>
                                            </span>
                                            <span className="text-warning mr-1">5</span>
                                            <span className="text-muted">(123)</span>
                                        </div>
                                    </Card.Body>
                                    <div className="d-flex justify-content-between align-items-center px-3 py-1 border border-top-secondary border-right-0 border-left-0 border-bottom-0">
                                        <span className="h4 mb-0 text-muted">
                                            <i className="fas fa-heart"></i>
                                        </span>
                                        <div className=" align-items-center">
                                            <span className="h6">STARTING AT</span>
                                            <span className="h4 ml-1">10$</span>
                                        </div>
                                    </div>
                                </Card>


                                {/* <Card>
                                    <Card.Img
                                        role="button"
                                        height={200}
                                        variant="top"
                                        // src={listJob.congViec.hinhAnh ? listJob.congViec.hinhAnh : "https://picsum.photos/200/200"}
                                        // src={menuItem.dsNhomChiTietLoai.hinhAnh}
                                        src='https://picsum.photos/200/200'
                                    />
                                    <Card.Body>
                                        <div className='flex items-center'>
                                            <img src='https://picsum.photos/200/200' style={{ heigth: '30px', width: '30px', borderRadius: 50 }} alt="" />
                                            <span className='ml-3'>123123</span>
                                        </div>
                                        <Card.Text role="button">
                                            <span className="limit-line h5" style={{ height: "3.2rem", WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', display: '-webkit-box' }}>
                                                123123
                                            </span>
                                        </Card.Text>
                                        <div className="h6">
                                            <span className="mr-1">
                                                <i className=" text-warning fas fa-star"></i>
                                            </span>
                                            <span className="text-warning mr-1">123123</span>
                                            <span className="text-muted">123123</span>
                                        </div>
                                    </Card.Body>
                                    <div className="d-flex justify-content-between align-items-center px-3 py-1 border border-top-secondary border-right-0 border-left-0 border-bottom-0">
                                        <span className="h4 mb-0 text-muted">
                                            <i className="fas fa-heart"></i>
                                        </span>
                                        <div className=" align-items-center">
                                            <span className="h6">STARTING AT</span>
                                            <span className="h4 ml-1">123123$</span>
                                        </div>
                                    </div>
                                </Card> */}
                            </div>

                            {/* <div className="px-3 py-3" >
                            <Card>
                                <Card.Img
                                    role="button"
                                    height={200}
                                    variant="top"
                                    // src={listJob.congViec.hinhAnh ? listJob.congViec.hinhAnh : "https://picsum.photos/200/200"}
                                    // src={listJob.congViec.hinhAnh}
                                    src='https://picsum.photos/200/200'
                                />
                                <Card.Body>
                                    <div className='flex items-center'>
                                        <img src='https://picsum.photos/200/200' style={{ heigth: '30px', width: '30px', borderRadius: 50 }} alt="" />
                                        <span className='ml-3'>123123</span>
                                    </div>
                                    <Card.Text role="button">
                                        <span className="limit-line h5" style={{ height: "3.2rem", WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', display: '-webkit-box' }}>
                                            123123
                                        </span>
                                    </Card.Text>
                                    <div className="h6">
                                        <span className="mr-1">
                                            <i className=" text-warning fas fa-star"></i>
                                        </span>
                                        <span className="text-warning mr-1">123123</span>
                                        <span className="text-muted">123123</span>
                                    </div>
                                </Card.Body>
                                <div className="d-flex justify-content-between align-items-center px-3 py-1 border border-top-secondary border-right-0 border-left-0 border-bottom-0">
                                    <span className="h4 mb-0 text-muted">
                                        <i className="fas fa-heart"></i>
                                    </span>
                                    <div className=" align-items-center">
                                        <span className="h6">STARTING AT</span>
                                        <span className="h4 ml-1">123123$</span>
                                    </div>
                                </div>
                            </Card>
                        </div> */}
                        </div>
                    }
                    )}
                </div>

            </div>
        </div>
    )
}
