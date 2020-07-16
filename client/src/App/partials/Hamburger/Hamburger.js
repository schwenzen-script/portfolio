import React from 'react';

import Exit from '../../static/icons/exit-black.png';

const Hamburger = () => {
    return (
        <div className="hamburger">
            <div className="hamburger__exit">
                <img src={Exit} alt="exit" />
            </div>
            <h1 className="hamburger__title">
                Deryckere.
            </h1>


        </div>
    )
};

export default Hamburger;