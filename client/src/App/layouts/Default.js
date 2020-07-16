import React, { useState } from 'react';

import { 
    App, 
    HamburgerButton 
} from '../components';

import { 
    Header, Footer,
} from '../partials';
import { Hamburger } from '../partials';

import $ from 'jquery';

const Default = ({children}) => {
    const [ hamburger, setHamburger ] = useState(false);

    const showHamburger = () => {
        const hamburgerbtn = $(".hamburger-button");

        hamburgerbtn.addClass("buttonPress");

        setTimeout(() => {
            setHamburger(true)
            const hamburger = $(".hamburger");
            setTimeout(() => {
                hamburger.addClass("topDown");

                const hamburgerexit = $(".hamburger__exit");
                setTimeout(() => {
                    hamburgerexit.addClass("buttonAppear");
                }, 500);
            }, 500);
        }, 1000);
    };

    const hideHamburger = () => {
        const hamburgerexit = $(".hamburger__exit");
        const hamburger = $(".hamburger");

        hamburgerexit.removeClass("buttonAppear")
        hamburgerexit.addClass("buttonPress");

        setTimeout(() => {
            hamburger.removeClass("topDown");
            hamburger.addClass("topUp");

            setTimeout(() => {
                setHamburger(false);
                const hamburgerbtn = $(".hamburger-button");
                hamburgerbtn.addClass("buttonAppear");

                setTimeout(() => {
                    hamburgerbtn.removeClass("buttonAppear");
                }, 1000);
            }, 1000);
        }, 500);
    }

    return (
        <App>
            <Header />

            {
                hamburger ? (
                    <Hamburger
                        handle={hideHamburger}
                    />
                ) 
                : (            
                    <HamburgerButton 
                        handle={showHamburger}
                    />
                )
            }
            
            {children}

            <Footer />
        </App>
    )
};

export default Default;