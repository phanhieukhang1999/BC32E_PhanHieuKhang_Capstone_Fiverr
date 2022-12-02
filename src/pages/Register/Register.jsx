import React, { useEffect } from 'react'
import { Form, Input, Select, DatePicker } from "antd";

import { Link, useNavigate } from 'react-router-dom'
import '../Login/Login.scss'
import './Register.scss'
import { useFormik } from 'formik';
import moment from 'moment';
import FormEditUser from '../Profile/FormEditUser/FormEditUser';
import { useDispatch, useSelector } from 'react-redux';
import { dangKyAction } from '../../redux/actions/AuthActions';


const { Option } = Select;
const formItemLayout = {
  labelCol: { xs: { span: 10 }, sm: { span: 9 } },
  wrapperCol: { xs: { span: 10 }, sm: { span: 8 } },
};

export default function Register() {
  const navigate = useNavigate()
  const { userRegister } = useSelector(state => state.AuthReducers)
  console.log("userRegister: ", userRegister);
  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
      birthday: '',
      gender: '',
      skill: '',
      certification: '',

    },

    onSubmit: values => {

      console.log('values', values)
      dispatch(dangKyAction(values))

    }
  })
  const handleChangeSkill = (skill) => {
    // let skill = value;
    formik.setFieldValue('skill', skill);

  }
  const handleChangeCertification = (certification) => {
    // let skill = value;
    formik.setFieldValue('certification', certification);

  }
  const handleChangeGender = (gender) => {
    // let skill = value;
    formik.setFieldValue('gender', gender);

  }

  const handleChangeDatePicker = (value) => {
    // console.log('datepickerchange',);
    let birthday = moment(value);
    formik.setFieldValue('birthday', birthday);

}
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Register selection:bg-green-500 selection:text-white pb-0 py-36">
      <div className=" bg-green-100 flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="w-1/2 register-width bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
            <div className="relative h-32 bg-green-500 rounded-bl-4xl">
              <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fillOpacity={1} d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
              </svg>
            </div>
            <div className="register-form px-10 pt-2 pb-8 bg-white rounded-tr-4xl">
              <h1 className="text-2xl text-center mb-5 font-semibold text-gray-900">Welcome back Fiverr !</h1>
              <>
                <Form
                  onFinish={formik.handleSubmit}

                  {...formItemLayout}
                  form={form}
                  // name='formEditUser'

                  // scrollToFirstError
                  size="large"
                  autoComplete='off'
                >
                  <Form.Item
                    name="name"
                    label="Tên"
                    rules={[
                      {
                        required: true,
                        message: "Tên không được bỏ trống !",
                      },
                      { whitespace: true }, // khoảng trắng
                      { min: 3, message: 'Tên từ 3 ký tự trở lên !' },
                    ]}
                    hasFeedback
                  >
                    <Input name="name" value={formik.values.name} onChange={formik.handleChange} placeholder='Nhập tên' />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      {
                        required: true,
                        message: "Email không được bỏ trống !",
                      },
                      { type: 'email', message: 'Email không đúng định dạng !' },
                    ]}
                    hasFeedback
                  >
                    <Input name="email" value={formik.values.email} onChange={formik.handleChange} placeholder='Nhập email' />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    label="Mật khẩu"
                    rules={[
                      {
                        required: true,
                        message: "Mật khẩu không được bỏ trống !",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password name="password" type='password' value={formik.values.password} onChange={formik.handleChange} placeholder='Nhập mật khẩu' />
                  </Form.Item>
                  <Form.Item
                    name="confirm_password"
                    label="Nhập lại mật khẩu"
                    dependencies={['password']}
                    rules={[
                      {
                        required: true,
                        message: "Mật khẩu không được bỏ trống !",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve()
                          }
                          return Promise.reject('Mật khẩu không khớp !')
                        }
                      })
                    ]}
                    hasFeedback
                  >
                    <Input.Password name="confirm_password" type='password' value={formik.values.password} onChange={formik.handleChange} placeholder='Nhập mật khẩu' />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    label="Số điện thoại"
                    rules={[
                      {
                        required: true,
                        message: "Số điện thoại không được bỏ trống !",
                      },
                      {
                        message: "Số điện thoai không đúng đinh dạng !",
                        pattern: /(0|[1-9][0-9]*)$/,
                      },
                      { min: 10, message: 'Phải là 10 số !' },
                      { max: 10, message: 'Vượt quá 10 số !' },
                    ]}
                    hasFeedback
                  >
                    <Input style={{ width: "100%" }} name="phone" value={formik.values.phone} onChange={formik.handleChange} placeholder='Nhập số điện thoại' />
                  </Form.Item>

                  <Form.Item
                    label="Ngày sinh"
                    name='birthday'
                    rules={[
                      {
                        required: true,
                        message: "Chọn đúng ngày sinh của bạn !",
                      },
                    ]}
                    hasFeedback

                  >
                    <DatePicker name='birthday' format={"DD/MM/YYYY"}  value={formik.values.birthday} onChange={handleChangeDatePicker} placeholder='Nhập ngày sinh' />
                  </Form.Item>
                  <Form.Item label="Giới tính" name="gender" rules={[
                    {
                      required: true,
                      message: "Chọn giới tính !",
                    },
                  ]}
                    hasFeedback
                  >
                    <Select name="gender" width='200px' placeholder='Chọn giới tính' value={formik.values.gender} onChange={handleChangeGender}>
                      <Option value={true}>Nam</Option>
                      <Option value={false}>Nữ</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Skill" name="skill" rules={[
                    {
                      required: true,
                      message: "Chọn skill của bạn !",
                    },
                  ]}
                    hasFeedback
                  >
                    <Select mode="multiple" name="skill" placeholder="Chọn skill của bạn" value={formik.values.skill} onChange={handleChangeSkill}>
                      <Option value="Front-end Developer">Front-end Developer</Option>
                      <Option value="Back-end Developer ">Back-end Developer</Option>
                      <Option value="Fullstack">Fullstack</Option>
                      <Option value="React Js">React Js</Option>
                      <Option value="Node Js">Node Js</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Certification" name="certification" requiredMark='optional'>
                    <Select showSearch name="certification" mode="multiple" placeholder="Chọn certification của bạn" value={formik.values.certification} onChange={handleChangeCertification}>
                      <Option value="CyberSoft Academy">CyberSoft Academy</Option>
                      <Option value="AWS">AWS</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item className="text-center">
                    <button className="bg-green-500 text-gray-100 text-xl p-2 w-96 rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-green-600
                          shadow-lg" >
                      Đăng ký
                    </button>
                  </Form.Item>

                </Form>
                {/* <Form
                  onFinish={formik.handleSubmit}

                  {...formItemLayout}
                  // form={form}
                  // name='formEditUser'

                  // scrollToFirstError
                  size="large"
                >
                  <Form.Item

                    label="Name"

                  >
                    <Input name="name" value={formik.values.name} onChange={formik.handleChange} />
                  </Form.Item>
                  <Form.Item

                    label="Email"

                  >
                    <Input name="email" value={formik.values.email} onChange={formik.handleChange} />
                  </Form.Item>

                  <Form.Item

                    label="Số điện thoại"

                  >
                    <Input style={{ width: "100%" }} name="phone" value={formik.values.phone} onChange={formik.handleChange} />
                  </Form.Item>

                  <Form.Item
                    label="Ngày sinh"


                  >
                    <DatePicker name='birthday' format={"DD/MM/YYYY"} value={moment(formik.values.birthday)} />
                  </Form.Item>
                  <Form.Item label="Gender">
                    <Select name="gender" placeholder="Select your certification" value={formik.values.gender} onChange={handleChangeGender}>
                      <Option value={true}>Male</Option>
                      <Option value={false}>Female</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Skill" >
                    <Select name="skill" placeholder="Select your skills" value={formik.values.skill} onChange={handleChangeSkill}>
                      <Option value="Front-end Developer">Front-end Developer</Option>
                      <Option value="Back-end Developer ">Back-end Developer</Option>
                      <Option value="Fullstack">Fullstack</Option>
                      <Option value="React Js">React Js</Option>
                      <Option value="Node Js">Node Js</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Certification">
                    <Select name="certification" placeholder="Select your certification" value={formik.values.certification} onChange={handleChangeCertification}>
                      <Option value="CyberSoft Academy">CyberSoft Academy</Option>
                      <Option value="AWS">AWS</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item className="text-right">


                    <button className="bg-green-500 text-gray-100 text-xl p-2 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-green-600
                          shadow-lg" >
                      Đăng nhập
                    </button>
                  </Form.Item>

                </Form> */}
              </>
              <div className="text-center mt-3">
                Bạn đã có tài khoản ?{" "}
                <span className="link-primary" >
                  <Link to='/login'>Đăng nhập</Link>
                </span>
              </div>
              <a href="#" className="mt-4 block text-sm text-center font-medium text-rose-600 hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500">Quên mật khẩu ? </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
