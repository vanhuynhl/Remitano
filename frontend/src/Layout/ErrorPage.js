import React from 'react';
import { Col, Row } from 'antd';
import { v4 as uuidv4 } from 'uuid';

const ErrorPage = () => {
    return (
        <>
            <Row>
                <Col span={18} offset={3}>
                    <h1>
                        Something went wrong while performing your request. Please contact administrator.
                    </h1>
                    <h1>
                        TraceID: {uuidv4()}
                    </h1>
                </Col>
            </Row>
        </>

    );
};

export default ErrorPage;
