import React, { useEffect } from 'react';

import { PageContainer, Section } from '../components';
import { Head, Contact as ContactBox } from '../partials';

const Contact = () => {
    useEffect(() => {
        document.title = "Jens Deryckere | Contact Me";

        window.scrollTo(0, 0);

        document.getElementsByClassName("header-nav")[2].classList.add("onpage");

        document.getElementsByClassName("header-nav")[0].classList.remove("onpage");
        document.getElementsByClassName("header-nav")[1].classList.remove("onpage");
    });
    return (
        <PageContainer>
            <Head
                size="small-head"
                text={{
                    "heavy": "Contact me!",
                    "light": "Alles voor een babbel",
                }}
            />

            <Section>
                <ContactBox
                    info={{
                        "email": "jensderyckere98@outlook.be",
                        "gsm": "0477 27 36 97",
                    }}
                />
            </Section>
        </PageContainer>
    )
};

export default Contact;