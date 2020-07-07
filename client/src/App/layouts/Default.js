import React from 'react';

import { 
    App 
} from '../components';

import { 
    Header,
} from '../partials';

const Default = ({children}) => {
    return (
        <App>
            <Header />
            
            {children}
        </App>
    )
};

export default Default;