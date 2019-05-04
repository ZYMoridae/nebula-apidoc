import React, { Component } from "react";
import ApiBaseComponent from "../ApiBaseComponent";
import ApiSample from "../../../data/UserSample";
import Fade from "@material-ui/core/Fade";

class User extends Component {
  render() {
    let userData = ApiSample.user;
    return (
      <div>
        <Fade in={true} timeout={1200}>
          <div>
            {userData.map((item, index) => (
              <ApiBaseComponent key={index} apiData={item} />
            ))}
          </div>
        </Fade>
      </div>
    );
  }
}

export default User;
