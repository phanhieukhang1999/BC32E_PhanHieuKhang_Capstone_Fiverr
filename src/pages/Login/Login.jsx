import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { dangNhapAction } from '../../redux/actions/AuthActions'
import './Login.scss'
export default function Login(props) {
  const dispatch = useDispatch()
  const { userLogin } = useSelector(state => state.AuthReducers)
  console.log("userLogin: ", userLogin);
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: values => {

      dispatch(dangNhapAction(values))

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
              <div className="mt-6" >
                <div className="relative">
                  <input onChange={formik.handleChange} name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="Nhập email của bạn" />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
                </div>
                <div className="mt-10 relative">
                  <input onChange={formik.handleChange} name="password" type='password' className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="Nhập mật khẩu của bạn" />
                  <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Mật khẩu</label>
                </div>
                <div className="mt-10">
                  <button className="bg-green-500 text-gray-100 text-xl p-2 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-green-600
                          shadow-lg" >
                    Đăng nhập
                  </button>
                </div>
              </div>
              <div className="text-center mt-3">
                Not registered yet?{" "}
                <span className="link-primary" >
                  <Link to='/register'>Sign Up</Link>
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
