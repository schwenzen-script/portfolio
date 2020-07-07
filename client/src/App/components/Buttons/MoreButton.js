import React from 'react';

import {
    NavLink,
} from 'react-router-dom';

const MoreButton = ({text, link}) => {
    return (
        <NavLink to={link} className="more-button d-flex align-items-center">
            <div className="more-button__line"></div>
            <h5>
                {text}
            </h5>
        </NavLink>
    )
};

export default MoreButton;