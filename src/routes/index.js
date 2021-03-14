/* eslint-disable indent */

import React from 'react';
import routes from './Routes';
import PublicRoute from './PublicRoute';

/**
 * Routes Class
 */
export default () =>
    routes.map((route, i) => {
        return <PublicRoute
key={i}
{...route}
               />;
    });
