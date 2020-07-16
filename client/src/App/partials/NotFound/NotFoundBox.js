import React from 'react';
import { Row, Col, Container } from '../../components';
import { NavLink } from 'react-router-dom';

const NotFoundBox = ({info}) => {
    return (
        <Container>
            <Row extra="d-flex justify-content-center">
                <Col size="col-12 col-md-8">
                    <div className="notfoundbox">
                        <h1>{info.title}</h1>
                        <p>{info.content}</p>

                        <div className="notfoundbox__button">
                            <NavLink to="/">{info.link}</NavLink>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default NotFoundBox;