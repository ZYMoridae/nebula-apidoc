import React from "react";
import { Route, Redirect } from "react-router-dom";
import Zjax from "../utils/zjax";
import Utils from '../utils/Utils';

function checkToken() {
  let token = sessionStorage.getItem("token");
  if (token == null && token == undefined) {
    sessionStorage.removeItem("user");
  }
}

class AdminRoute extends React.Component {
  constructor() {
    super();

    let isAdmin = sessionStorage.getItem('n:b_a');

    let _temp = isAdmin.split('_');
    isAdmin = atob(_temp[1]) == 'true';

    this.state = {
      isAdmin: isAdmin,
      requestFail: false,
    }
  }

  componentDidMount() {
    // console.log(sessionStorage.getItem('user'));
    // let options = {
    //   method: 'get'
    // };

    // Zjax.request({
    //   url: "/api/users/me",
    //   option: Utils.addToken(options),
    //   successCallback: response => {
    //     if(response.data.admin) {
    //       this.setState({isAdmin: response.data.admin});
    //     }
    //   },
    //   failureCallback: error => {
    //     this.setState({requestFail: true})
    //   }
    // });
  }

  render() {
    const { component: Component, ...rest } = this.props;
    
    checkToken();

    if(location.href == '/login') {
      return;
    }

    return (
      <Route
        {...rest}
        render={props =>
          sessionStorage.getItem("token") != undefined &&
          sessionStorage.getItem("token") != "null" &&
          sessionStorage.getItem("token") != "undefined" ? (
            this.state.isAdmin ? <Component {...props} /> : <Redirect to={{ pathname: "/" }} />
          ) : (
            <Redirect to={{ pathname: "/login" }} />
          )
        }
      />
    )
  }
}

export default AdminRoute;
