import React, { useEffect } from 'react';

import { 
    HeaderNav, HeaderIcon ,
} from '../../components';

import $ from 'jquery';

import Git from '../../static/icons/github.png';
import LinkedIn from '../../static/icons/linkedin.png';

const Header = () => {
    useEffect(() => {
        $(window).scroll(function(){
            let header = $('.header'), scroll = $(window).scrollTop();
          
            if (scroll >= 100) header.addClass('scrolled');
            else header.removeClass('scrolled');
          });
    });

    return (
        <div className="header d-flex justify-content-end">
            <div className="header__navigation">
                <HeaderNav 
                    name="Over mij"
                    link="/"
                />

                <HeaderNav 
                    name="Mijn werk"
                    link="/work"
                />    

                <HeaderNav 
                    name="Contact"
                    link="/contact"
                />          
            </div>

            <div className="header__references">
                <HeaderIcon
                    img={Git}
                    link="https://github.com/schwenzen-script"
                />

                <HeaderIcon
                    img={LinkedIn}
                    link="https://www.linkedin.com/in/jens-deryckere-860b5015a/"
                />
            </div>
        </div>
    )
};

export default Header;