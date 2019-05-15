import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component_: Component_j, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('token')
            ? <Component_j {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)