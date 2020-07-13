import React from 'react';

import { Row, Col } from '../../components';

import Github from '../../static/icons/githubv2.png';
import Linkedin from '../../static/icons/linkedinv2.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <Row extra="justify-content-between">
                <Col size="col-12 col-md-6 footer__left">
                    <h4>
                        Jens Deryckere
                    </h4>

                    <p>
                        Feelin development <br/>
                        Student NMD
                    </p>

                    <div className="footer__left--ref">
                        <a href="/">
                            <img src={Github} alt="github" />
                        </a>

                        <a href="/">
                            <img src={Linkedin} alt="linkedin" />
                        </a>
                    </div>
                </Col>

                <Col size="col-12 col-lg-2 col-md-6 footer__right">
                    <h4>
                        Way to go
                    </h4>

                    <ul>
                        <li><NavLink to="/">Over mij</NavLink></li>
                        <li><NavLink to="/">Mijn werk</NavLink></li>
                        <li><NavLink to="/">Contact</NavLink></li>
                        <li><NavLink to="/">Privacy Policy</NavLink></li>
                    </ul>
                </Col>
            </Row>

            <Row>
                <Col size="col-12">
                    <p className="footer__copyright">
                         &#169; Copyrighted by Jens Deryckere
                    </p>
                </Col>
            </Row>
        </div>
    )
};

export default Footer;