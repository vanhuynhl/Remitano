import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { HomeTwoTone } from '@ant-design/icons';
import { Space, Typography, Layout, Button } from 'antd';
import  history from '../../Utils/customHistory';
import LoginComponent from '../../features/Login/LoginComponent'
import {GetUserInfo, selectEmail} from '../../features/User/UserSlice'
import {useDispatch, useSelector} from "react-redux";

const CustomHeader = () => {
    const userEmail = useSelector(selectEmail)
    const [email, setEmail] = useState(userEmail);
    const dispatch = useDispatch()

    useEffect(() => {
        setEmail(userEmail)
        const token = localStorage.getItem('token')
        const isErrorPage = window.location.href.includes('error')
        if(token && !userEmail && !isErrorPage){
            dispatch(GetUserInfo())
        }

    }, [dispatch, userEmail]);

    return (
        <Layout.Header style={{height: '72px'}}>
            <Row>
                <Col sm={8}>
                    <Space>
                        <HomeTwoTone
                            style={{fontSize:"40px", paddingTop:"12px"}}
                            onClick={() => history.replace('/')}
                        />
                        <Typography>
                            <h1 style={{color:"#D3D3D3", paddingTop:"12px"}}>Funny Movies</h1>
                        </Typography>
                    </Space>

                </Col>
                {
                    userEmail
                    ?
                        <Col sm={5} offset={11}>
                            <Space>
                                <h2 style={{color: '#D3D3D3'}}>Welcome {userEmail}</h2>
                                <Button type="dashed"
                                        danger
                                        shape='round'>
                                    Logout
                                </Button>
                            </Space>
                        </Col>
                    :   <Col sm={10} offset={5}>
                            <Space>
                                <LoginComponent />
                            </Space>
                        </Col>
                }
            </Row>
        </Layout.Header>
    );
};

export default CustomHeader;
