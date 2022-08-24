import React, { useEffect, useState } from 'react';
import { Button, Form, Input, message, Space, Row, Col, Tooltip } from 'antd'
import { InfoCircleTwoTone  } from '@ant-design/icons'
import { getYoutubeInfoApi, sendYoutubeInfoApi } from './MovieApi'
import {GetUserInfo, selectEmail} from "../User/UserSlice";
import { useDispatch, useSelector } from "react-redux";

const MoviePage = () => {
    const [form] = Form.useForm();
    const userEmail = useSelector(selectEmail)
    const [email, setEmail] = useState(userEmail);
    const dispatch = useDispatch()

    useEffect(() => {
        setEmail(userEmail)
        const token = localStorage.getItem('token')
        if(!token){
            window.location.href = '/'
            return
        }

        if(!userEmail){
            dispatch(GetUserInfo())
        }

    }, [dispatch, userEmail]);

    const onFinishFailed = (abc) => {
        message.error('Submit failed!');
    };

    const onFill = async (e, form) => {
        e.preventDefault()
        const url = form.getFieldValue('url')
        if(!url){
            return
        }
        if(!url.includes('youtube.com/watch?v=')){
            message.error('The url format is not correct. Please read instruction and double check your url!');
            return;
        }

        const videoId = url.match(/youtube\.com\/watch\?v=(.*)/)[1];
        if(!videoId){
            message.error('Cannot find video ID. Please double check your url or contact customer service');
        }

        const data = await getYoutubeInfoApi(videoId)
        if(!data){
            message.error('error when sending request to youtube')
            return
        }

        const isSuccesful = await sendYoutubeInfoApi(data)
        if(!isSuccesful){
            message.error('Error when sending request to Funny Movies Server. Please contact Administrator')
            return
        }

        message.success('Share video successfully!')
    };

    return (
        <>
            <Row>
                <Col sm={2} offset={8}>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="url"
                            label="URL"
                            style={{marginBottom: '9px'}}
                            rules={[{ required: true, message: 'Please input your url' }]}
                        >
                            <Input placeholder="Input your Youtube url here" style={{minWidth: '50vh'}}/>
                        </Form.Item>
                        <Form.Item>
                            <Space direction="vertical">
                                    <Tooltip title="Please copy and paste Youtube url with the format like this : https://www.youtube.com/watch?v=UAs5bmu3WoY"
                                             color={'#2db7f5'} placement="right">
                                        <InfoCircleTwoTone style={{fontSize: '20px'}}/>
                                    </Tooltip>
                                <Button type="primary" htmlType="submit"
                                        size='large' style={{minWidth: '50vh'}}
                                        onClick={async (e) => await onFill(e,form)}
                                >
                                    Share Video
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default MoviePage;
