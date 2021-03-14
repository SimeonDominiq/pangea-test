import React from 'react';
import { Route } from 'react-router';

/**
 * HOC Component to render pages where Auth is not required
 * @param {*} param0
 * @returns {*} Route component
 */
const PublicRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => <Component {...props} />}
    />
);

export default PublicRoute;
