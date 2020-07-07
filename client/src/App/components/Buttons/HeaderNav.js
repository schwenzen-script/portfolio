import React from 'react';

import {
    NavLink,
} from 'react-router-dom';

const HeaderNav = ({name, link}) => {
    return (
        <div className="header-nav">
            <div className="header-nav__upper"></div>

            <NavLink to={link}>
                {name}
            </NavLink>
        </div>
    )
};

export default HeaderNav;