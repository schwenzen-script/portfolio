import React, { useEffect } from 'react';

import { SectionTitle, Row, Col } from '../../components';

import $ from 'jquery';

import Img from '../../static/images/jens.png';

const Info = ({text}) => {
    useEffect(() => {
        $(window).scroll(function() {
            var top_of_element = $(".about-info__content").offset().top;
            var bottom_of_element = $(".about-info__content").offset().top + $(".about-info__content").outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();
        
            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                $(".about-info__content").addClass("leftIn")
            }
        });
    });

    return (
        <div className="about-info">
            <Row>
                <Col size="col-md-6 col-12">
                    <div className="about-info__content">
                        <SectionTitle
                            text={text.title}
                        />

                        <p className="about-info__content--subtitle">
                            {text.subtitle}
                        </p>

                        <p className="about-info__content--content">
                            {text.content}
                        </p>
                    </div>
                </Col>

                <Col size="col-md-6 col-12 d-flex justify-content-center align-items-center">
                    <div className="about-info__img">
                        <img src={Img} alt="jens-deryckere" />
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default Info;