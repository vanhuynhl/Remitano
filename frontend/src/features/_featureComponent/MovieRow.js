import React from 'react';
import { Col, Row, Space, Typography } from 'antd';

export const MovieRow = (row) => {
    const { Title, Paragraph, Text, Link } = Typography;
    const maxHeight = 315
    return (
        <>
            <Row style={{marginTop: '7px'}} key={row.data.videoId}>
                <Col sm={8} offset={2}>
                    <iframe width="560" height={maxHeight} src={`https://www.youtube.com/embed/${row.data.videoId}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </Col>
                <Col sm={12} offset={0} style={{maxHeight: maxHeight, textOverflow: 'ellipsis', overflow: 'hidden'}}>
                    <Space direction='vertical' >
                        <Typography>
                            <Title>{row.data.title}</Title>
                            <Paragraph>
                                <h5><Text type="success">Share by: {row.data.shareBy}</Text></h5>
                                {row.data.description}
                            </Paragraph>
                        </Typography>
                    </Space>
                </Col>
            </Row>
        </>
    );
};
