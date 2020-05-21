import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Fragment>
          {console.log("path: ", props.location.pathname)}
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location.pathname },
            }}
          />
        </Fragment>
      )
    }
  />
);

export default PrivateRoute;
