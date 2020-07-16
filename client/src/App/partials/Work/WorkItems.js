import React, { useState } from 'react';
import $ from 'jquery';

import { workContent } from '../../workContent';

import { Container, Row, SectionTitle, Col } from '../../components';

import WorkItem from './WorkItem';

import Exit from '../../static/icons/exit.png';

const WorkItems = () => {
    $(window).scroll(function() {
        if ($(".work-items").length !== 0) {
            var top_of_element = $(".work-items").offset().top;
            var bottom_of_element = $(".work-items").offset().top + $(".work-items").outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();
            
            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                $(".section-title")[0].classList.add("leftIn");
                const works = $(".work-item");

                setTimeout(() => {
                    for (let i = 0; i < works.length; i++) {
                        (function(ind) {
                            setTimeout(function(){
                                works[i].classList.add("bottomUp");

                                setTimeout(function(){
                                    works[i].classList.add("visible");
                                }, 500 + (100 * ind));
                            }, 500 + (200 * ind));
                        })(i);
                    }
                }, 500);
            };
        }
     });

     const [ fullScreen, setFullScreen ] = useState(false);
     const [ viewDetails, setViewDetails ] = useState();

     const handleView = (state, index) => {
         if (state === true) {
             setFullScreen(true);
             setViewDetails(Object.values(workContent)[index])      
        } else {
             setFullScreen(false);
         };
     };

    return (
        <Container>
            <Row extra="">
                <Col size="col-12 d-flex justify-content-center">
                    <SectionTitle
                        text="Enkele werken"
                        animation="left-title"
                    />
                </Col>
            </Row>

            <div className="work-items">
                <Row extra="">
                    {
                        Object.keys(workContent).map((work, index) => {
                            return <WorkItem item={workContent[work]} handle={handleView} key={index} index={index} />
                        })
                    }
                </Row>      
            </div>

            {
                fullScreen ? (
                    <div className="work-item-full">
                        <div className="work-item-full__content">
                            <div className="work-item-full__content--exit">
                                <img src={Exit} alt="exit-button" onClick={() => handleView(false, 0)} />
                            </div>

                            <div className="work-item-full__content__text">
                                <p className="work-item-full__content__text--title">
                                    <strong>{viewDetails.title}</strong> | {viewDetails.work}
                                </p>

                                <p className="work-item-full__content__text--content">
                                    {viewDetails.content}
                                </p>
                            </div>
                            <div className="d-flex justify-content-center w-100">
                                <div className="work-item-full__content__image">
                                    <img src={`img/${viewDetails.mock}`} alt={viewDetails.title} />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    ""
                )
            }
        </Container>
    )
};

export default WorkItems;