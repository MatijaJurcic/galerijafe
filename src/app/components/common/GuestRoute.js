import React from "react";
import { Route, Redirect } from "react-router-dom";

const GuestRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!window.localStorage.getItem("loginToken")) {
        return <Component {...props} />;
      } else {
        return (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        );
      }
    }}
  />
);

export default GuestRoute;
