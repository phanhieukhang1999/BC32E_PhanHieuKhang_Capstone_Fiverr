import React, { useEffect, useState } from 'react'
import {
    DatePicker,
    Form,
    Input,
    Select,
} from "antd";
import './FormEditUser.scss'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getUserIdAction, putUserIdAction } from '../../../redux/actions/NguoiDungActions';
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

export default function FormEditUser({ setshowModal }) {
    // const { userLogin } = useSelector(state => state.AuthReducers)
    const { userId } = useSelector(state => state.NguoiDungReducers)
    const dispatch = useDispatch()
    const { profile, idProfile } = useParams()

    const [form] = Form.useForm()
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    }


    useEffect(() => {
        // lấy thông tin user
        dispatch(getUserIdAction(idProfile))
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: userId?.id,
            name: userId?.name,
            email: userId?.email,
            phone: userId?.phone,
            birthday: moment(userId?.birthday),
            gender: userId?.gender,
            role: userId?.role,
            skill: userId?.skill,
            certification: userId?.certification,

        },
        onSubmit: (values) => {
            dispatch(putUserIdAction(values))
        }

    })
    const handleChangeDatePicker = (value) => {
        // console.log('datepickerchange',);
        let birthday = moment(value);
        formik.setFieldValue('birthday', birthday);

    }
    const handleChangeSkill = (skill) => {
        // let skill = value;
        formik.setFieldValue('skill', skill);

    }
    const handleChangeCertification = (certification) => {
        // let skill = value;
        formik.setFieldValue('certification', certification);

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
                label="Ngày sinh:"


            >
                <DatePicker name='birthday' format={"DD/MM/YYYY"} value={formik.values.birthday} onChange={handleChangeDatePicker} />
            </Form.Item>

            <Form.Item label="Skill" >
                <Select name="skill" mode="multiple" placeholder="Select your skills" value={formik.values.skill} onChange={handleChangeSkill}>

                    <Option value="Front-end Developer">Front-end Developer</Option>
                    <Option value="Back-end Developer ">Back-end Developer</Option>
                    <Option value="Fullstack">Fullstack</Option>
                    <Option value="React Js">React Js</Option>
                    <Option value="Node Js">Node Js</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Certification">
                <Select name="certification" mode="multiple" placeholder="Select your certification" value={formik.values.certification} onChange={handleChangeCertification}>
                    <Option value="CyberSoft Academy">CyberSoft Academy</Option>
                    <Option value="AWS">AWS</Option>
                </Select>
            </Form.Item>
            <Form.Item className="text-right">
                <button type='button'
                    onClick={() => setshowModal(false)}

                    className="btn btn-primary  mr-3"
                >
                    Close
                </button>

                <button type='submit' className="btn btn-success" onClick={() => {
                    dispatch(putUserIdAction(idProfile))

                }}>
                    Update
                </button>
            </Form.Item>

        </Form>

    )
}
