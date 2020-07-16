import React from 'react';

import Exit from '../../static/icons/exit-black.png';
import { NavLink } from 'react-router-dom';

const Hamburger = ({handle}) => {
    return (
        <div className="hamburger">
            <div className="hamburger__exit">
                <img src={Exit} alt="exit" onClick={handle} />
            </div>
            <h1 className="hamburger__title">
                Deryckere.
            </h1>

            <h5 className="hamburger__subtitle">
                Enkele richtingen...
            </h5>
            <ul>
                <li><NavLink to="/">Over mij</NavLink></li>
                <li><NavLink to="/work">Mijn werk</NavLink></li>
                <li><NavLink to="/contact">Contacteer mij</NavLink></li>
            </ul>
        </div>
    )
};

export default Hamburger;