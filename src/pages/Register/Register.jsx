import React from 'react'
import { Form, Input, Select, DatePicker } from "antd";

import { Link } from 'react-router-dom'
import '../Login/Login.scss'
import { useFormik } from 'formik';


const { Option } = Select;
const formItemLayout = {
  labelCol: { xs: { span: 10 }, sm: { span: 9 } },
  wrapperCol: { xs: { span: 10 }, sm: { span: 8 } },
};

export default function Register() {
  const [form] = Form.useForm();
  const formik = useFormik({
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

    }
  })
  return (
    <form onSubmit={formik.handleSubmit} className="selection:bg-green-500 selection:text-white py-36">
      <div className=" bg-green-100 flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="w-96 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
            <div className="relative h-24 bg-green-500 rounded-bl-4xl">
              <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fillOpacity={1} d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
              </svg>
            </div>
            <div className="px-10 pt-2 pb-8 bg-white rounded-tr-4xl">
              <h1 className="text-2xl font-semibold text-gray-900">Welcome back Fiverr !</h1>
              <Form {...formItemLayout}
                form={form} className="mt-6" action method="POST">
                <Form.Item
                  name="name"
                  label="Name"

                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="E-mail"

                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Mật khẩu"

                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label="Số điện thoại"

                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Ngày sinh"


                >
                  <DatePicker name='birthday' format={"DD/MM/YYYY"} />
                </Form.Item>
                <Form.Item
                  name="gender"
                  label="Gender"

                >
                  <Select placeholder="select your gender">
                    <Option value={true}>Male</Option>
                    <Option value={false}>Female</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Skill" >
                  <Select name="skill" mode="multiple" placeholder="Select your skills" >

                    <Option value="front-end">Front-end Developer</Option>
                    <Option value="back-end">Back-end Developer</Option>
                    <Option value="fullstack">Fullstack</Option>
                    <Option value="reactjs">React Js</Option>
                    <Option value="nodejs">Node Js</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Certification">
                  <Select name="certification" mode="multiple" placeholder="Select your certification" >
                    <Option value="cybersoft">CyberSoft Academy</Option>
                    <Option value="aws">AWS</Option>
                  </Select>
                </Form.Item>
                <input type="sumbit" defaultValue="Sign in" className="mt-10 px-4 py-2 rounded bg-green-500 hover:bg-green-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-green-500 focus:ring-opacity-80 cursor-pointer" />
              </Form>
              <div className="text-center mt-3">
                Not registered yet?{" "}
                <span className="link-primary" >
                  <Link to='/login'>Sign Up</Link>
                </span>
              </div>
              <a href="#" className="mt-4 block text-sm text-center font-medium text-rose-600 hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500"> Forgot your password? </a>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
