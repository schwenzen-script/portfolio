import React, { useEffect } from 'react';

import { Row, Col, SectionTitle, Skill, Container } from '../../components';

import { skillsContent } from '../../skillsContent';

import $ from 'jquery';

const Skills = ({text}) => {
    useEffect(() => {
        $(window).scroll(function() {
            if ($(".about-skills__container").length !== 0) {
                var top_of_element = $(".about-skills__container").offset().top;
                var bottom_of_element = $(".about-skills__container").offset().top + $(".about-skills__container").outerHeight();
                var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                var top_of_screen = $(window).scrollTop();

                if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                    $(".section-title")[1].classList.add("rightIn");

                    const skills = $(".skill");

                    for (let i = 0; i < skills.length; i++) {
                        (function(ind) {
                            setTimeout(function(){skills[i].classList.add("bounceIn");}, 500 + (200 * ind));
                        })(i);
                    }
                }
            }
        });
    });

    return (
        <div className="about-skills">
            <Container>
                <Row>
                    <Col size="col-12 d-flex justify-content-center">
                        <SectionTitle
                            text={text.title}
                            animation="right-title"
                        />
                    </Col>
                </Row>

                <Row extra="d-flex justify-content-center">
                    <Col size="col-12 col-md-10 about-skills__container">
                        {
                            Object.keys(skillsContent).map((skill, index) => {
                                return <Skill title={skillsContent[skill].title} subtitle={skillsContent[skill].subtitle} img={skillsContent[skill].img} key={index} />
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Skills;