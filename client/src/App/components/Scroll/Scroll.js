import React from 'react';
import { Row, Col } from '../Layout';

const Scroll = () => {
    return (
        <Row>
            <Col size="col-12 d-flex justify-content-center">
                <div className="scroll">
                    <div className="scroll__border">
                        <div className="scroll__border--content"></div>
                    </div>
                </div>
            </Col>

            <Col size="col-12">
                <p className="scroll-text">Scroll down</p>
            </Col>
        </Row>
    )
};

export default Scroll;