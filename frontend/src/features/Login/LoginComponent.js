import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { selectLoginData,Login } from "./LoginSlice";
import history from "../../Utils/customHistory";

const LoginComponent = () => {
    const [form] = Form.useForm();
    const loginData = useSelector(selectLoginData)
    const dispatch = useDispatch()

    return (
        <>
            <Form form={form} name="horizontal_login" layout="inline">
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item shouldUpdate>
                    {() => (
                        <Button
                            type="primary"
                            htmlType="submit"
                            shape='round'
                            loading={loginData.isLoading}
                            onClick={(e) => {
                                e.preventDefault()
                                if(!form.getFieldValue('email') || !form.getFieldValue('password')){
                                    return
                                }

                                dispatch(Login(form))
                                history.replace('/')
                            }}
                        >
                            Log in
                        </Button>
                    )}
                </Form.Item>
                <Form.Item shouldUpdate>
                    {() => (
                        <Button
                            type="dashed"
                            shape='round'
                            onClick={(e) => {
                                e.preventDefault()
                                history.replace('/register')
                            }}
                        >
                            Register
                        </Button>
                    )}
                </Form.Item>
            </Form>
        </>
    );
};

export default LoginComponent;
