import React from 'react';

const SectionTitle = ({text}) => {
    return (
        <div className="section-title">
            <h2>{text}</h2>
            <div className="section-title__underline"></div>
        </div>
    )
}; 

export default SectionTitle;