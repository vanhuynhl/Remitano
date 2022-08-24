import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { HomeTwoTone, VideoCameraAddOutlined } from '@ant-design/icons';
import { Space, Typography, Layout, Button } from 'antd';
import  history from '../../Utils/customHistory';
import LoginComponent from '../../features/Login/LoginComponent'
import {GetUserInfo, selectEmail} from '../../features/User/UserSlice'
import { logoutApi } from '../../features/Login/LoginApi'

const CustomHeader = () => {
    const userEmail = useSelector(selectEmail)
    const [email, setEmail] = useState(userEmail);
    const dispatch = useDispatch()

    const logout = async (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        await logoutApi()
        window.location.href = '/'
    }

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
                <Col sm={4} offset={1}>
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
                        <Col sm={18} style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Space>
                                <h2 style={{color: '#D3D3D3', paddingTop: '4px'}}>Welcome {userEmail}</h2>
                                <Button type="primary"
                                        shape='round'
                                        size='large'
                                        onClick={() => history.replace('/movie')}
                                        icon={<VideoCameraAddOutlined />}>
                                    <b style={{paddingLeft: '10px'}}>Share Movie</b>
                                </Button>
                                <Button type="dashed"
                                        danger
                                        size='large'
                                        shape='round'
                                        onClick={async (e) => await logout(e)}>
                                    Logout
                                </Button>
                            </Space>
                        </Col>
                    :   <Col sm={10} offset={9}>
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
