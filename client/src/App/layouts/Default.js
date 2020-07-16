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
            }, 500);
        }, 1000);
    };

    return (
        <App>
            <Header />

            {
                hamburger ? (
                    <Hamburger/>
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