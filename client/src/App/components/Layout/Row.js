import React from 'react';

const Row = ({extra, children}) => {
    return (
        <div className={`row ${extra}`}>
            {children}
        </div>
    )
};

export default Row;