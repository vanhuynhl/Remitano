import React from 'react';
import { Col, Row } from 'antd';
import { HomeTwoTone } from '@ant-design/icons';
import { Space, Typography, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoginData, Login } from '../../features/Login/LoginSlice'

const CustomHeader = () => {
    const data = useSelector(selectLoginData)
    const dispatch = useDispatch()
    console.log('Data in Reducer')
    console.log(data)
    return (
        <>
            <Row>
                <Col span={8}>
                    <Space>
                        <HomeTwoTone style={{fontSize:"40px", paddingTop:"9px"}}/>
                        <Typography>
                            <h1 style={{color:"#D3D3D3", paddingTop:"9px"}}>Funny Movies</h1>
                        </Typography>
                    </Space>

                </Col>
                <Col span={8} offset={8}>
                    <Space>
                        <Input placeholder="Your Email" />
                        <Input.Password placeholder="Your password" />
                        <Button
                            type="primary"
                            shape="round"
                            onClick={() => dispatch(Login()) }
                        >
                            Login
                        </Button>
                        <Button type="dashed" shape="round" >
                            Register
                        </Button>
                    </Space>
                </Col>
            </Row>
        </>
    );
};

export default CustomHeader;
