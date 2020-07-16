import React, { useEffect } from 'react';

import { Container, Row, Col, SectionTitle } from '../../components';

import HistoryPoint from './HistoryPoint';

import $ from 'jquery'

const History = () => {
    useEffect(() => {
        $(window).scroll(function() {
            if ($(".history").length !== 0) {
                var top_of_element = $(".history").offset().top;
                var bottom_of_element = $(".history").offset().top + $(".history").outerHeight();
                var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                var top_of_screen = $(window).scrollTop();
            
                if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                    $(".section-title")[2].classList.add("leftIn");
                };
            }
        });

        $(window).scroll(function() {
            if ($(".history-point__route--point").length !== 0) {
                var top_of_element = $(".history-point__route--point").eq(0).offset().top;
                var bottom_of_element = $(".history-point__route--point").eq(0).offset().top + $(".history-point__route--point").eq(0).outerHeight();
                var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                var top_of_screen = $(window).scrollTop();
            
                if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                    for (let index = 0; index < 3; index++) {
                        $(".history-point").eq(index).addClass("grow-point");
                        $(".history-point__route--point").eq(index).addClass("bounceIn");
        
                        setTimeout(() => {
                            $(".history-point__date").eq(index).addClass("leftIn");
        
                            setTimeout(() => {
                                $(".history-point__text--title").eq(index).addClass("rightIn");
        
                                setTimeout(() => {
                                    $(".history-point__text--subtitle").eq(index).addClass("rightIn");
        
                                    setTimeout(() => {
                                        $(".history-point__text--content").eq(index).addClass("rightIn");
                                    }, 200)
                                }, 200)
                            }, 500)
                        }, 1500);
                    }
                };
            }
        });
    });

    return (
        <div className="history">
            <Container>
                <Row>
                    <Col size="col-12 d-flex justify-content-center">
                        <SectionTitle
                            text="Wat geschiedenis"
                            animation="left-title"
                        />
                    </Col>
                </Row>

                <HistoryPoint 
                    event={{
                        "title": "Opleiding KTA Brugge",
                        "function": "Student TSO - Sportwetenschappen",
                        "content": "Even iets heel anders, hé? Van origine ben ik dus een sporter en dit ben ik niet afgeleerd. Wekelijks ben ik nog vaak op pad met de koersfiets. Jaren deed ik dit in competitie maar bij aanvang van mijn studies leek het me het geschikte moment om de competitie (even?) vaarwel te zeggen.",
                        "start": "2012",
                        "end": "2018",
                    }}
                />

                <HistoryPoint 
                    event={{
                        "title": "Opleiding Artevelde Hogeschool",
                        "function": "Student New Media Development",
                        "content": "Momenteel ben ik nog student binnen deze opleiding. Dagelijks leer ik hier heel wat bij door medestudenten en docenten. Coding zat niet in mijn bloed maar het is er wel zeer snel ingekomen! In de NMD-opleiding worden we geschoold tot volwaardige Full-Stack Developers. Daar kan je toch geen nee tegen zeggen?",
                        "start": "2018",
                        "end": "HEDEN",
                    }}
                />

                <HistoryPoint 
                    event={{
                        "title": "Feelin development",
                        "function": "Eigenaar",
                        "content": 'Een kleine onderneming van mij. Als developer leek het me wel leuk om mezelf even in de markt te leggen en enkele projecten te maken om mijn capaciteiten te versterken en ook nieuwe zaken aan te leren. Tevens leverde mij het ook een mooi centje op. Het was dus eerder een zaak van "WHY NOT?". Dit met succes. Momenteel kan ik al enkele leuke projecten voorstellen en mooie referenties aangeven zoals Connus, Cycling Vlaanderen, Zeg Ja!, ...',
                        "start": "2019",
                        "end": "HEDEN",
                    }}
                />
            </Container>
        </div>
    )
};

export default History;