import React, { useEffect } from 'react';
import $ from 'jquery';

import { Row, Col, SectionTitle, Container } from '../../components';

import Phone from '../../static/icons/phone.png';
import Mail from '../../static/icons/mail.png';

const Contact = ({info}) => {
    useEffect(() => {
        $(window).scroll(function() {
            if ($(".contact-box").length !== 0) {
                var top_of_element = $(".contact-box").offset().top;
                var bottom_of_element = $(".contact-box").offset().top + $(".contact-box").outerHeight();
                var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                var top_of_screen = $(window).scrollTop();
            
                if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                    $(".section-title")[0].classList.add("leftIn");
                };
            }
        });
    });

    return (
        <Container>
            <Row extra="d-flex justify-content-center">
                <Col size="col-12 d-flex justify-content-center">
                    <SectionTitle
                        text="Contacteer mij"
                        animation="left-title"
                    />
                </Col>

                <Col size="col-md-8 col-12 d-flex justify-content-center">
                    <div className="contact-box">
                        <h1>Nu weet je mij te vinden</h1>
                        <div className="contact-box__links">
                            <div className="contact-box__links--ref">
                                <img src={Mail} alt="e-mail" />
                                <p>
                                    {info.email}
                                </p>
                            </div>
                            <div className="contact-box__links--ref">
                                <img src={Phone} alt="phone" />
                                <p>
                                    {info.gsm}
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default Contact;