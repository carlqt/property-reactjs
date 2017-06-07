import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Protected = ({ component: C, props: cProps, ...rest }) => (
  <Route {...rest} render={props => (
    cProps.userToken !== null
      ? <C {...props} {...cProps} />
      : <Redirect to={`/admin/sign_in`} />
  )}/>
);

export default Protected;