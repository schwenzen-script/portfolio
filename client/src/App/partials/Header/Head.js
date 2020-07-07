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
                <Row extra="">
                    <Col size="d-inline">
                        <HeadTitle 
                            weight="bold-title"
                            text={text.heavy}
                        />
                        <HeadTitle 
                            weight="light-title"
                            text={text.light}
                        />

                        <Col size="d-flex justify-content-end">
                            <MoreButton
                                text={button.text}
                                link={button.link}
                            />
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Head;