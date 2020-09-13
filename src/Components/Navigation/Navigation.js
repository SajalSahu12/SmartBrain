import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p
          onClick={() => onRouteChange("Signout")}
          className="tr b underline pa2 link dim mouse "
        >
          Sign out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p
          onClick={() => onRouteChange("SignIn")}
          className="tr b underline pa2 link dim mouse "
        >
          Sign in
        </p>
        <p
          onClick={() => onRouteChange("Register")}
          className="tr b underline pa2 link dim mouse "
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
