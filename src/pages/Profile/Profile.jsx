import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getUserIdAction } from '../../redux/actions/NguoiDungActions'
import { Modal } from "react-bootstrap";
import FormEditUser from './FormEditUser/FormEditUser';
import './Profile.scss'
import { LayDanhSachCongViecDaThue, LayDanhSachCongViecDaThueActions, XoaCongViec, XoaCongViecAction } from '../../redux/actions/ThueCongViecActions';



export default function Profile() {
  const { userId } = useSelector(state => state.NguoiDungReducers)
  console.log("userId: ", userId);

  const { dsCongViecDaThue } = useSelector(state => state.ThueCongViecReducers)
  console.log("dsCongViecDaThue: ", dsCongViecDaThue);
  // const { userLogin } = useSelector(state => state.AuthReducers)
  const { profile, idProfile } = useParams()
  console.log("idProfile: ", idProfile);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserIdAction(idProfile))
  }, [])

  useEffect(() => {

    dispatch(LayDanhSachCongViecDaThueActions())
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showModal, setshowModal] = useState(false);

  return (
    <div className='Profile py-36'>
      <div className="container">
        <div className="row justify-between">
          <div className="col-4">
            <div className="card card-top">
              <div className='avatar text-center items-center mx-auto mt-3'>

                <div
                  role="button"
                  className="upload-img d-none d-lg-block"

                >
                  {/* <div className="bg-svg">{cameraImg}</div> */}
                  <div style={{ width: 80, height: 80, display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="text-2xl rounded-full bg-gray-400 text-center mx-auto">
                    <span>{userId.name.substr(0, 1)}</span>
                  </div>
                  <input
                    className="d-none"

                    type="file"

                    name="uploadAvatar"
                    accept="image/png, image/jpeg, image/jpg"
                  />
                </div>
                <h4 className='card-title mx-auto mt-2'>{userId.name}</h4>

                <div className='edit items-center text-center'>
                  <i class="fa-solid fa-pencil" onClick={() => setshowModal(true)} role="button"></i>
                </div>
              </div>
              <div className="card-body">
                <hr />
                <div className='info'>
                  <div className='top flex justify-between items-center'>
                    <div>
                      <i class="fa-solid fa-location-dot mr-3"></i>
                      <span className='text-gray-500'>From</span>
                    </div>
                    <div>
                      <b className='text-gray-500'>VietNam</b>
                    </div>
                  </div>
                  <div className='bottom flex justify-between items-center'>
                    <div>
                      <i class="fa-solid fa-user mr-3"></i>
                      <span className='text-gray-500'>Member since</span>
                    </div>
                    <div>
                      <b className='text-gray-500'>November 5</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-bottom mt-3 ">
              <div className="card-body">
                <div className='des flex justify-between p-2'>
                  <h5>Description</h5>
                  <b>Edit</b>
                </div>
                <hr />
                <div className='des flex justify-between p-2'>
                  <h5>Leaguage</h5>
                  <b>Edit</b>
                </div>
                <hr />
                <div className='link-account p-2'>
                  <h5>Link Accounts</h5>
                  <ul>
                    <li className='mt-3'>
                      <Link>
                        <i className="fa-solid fa-plus mr-2"></i>
                        <span>Facebook</span>
                      </Link>
                    </li>
                    <li className='mt-3'>
                      <Link>
                        <i className="fa-brands fa-google-plus mr-2"></i>
                        <span>Google</span>
                      </Link>
                    </li>
                    <li className='mt-3'>
                      <Link>
                        <i className="fa-solid fa-plus mr-2"></i>
                        <span>Dribbble</span>
                      </Link>
                    </li>
                    <li className='mt-3'>
                      <Link>
                        <i className="fa-solid fa-plus mr-2"></i>
                        <span>Stack Overflow</span>
                      </Link>
                    </li>
                    <li className='mt-3'>
                      <Link>
                        <i className="fa-solid fa-plus mr-2"></i>
                        <span>GitHub</span>
                      </Link>
                    </li>
                    <li className='mt-3'>
                      <Link>
                        <i className="fa-solid fa-plus mr-2"></i>
                        <span>Vimeo</span>
                      </Link>
                    </li>
                    <li className='mt-3'>
                      <Link>
                        <i className="fa-solid fa-plus mr-2"></i>
                        <span>Twitter</span>
                      </Link>
                    </li>

                  </ul>
                </div>
                <hr />
                <div className='skill p-2'>
                  <div className='flex justify-between'>
                    <h5>Skill</h5>
                    <b className='text-blue-500' onClick={() => setshowModal(true)} role="button">Edit</b>
                  </div>
                  <div>
                    {userId?.skill?.map((item, index) => {
                      return <span key={index} className='mr-2'>{item}</span>
                    })}
                  </div>
                </div>
                <hr />
                <div className='education p-2'>
                  <div className='flex justify-between'>
                    <h5>Education</h5>
                    <b>Edit</b>
                  </div>
                  
                </div>
                <hr />
                <div className='certification p-2'>
                  <div className='flex justify-between'>
                    <h5>Certification</h5>
                    <b className='text-blue-500' onClick={() => setshowModal(true)} role="button">Edit</b>
                  </div>
                  <div>
                    {userId?.certification?.map((item, index) => {
                      return <span key={index} className='mr-2'>{item}</span>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-7 p-0">
            <div className="card top flex justify-between" style={{ position: 'relative' }}>
              <div className='card-body flex items-center justify-between'>
                <div className='text-4xl text-gray-500'>
                  <i className="fa-solid fa-city"></i>
                </div>
                <div>
                  <p className='text-xl text-gray-500'>
                    <b>Buying service for work?</b> Help us tallor your experience to fit your needs.</p>
                  <p className='text-xl text-green-600'>Tell us more about your business <i class="fa-solid fa-angle-right"></i></p>
                </div>
              </div>
              <i className="fa-solid fa-xmark" style={{ position: 'absolute', top: '5px', right: 0, marginRight: '5px' }}></i>
            </div>
            <div className="card middle mt-3">
              <div className="card-body flex justify-between">
                <span className='text-gray-500 text-xl'>It seem that you don't have any active Gigs. Get selling!</span>
                <button className='btn btn-success'>Create a New Gig</button>
              </div>
            </div>
            <div className='card bottom mt-3'>
              {dsCongViecDaThue?.map((item, index) => {

                return <div className="row border-b-2 m-0 mb-3 flex py-2" key={index}>
                  <div className="col-4 py-2">
                    <img src={item?.congViec?.hinhAnh} alt="..." />
                  </div>
                  <div className="col-8">
                    <div className="card-body p-0">
                      <h5>{item?.congViec?.tenCongViec}</h5>
                      <p>{item?.congViec?.moTaNgan}</p>
                      <button className='btn btn-success mr-5 flex-end' onClick={() => navigate(`/detailJob/${item.congViec?.id}`)}>View Detail</button>
                      <button className='btn btn-danger flex-end' onClick={() => {
                        //Gọi action xoá
                        if (window.confirm('Bạn có chắc muốn xoá công việc ' + item.id)) {
                          //Gọi action
                          dispatch(XoaCongViecAction(item.id));
                        }
                      }}>Delete</button>
                    </div>
                  </div>
                </div>
              })}


            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={() => setshowModal(false)}>
        <Modal.Header style={{ justifyContent: 'center' }}>
          <Modal.Title >
            <span className='text-center'>Cập nhật thông tin</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormEditUser setshowModal={setshowModal} />
        </Modal.Body>
      </Modal>
    </div>
  )
}
