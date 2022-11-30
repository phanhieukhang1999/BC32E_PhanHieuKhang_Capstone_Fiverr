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
import { deleteUserAction, getUserAction, searchUserAction } from '../../../redux/actions/NguoiDungActions';
import FormAddUser from './FormAddUser';
import FormEdit from './FormEdit/FormEdit';
import { nguoiDungServices } from '../../../services/nguoiDungServices';
const { Search } = Input;


export default function QuanLyNguoiDung() {
  const { user } = useSelector(state => state.NguoiDungReducers)
  console.log("user: ", user);
  const dispatch = useDispatch()
  // const { id } = useParams()
  useEffect(() => {
    dispatch(getUserAction());

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
  const data = user

  // search user
  // const data = valueSearch

  const columns = [

    {
      title: 'Tài khoản',
      dataIndex: 'name',
      key: 'name',

      render: (text, user) => {
        return <Fragment key={text}>
          {user.name}
        </Fragment>
      },
      width: '15%'
    },


    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text, user) => {
        return <Fragment>
          {user.email}
        </Fragment>
      },
      width: '15%'
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      render: (text, user) => {
        return <Fragment>
          {user.phone}
        </Fragment>
      },
      width: '15%'
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (text, user) => {
        return <Fragment>
          {user.role}
        </Fragment>
      },
      width: '15%'

    },
    {
      title: 'Hành động',
      dataIndex: 'action',
      key: 'action',
      render: (text, user) => {
        return <Fragment key={text}>
          <span key={1} className=" mr-2  text-2xl" >
            <EditOutlined style={{ color: 'blue' }}
              onClick={() => {
                setshowModalEdit(true);
                localStorage.setItem("userAdmin", JSON.stringify(user));
              }} />
          </span>
          <span style={{ cursor: 'pointer' }} key={2} className="text-2xl"
            onClick={() => {
              dispatch(deleteUserAction(user.id))

            }}><DeleteOutlined style={{ color: 'red' }} />
          </span>


        </Fragment>
      },
      sortDirections: ['descend', 'ascend'],
      width: '25%'
    },

  ];




  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
  return (
    <div>
      <h3 className="text-4xl my-3">Quản lý người dùng</h3>
      <Button className="mb-5" onClick={() => setshowModal(true)}>Thêm quản trị viên</Button>
      <Search
        className="mb-5"
        placeholder="Nhập tên tài khoản cần tìm ..."
        enterButton={<SearchOutlined />}
        // enterButton="Search"
        allowClear
        value={valueSearch}
        onChange={(e) => setValueSearch(e.target.value)}

        size="large"

        onSearch={onSearch}
      />
      
      <Table columns={columns} dataSource={data.filter(user => user.name.includes(valueSearch.toLowerCase().trim()) || user.email.includes(valueSearch.toLowerCase().trim())).sort((a,b) => a.id - b.id)} rowKey={"name"} />

      <Modal show={showModal} onHide={() => setshowModal(false)}>
        <Modal.Header style={{ justifyContent: 'center' }}>
          <Modal.Title >
            <span className='text-center'>Thêm quản trị viên</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormAddUser setshowModal={setshowModal} />
        </Modal.Body>
      </Modal>


      <Modal show={showModalEdit} onHide={() => setshowModalEdit(false)}>
        <Modal.Header style={{ justifyContent: 'center' }}>
          <Modal.Title >
            <span className='text-center'>Cập nhât quản trị viên</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormEdit setshowModalEdit={setshowModalEdit} />
        </Modal.Body>
      </Modal>
    </div>

  )
}
