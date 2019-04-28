import React, { Component } from 'react';
import ApiBaseComponent from '../ApiBaseComponent';
import ApiSample from '../../../data/ApiSample';

class Auth extends Component {
  render() {
    let authData = ApiSample.auth;
    return (
      <div>
        {authData.map((item, index)=>
          <ApiBaseComponent apiData={item}></ApiBaseComponent>
        )}
      </div>
    )
  }
}

export default Auth;