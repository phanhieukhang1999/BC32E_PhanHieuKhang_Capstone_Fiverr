import React, { useEffect, useState } from 'react'
import {
    DatePicker,
    Form,
    Input,
    Select,
} from "antd";
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getUserIdAction, postUserAction, putUserIdAction } from '../../../redux/actions/NguoiDungActions';
import { useParams } from 'react-router-dom';
import { nguoiDungServices } from '../../../services/nguoiDungServices';
import { DANG_NHAP_ACTION } from '../../../redux/types/AuthType';
import { dangNhapAction } from '../../../redux/actions/AuthActions';
import { useFormik } from 'formik';
import { Formik } from 'formik';
import { Button } from 'react-bootstrap';
const { Option } = Select;
const formItemLayout = {
    labelCol: { xs: { span: 10 }, sm: { span: 9 } },
    wrapperCol: { xs: { span: 10 }, sm: { span: 8 } },
};

export default function FormAddUser({ setshowModal }) {
    // const { userLogin } = useSelector(state => state.AuthReducers)
    const { userId } = useSelector(state => state.NguoiDungReducers)
    console.log("userId: ", userId);

    const dispatch = useDispatch()

    const [form] = Form.useForm()
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    }




    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: userId?.id,
            name: userId?.name,
            email: userId?.email,
            phone: userId?.phone,
            password: userId?.password,
            birthday: moment(userId?.birthday).format("DD/MM/YYYY"),
            gender: userId?.gender,
            role: userId?.role,
            skill: userId?.skill,
            certification: userId?.certification,

        },
        onSubmit: (values) => {
            console.log("values: ", values);

            dispatch(postUserAction(values))
        }

    })

    const handleChangeRole = (role) => {
        formik.setFieldValue('role', role);

    }


    return (

        <Form
            onFinish={formik.handleSubmit}

            {...formItemLayout}
            form={form}
            // name='formEditUser'

            // scrollToFirstError
            size="large"
        >
            <Form.Item

                label="Tên"

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

                label="Mật khẩu"

            >
                <Input style={{ width: "100%" }} name="password" value={formik.values.password} onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Vai trò">
                <Select name="role" placeholder="Select your role" value={formik.values.role} onChange={handleChangeRole}>
                    <Option value="ADMIN">ADMIN</Option>
                    <Option value="USER">USER</Option>
                </Select>
            </Form.Item>

            <Form.Item className="text-right">
                <button
                    onClick={() => setshowModal(false)}

                    className="btn btn-primary  mr-3"
                >
                    Hủy
                </button>

                <button type='submit' className="btn btn-success" onClick={() => {
                    // dispatch(postUserAction())

                }}>
                    Thêm
                </button>
            </Form.Item>

        </Form>

    )
}
