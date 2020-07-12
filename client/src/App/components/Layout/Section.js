import React from 'react';

const Section = ({children}) => {
    return (
        <div className="container section">
            <div className="row d-flex justify-content-center">
                <div className="col-12">
                    { children }
                </div>
            </div>
        </div>
    )
};

export default Section;