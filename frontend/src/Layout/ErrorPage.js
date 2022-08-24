import React from 'react';
import { Result, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import history from '../Utils/customHistory'

const ErrorPage = () => {
    return (
        <>
            <Result
                status="500"
                title="500"
                subTitle={`Sorry, something went wrong. TraceID ${uuidv4()}`}
                extra={
                    <Button
                        type="primary"
                        onClick={(e) => {
                            e.preventDefault()
                            history.replace('/')
                        }
                    }>
                        Back Home
                    </Button>
                }
            />
        </>

    );
};

export default ErrorPage;
