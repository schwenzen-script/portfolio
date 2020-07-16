import React from 'react';

const HamburgerButton = ({handle}) => {
    return (
        <div className="hamburger-button d-md-none d-flex" onClick={handle}>
            <div className="hamburger-button__circle"></div>
            <div className="hamburger-button__circle"></div>
            <div className="hamburger-button__circle"></div>
        </div>
    )
};

export default HamburgerButton;