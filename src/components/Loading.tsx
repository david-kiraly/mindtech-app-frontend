import React from 'react';
import { Badge, Col, Row } from 'react-bootstrap';

const Loading = () => {
    return (
        <Row>
            <Col className="d-flex justify-content-center mt-2">
                <h5>
                    <Badge bg="warning">Loading...</Badge>
                </h5>
            </Col>
        </Row>
    );
};

export default Loading;