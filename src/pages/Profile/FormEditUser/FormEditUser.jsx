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
import { Button } from 'react-bootstrap';
const { Option } = Select;
const formItemLayout = {
    labelCol: { xs: { span: 10 }, sm: { span: 9 } },
    wrapperCol: { xs: { span: 10 }, sm: { span: 8 } },
};

export default function FormEditUser({ setshowModal }) {
    // const { userLogin } = useSelector(state => state.AuthReducers)
    const { userId } = useSelector(state => state.NguoiDungReducers)
    console.log("userId: ", userId);
    const dispatch = useDispatch()
    const { profile, idProfile } = useParams()


    const [form] = Form.useForm();
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    }


    useEffect(() => {
        dispatch(getUserIdAction(idProfile))
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: userId?.name || '',
            email: userId?.email || '',
            phone: userId?.phone || '',
            birthday: moment(userId?.birthday).format("DD/MM/YYYY") || '',
            skill: userId?.skill || '',
            certification: userId?.certification || '',

        },
        onSubmit: values => {
            

            console.log("values: ", values);
            dispatch(putUserIdAction(values))
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
    return (
        <>
            <Form
                onSubmit={formik.handleSubmit}

                {...formItemLayout}
                form={form}
                // onFinish={onFinish}
                // initialValues={{
                //     name: userId?.name,
                //     email: userId?.email,
                //     phone: userId?.phone,
                //     skill: userId?.skill,
                //     certification: userId?.certification,
                //     birthday: moment(userId?.birthday),
                // }}
                scrollToFirstError
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

                <Form.Item label="Skill" >
                    <Select name="skill" mode="multiple" placeholder="Select your skills" value={formik.values.skill} onChange={handleChangeSkill}>
                        
                        <Option value="front-end">Front-end Developer</Option>
                        <Option value="back-end">Back-end Developer</Option>
                        <Option value="fullstack">Fullstack</Option>
                        <Option value="reactjs">React Js</Option>
                        <Option value="nodejs">Node Js</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Certification">
                    <Select name="certification" mode="multiple" placeholder="Select your certification" value={formik.values.certification} onChange={handleChangeCertification}>
                        <Option value="cybersoft">CyberSoft Academy</Option>
                        <Option value="aws">AWS</Option>
                    </Select>
                </Form.Item>
                <Form.Item className="text-right">
                    <button
                        onClick={() => setshowModal(false)}

                        className="btn btn-primary  mr-3"
                    >
                        Close
                    </button>

                    <button type='submit' className="btn btn-success" onClick={() => {
                        // console.log()
                    }}>
                        Update
                    </button>
                </Form.Item>
                {/* <div className="text-center">
                <button
                    onClick={() => setshowModal(false)}

                    className="btn btn-outline-danger mr-3"
                >
                    Close
                </button>

                <button type='submit' className="btn btn-outline-success" onClick={() => {
                    // console.log()
                }}>

                    Update
                </button>
            </div> */}
            </Form>
        </>
    )
}
