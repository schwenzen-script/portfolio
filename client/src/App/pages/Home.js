import React, { useEffect } from 'react';

import { 
    PageContainer, Scroll, Section, 
} from '../components';

import {
    Head,
    Info,
    Skills,
    Redirect,
    History
} from '../partials';

const Home = () => {
    useEffect(() => {
        document.title = "Jens Deryckere | Over Mij";
        document.getElementsByClassName("header-nav")[0].classList.add("onpage");

        document.getElementsByClassName("header-nav")[1].classList.remove("onpage");
        document.getElementsByClassName("header-nav")[2].classList.remove("onpage");
    });

    return (
        <PageContainer>
            <Head
                size="big-head"
                text={{
                    "heavy": "Jens Deryckere.",
                    "light": "En een developer.",
                }}
                button={{
                    "link": "/work",
                    "text": "Ontdek mijn werk"
                }}
            />

            <Scroll />

            <Section>
                <Info
                    text={{
                        "title": "Wat over mij?",
                        "subtitle": "Jens Deryckere",
                        "content": "Als ik denk aan een portfolio, dan denk ik altijd: “Wat moeten mensen nu over mij weten? Of wat willen ze weten?”. Dan kom ik toch altijd uit bij een aantal optie’s. Passie’s, ervaringen, opleidingen, … The usual stuff eigenlijk. Wel, laten we daar dan eens mee beginnen?"
                    }}
                />

                <Skills
                    text={{
                        "title": "Belangrijke skills"
                    }}
                />
            </Section>


            <History
            />

            <Redirect 
                text={{
                    "title": "Want to see something?",
                    "subtitle": "Bekijk enkele werken van mij!",
                    "link": "/work",
                }}
            />
        </PageContainer>
    )
};

export default Home;