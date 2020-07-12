import React from 'react';

import { Row, Col, SectionTitle, Skill } from '../../components';

import { skillsContent } from '../../skillsContent';

const Skills = ({text}) => {
    return (
        <div className="about-skills">
            <Row>
                <Col size="col-12 d-flex justify-content-center">
                    <SectionTitle
                        text={text.title}
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
        </div>
    )
};

export default Skills;