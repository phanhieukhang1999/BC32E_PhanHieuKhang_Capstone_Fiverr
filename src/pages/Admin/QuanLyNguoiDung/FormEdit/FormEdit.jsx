import React, { useEffect, useState } from 'react'
import {
    DatePicker,
    Form,
    Input,
    Select,
} from "antd";
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { getUserIdAction, putUserIdAction } from '../../../../redux/actions/NguoiDungActions';
import { useParams } from 'react-router-dom';
const { Option } = Select;
const formItemLayout = {
    labelCol: { xs: { span: 10 }, sm: { span: 9 } },
    wrapperCol: { xs: { span: 10 }, sm: { span: 8 } },
};

export default function FormEdit({ setshowModalEdit }) {
    let userAdmin = JSON.parse(localStorage.getItem("userAdmin"));

    console.log("userAdmin: ", userAdmin);

    const dispatch = useDispatch()
    const { profile, idProfile } = useParams()

    const [form] = Form.useForm()
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    }

    useEffect(() => {
        // lấy thông tin user
        // dispatch(getUserIdAction(idProfile))
    }, [])


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: userAdmin?.id,
            name: userAdmin?.name,
            email: userAdmin?.email,
            phone: userAdmin?.phone,
            password: userAdmin?.password,
            birthday: moment(userAdmin?.birthday).format("DD/MM/YYYY"),
            gender: userAdmin?.gender,
            role: userAdmin?.role,
            skill: userAdmin?.skill,
            certification: userAdmin?.certification,

        },
        onSubmit: (values) => {
            console.log("values: ", values);

            dispatch(putUserIdAction(values))
        }

    })

    const handleChangeRole = (role) => {
        formik.setFieldValue('role', role);

    }


    return (

        <Form
            onFinish={formik.handleSubmit}

            {...formItemLayout}
            // form={form}
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
                <button type='button'

                    onClick={() => setshowModalEdit(false)}
                    className="btn btn-primary  mr-3"
                >
                    Hủy
                </button>

                <button type='submit' className="btn btn-success" onClick={() => {
                    // dispatch(postUserAction())

                }}>
                    Cập nhật
                </button>
            </Form.Item>

        </Form>

    )
}

