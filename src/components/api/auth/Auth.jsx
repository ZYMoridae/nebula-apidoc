import React, { Component } from "react";
import ApiBaseComponent from "../ApiBaseComponent";
import AuthSample from "../../../data/AuthSample";
import Fade from "@material-ui/core/Fade";

class Auth extends Component {
  render() {
    let authData = AuthSample.auth;
    return (
      <div>
        <Fade in={true} timeout={1200}>
          <div>
            {authData.map((item, index) => (
              <ApiBaseComponent key={index} apiData={item} />
            ))}
          </div>
        </Fade>
      </div>
    );
  }
}

export default Auth;
