import React from 'react';

const HeaderIcon = ({img, link}) => {
    return (
        <a href={link} rel="noopener noreferrer" target="_blank" className="header-icon" to={link}>
            <img src={img} alt="icon-header" />
        </a>
    )
};

export default HeaderIcon;