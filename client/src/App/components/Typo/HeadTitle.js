import React from 'react';

const HeadTitle = ({weight, text, extra}) => {
    return (
        <h1 className={`head-title ${weight} ${extra}`}>
            {text}
        </h1>
    )
};

export default HeadTitle;