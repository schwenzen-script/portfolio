import React, { useEffect } from 'react';

import { 
    PageContainer, Scroll, 
} from '../components';

import {
    Head,
} from '../partials';

const Home = () => {
    useEffect(() => {
        document.title = "Jens Deryckere | Over Mij";
        document.getElementsByClassName("header-nav")[0].classList.add("onpage");
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
        </PageContainer>
    )
};

export default Home;