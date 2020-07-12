import React from 'react';

const Skill = ({title, subtitle, img}) => {
    return (
        <div className="skill">
            <div className="skill__img">
                <img src={`img/${img}`} alt={title} />
            </div>

            <div className="skill__text">
                <p className="skill__text--title">
                    {title}
                </p>
                
                <p className="skill__text--subtitle">
                    {subtitle}
                </p>
            </div>
        </div>
    )
};

export default Skill;