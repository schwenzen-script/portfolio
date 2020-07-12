import React from 'react';

const SectionTitle = ({text, animation}) => {
    return (
        <div className={`section-title ${animation}`}>
            <h2>{text}</h2>
            <div className="section-title__underline"></div>
        </div>
    )
}; 

export default SectionTitle;