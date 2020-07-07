import React from 'react';

const Col = ({size, children}) => {
    return (
        <div className={`${size}`}>
            {children}
        </div>
    )
};

export default Col;