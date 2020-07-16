import React, { useEffect } from 'react';
import { PageContainer, Section } from '../components';
import { Head, WorkItems, Redirect } from '../partials';

const Work = () => {
    useEffect(() => {
        document.title = "Jens Deryckere | My Work";

        window.scrollTo(0, 0);

        document.getElementsByClassName("header-nav")[1].classList.add("onpage");

        document.getElementsByClassName("header-nav")[0].classList.remove("onpage");
        document.getElementsByClassName("header-nav")[2].classList.remove("onpage");
    });

    return (
        <PageContainer>
            <Head
                size="small-head"
                text={{
                    "heavy": "My craft.",
                    "light": "Bewijsje van mijn kunnen...",
                }}
            />

            <Section>
                <WorkItems />
            </Section>

            <Redirect 
                text={{
                    "title": "Want to communicate?",
                    "subtitle": "Kom in touch met mij! Dan spreken we eens.",
                    "link": "/contact",
                }}
            />
        </PageContainer>
    )
};

export default Work;