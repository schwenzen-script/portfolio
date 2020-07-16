import React, { useEffect } from 'react';
import { PageContainer } from '../components';
import { Head } from '../partials';
import NotFoundBox from '../partials/NotFound/NotFoundBox';

const NotFound = () => {
    useEffect(() => {
        document.title = "Jens Deryckere | Not Found";

        document.getElementsByClassName("header-nav")[2].classList.remove("onpage");
        document.getElementsByClassName("header-nav")[0].classList.remove("onpage");
        document.getElementsByClassName("header-nav")[1].classList.remove("onpage");
    });

    return (
        <PageContainer>
            <Head
                size="small-head"
                text={{
                    "heavy": "Oops, 404?",
                    "light": "Een foutje!",
                }}
            />

            <NotFoundBox
                info={{
                    "title": "Een andere weg?",
                    "content": "Het lijkt erop dat je de verkeerde kant bent opgedraaid. Geen probleem hoor! Op de homepage vind je voldoende info terug.",
                    "link": "Get back, JoJo!",
                }}
            />
        </PageContainer>
    )
};

export default NotFound;