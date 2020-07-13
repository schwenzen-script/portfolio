import React from 'react';

import { 
    App 
} from '../components';

import { 
    Header, Footer,
} from '../partials';

const Default = ({children}) => {
    return (
        <App>
            <Header />
            
            {children}

            <Footer />
        </App>
    )
};

export default Default;