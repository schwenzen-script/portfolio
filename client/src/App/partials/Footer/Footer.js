import React from 'react';

import { Row, Col } from '../../components';

import Github from '../../static/icons/githubv2.png';
import Linkedin from '../../static/icons/linkedinv2.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
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
                        <a href="https://github.com/schwenzen-script" rel="noopener noreferrer" target="_blank">
                            <img src={Github} alt="github" />
                        </a>

                        <a href="https://www.linkedin.com/in/jens-deryckere-860b5015a/" rel="noopener noreferrer" target="_blank">
                            <img src={Linkedin} alt="linkedin" />
                        </a>
                    </div>
                </Col>

                <Col size="col-12 col-lg-2 col-md-6 d-md-block d-none footer__right">
                    <h4>
                        Way to go
                    </h4>

                    <ul>
                        <li><NavLink to="/">Over mij</NavLink></li>
                        <li><NavLink to="/work">Mijn werk</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
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
        </footer>
    )
};

export default Footer;