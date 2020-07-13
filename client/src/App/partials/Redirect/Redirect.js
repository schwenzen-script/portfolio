import React from 'react';

import { Container, Row, Col } from '../../components';
import { NavLink } from 'react-router-dom';

const Redirect = ({text}) => {
    return (
        <div className="redirect-section">
            <Container>
                <Row>
                    <Col size="col-12 d-flex justify-content-center">
                        <h2>
                            {text.title}
                        </h2>
                    </Col>

                    <Col size="col-12 d-flex justify-content-center">
                        <h4>
                            {text.subtitle}
                        </h4>
                    </Col>

                    <Col size="col-12 d-flex justify-content-center">
                        <NavLink to={text.link} className="redirect-section__ref">
                            En dat kan hier!
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Redirect;