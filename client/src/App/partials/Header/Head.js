import React from 'react';

import {
    Col,
    Container,
    Row,
    HeadTitle,
    MoreButton,
} from '../../components';

const Head = ({size, text, button}) => {
    return (
        <div className={`head ${size}`}>
            <Container>
                <Row extra="d-md-inline-block d-flex justify-content-center">
                    <Col size="d-inline">
                        <span>
                            <HeadTitle 
                                weight="bold-title"
                                text={text.heavy}
                                extra="text-md-left text-center"
                            />
                            <HeadTitle 
                                weight="light-title"
                                text={text.light}
                                extra="text-md-left text-center"
                            />

                            <Col size="d-flex justify-content-md-end justify-content-center">
                                <MoreButton
                                    text={button.text}
                                    link={button.link}
                                />
                            </Col>
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Head;