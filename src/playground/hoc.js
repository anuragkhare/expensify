import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>This is ze info: {props.info}</h1>
  </div>
);

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.authenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <h1>Please login first</h1>
      )}
    </div>
  );
};

const AuthenticatedInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthenticatedInfo info={"test"} authenticated={true} />,
  document.getElementById("app")
);
