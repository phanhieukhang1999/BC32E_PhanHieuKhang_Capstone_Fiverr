import React from 'react'
import { Form, Input, DatePicker, Select } from "antd";

const { Option } = Select;

export default function FormEditUser({ setshowModal }) {
    const [form] = Form.useForm();

    return (
        <div>
            <Form

                // form={form}
                // name="updateInfoUser"
                // onFinish={onFinish}
                // initialValues={{
                //     name: infoUserLogin?.user?.name,
                //     phone: infoUserLogin?.user?.phone,
                //     skill: infoUserLogin?.user?.skill,
                //     certification: infoUserLogin?.user?.certification,
                //     birthday: moment(infoUserLogin?.user?.birthday),
                // }}
                scrollToFirstError
                size="large"
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your name!",
                            whitespace: true,
                        },
                        {
                            message: "Your name is invalid!",
                            type: "string",
                            pattern:
                                /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        { required: true, message: "Please input your phone number!" },
                        {
                            message: "Your phone number is invalid!",
                            pattern: /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
                        },
                    ]}
                >
                    <Input style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    label="Birthday"
                    name="birthday"
                    rules={[{ required: true, message: "Please select your birthday!" }]}
                >
                    <DatePicker format={"DD/MM/YYYY"} />
                </Form.Item>

                <Form.Item name="skill" label="Skill">
                    <Select placeholder="select your skills">
                        <Option value="LoL">LoL</Option>
                        <Option value="WEB">WEB</Option>
                        <Option value="DESIGN">DESIGN</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="certification" label="Certification">
                    <Select placeholder="select your certification">
                        <Option value="DIB">DIB</Option>
                        <Option value="PYNOW">PYNOW</Option>
                    </Select>
                </Form.Item>
                <div className="text-center">
                    <button
                        onClick={() => setshowModal(false)}
                        type="button"
                        className="btn btn-outline-danger mr-3"
                    >
                        Close
                    </button>

                    <button type="submit" className="btn btn-outline-success">
                        Update
                    </button>
                </div>
            </Form>
        </div>
    )
}
