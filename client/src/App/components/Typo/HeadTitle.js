import React from 'react';

const HeadTitle = ({weight, text}) => {
    return (
        <h1 className={`head-title ${weight}`}>
            {text}
        </h1>
    )
};

export default HeadTitle;