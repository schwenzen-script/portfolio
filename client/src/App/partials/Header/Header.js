import React from 'react';

import { 
    HeaderNav ,
} from '../../components';

const Header = () => {
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

            </div>
        </div>
    )
};

export default Header;