import React from 'react';
import { Col, Row, Space } from 'antd';
import { HomeTwoTone } from '@ant-design/icons';

export const MovieRow = () => {
    return (
        <>
            <Row style={{marginTop: '7px'}}>
                <Col sm={8} offset={4}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xNRJwmlRBNU"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </Col>
                <Col sm={6} offset={0}>
                    <h1>ashdkashdkjasd</h1>
                </Col>
            </Row>
            <Row style={{marginTop: '7px'}}>
                <Col sm={8} offset={4}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xNRJwmlRBNU"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </Col>
                <Col sm={6} offset={0}>
                    <h1>ashdkashdkjasd</h1>
                </Col>
            </Row><Row style={{marginTop: '7px'}}>
            <Col sm={8} offset={4}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xNRJwmlRBNU"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </Col>
            <Col sm={6} offset={0}>
                <h1>ashdkashdkjasd</h1>
            </Col>
        </Row>

        </>
    );
};
