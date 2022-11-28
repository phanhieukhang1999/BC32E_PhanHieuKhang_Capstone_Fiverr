import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { AudioOutlined, EditOutlined, SearchOutlined, DeleteOutlined, CalendarOutlined } from '@ant-design/icons';
// import Search from 'antd/lib/input/Search';
import { Button, Table } from 'antd';
import { Input, Space } from 'antd';
import { Modal } from "react-bootstrap";

import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { nguoiDungServices } from '../../../services/nguoiDungServices';
import { deleteJobAction, editJobAction, layDSCongViecAction } from '../../../redux/actions/CongViecActions';
import FormAddJob from './FormAddJob/FormAddJob';
import FormEditob from './FormEditJob/FormEditJob';
import FormEditJob from './FormEditJob/FormEditJob';
const { Search } = Input;


export default function QuanLyCongViec() {
    const { listJob } = useSelector(state => state.CongViecReducers)
    console.log("listJob: ", listJob);
    const dispatch = useDispatch()
    // const { id } = useParams()
    useEffect(() => {
        dispatch(layDSCongViecAction())

    }, [])
    const { Search } = Input;

    const [showModal, setshowModal] = useState(false);
    const [showModalEdit, setshowModalEdit] = useState(false);
    // const [valueSearch, setValueSearch] = useState([]);


    const [valueSearch, setValueSearch] = useState('');




    const onSearch = value => {

        console.log(value);
        // gọi api lấy danh sách user
        // dispatch(searchUserAction(value));
        // nguoiDungServices.searchUserSerVice(value)
        //   .try((res) => {
        //     dispatch(getUserAction(user))
        //     setValueSearch(res.data.content)
        //   })
        //   .catch((error) => {
        //     console.log("error: ", error);

        //   })


    };

    // danh sách user
    const data = listJob.filter(listJob => listJob.tenCongViec.includes(valueSearch.toLowerCase().trim()) || listJob.moTaNgan.includes(valueSearch.toLowerCase().trim())).sort((a, b) => a.id - b.id)

    // search user
    // const data = valueSearch

    const columns = [
        {
            title: 'Tên công việc',
            dataIndex: 'tenCongViec',
            key: 'tenCongViec',
            render: (text, listJob) => {
                return <Fragment key={text}>
                    {listJob.tenCongViec}
                </Fragment>
            },
            width: '15%'
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            key: 'hinhAnh',
            render: (text, listJob) => {
                return <Fragment key={text}>
                    <img src={listJob.hinhAnh} alt={listJob.hinhAnh} width='100px' height='50px' />
                </Fragment>
            },
            width: '8%'
        },
        {
            title: 'Mô tả ngắn',
            dataIndex: 'moTaNgan',
            key: 'moTaNgan',
            render: (text, listJob) => {
                return <Fragment key={text}>
                    {listJob.moTaNgan}
                </Fragment>
            },
            width: '30%'
        },
        {
            title: 'Giá tiền',
            dataIndex: 'giaTien',
            key: 'giaTien',
            render: (text, listJob) => {
                return <Fragment key={text}>
                    {listJob.giaTien} $
                </Fragment>
            },
            width: '6%'
        },
        {
            title: 'Số sao',
            dataIndex: 'saoCongViec',
            key: 'saoCongViec',
            render: (text, listJob) => {
                return <Fragment key={text}>
                    {listJob.saoCongViec}
                </Fragment>
            },
            width: '6%'
        },

        {
            title: 'Hành động',
            dataIndex: 'action',
            key: 'action',
            render: (text, listJob) => {
                return <Fragment>
                    <span key={1} className=" mr-2  text-2xl" >
                        <EditOutlined style={{ color: 'blue' }}
                            onClick={() => {
                                setshowModalEdit(true);
                                localStorage.setItem("userAdmin", JSON.stringify(listJob));
                                
                            }} />
                    </span>
                    <span style={{ cursor: 'pointer' }} key={2} className="text-2xl"
                        onClick={() => {
                              dispatch(deleteJobAction(listJob.id))

                        }}><DeleteOutlined style={{ color: 'red' }} />
                    </span>


                </Fragment>
            },
            sortDirections: ['descend', 'ascend'],
            width: '10%'
        },

    ];




    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    return (
        <div>
            <h3 className="text-4xl my-3">Quản lý công việc</h3>
            <Button className="mb-5" onClick={() => setshowModal(true)}>Thêm công việc</Button>
            <Search
                className="mb-5"
                placeholder="Nhập tên công việc cần tìm ..."
                enterButton={<SearchOutlined />}
                // enterButton="Search"
                allowClear
                value={valueSearch}
                onChange={(e) => setValueSearch(e.target.value)}

                size="large"

                onSearch={onSearch}
            />

            <Table columns={columns} dataSource={data} rowKey={"tenCongViec"} />

            <Modal show={showModal} onHide={() => setshowModal(false)}>
                <Modal.Header style={{ justifyContent: 'center' }}>
                    <Modal.Title >
                        <span className='text-center'>Thêm công việc</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormAddJob setshowModal={setshowModal}/>
                    {/* <FormAddUser setshowModal={setshowModal} /> */}
                </Modal.Body>
            </Modal>


            <Modal show={showModalEdit} onHide={() => setshowModalEdit(false)}>
                <Modal.Header style={{ justifyContent: 'center' }}>
                    <Modal.Title >
                        <span className='text-center'>Cập nhật công việc</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormEditJob setshowModalEdit={setshowModalEdit} />
                </Modal.Body>
            </Modal>
        </div>

    )
}

