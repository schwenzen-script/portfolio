import React from 'react';
import { Route as ReactRoute } from 'react-router-dom';

const mergedProps = (component, layout, props) => {
    return (layout) ? React.createElement(layout, props, React.createElement(component, props)) : React.createElement(component, props);
};

const GivenRoute = ({ component, layout, ...rest }) => {
    return (
        <ReactRoute {... rest} render={props => {
            return mergedProps(component, layout, props);
        }} />
    );
};

export default GivenRoute;