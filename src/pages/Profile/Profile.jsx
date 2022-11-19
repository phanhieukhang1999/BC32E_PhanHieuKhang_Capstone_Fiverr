import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getUserIdAction } from '../../redux/actions/NguoiDungActions'
import { Modal } from "react-bootstrap";
import FormEditUser from './FormEditUser/FormEditUser';



export default function Profile() {
  const { userId } = useSelector(state => state.NguoiDungReducers)
  console.log("userId: ", userId);
  // const { userLogin } = useSelector(state => state.AuthReducers)
  const { profile, idProfile } = useParams()
  console.log("idProfile: ", idProfile);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserIdAction(idProfile))
  }, [])
  const [showModal, setshowModal] = useState(false);

  return (
    <div className='py-36'>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card card-top">
              <div className='avatar text-center items-center mx-auto mt-3'>

                <div
                  role="button"
                  className="upload-img d-none d-lg-block"

                >
                  {/* <div className="bg-svg">{cameraImg}</div> */}
                  <div style={{ width: 80, height: 80, display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="text-2xl rounded-full bg-gray-400 text-center">
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
                  <i class="fa-solid fa-pencil"></i>
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
                  <p>HTML</p>
                </div>
                <hr />
                <div className='education p-2'>
                  <div className='flex justify-between'>
                    <h5>Education</h5>
                    <b>Edit</b>
                  </div>
                  <p>STU</p>
                </div>
                <hr />
                <div className='certification p-2'>
                  <div className='flex justify-between'>
                    <h5>Certification</h5>
                    <b className='text-blue-500' onClick={() => setshowModal(true)} role="button">Edit</b>
                  </div>
                  <p>CyberSoft Acdecamy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={() => setshowModal(false)}>
        <Modal.Header style={{justifyContent:'center'}}>
          <Modal.Title >
            <span className='text-center'>Cập nhật thông tin</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormEditUser setshowModal={setshowModal}/>
        </Modal.Body>
      </Modal>
    </div>
  )
}
