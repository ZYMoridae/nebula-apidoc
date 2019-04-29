import React, { Component } from 'react';
import ApiBaseComponent from '../ApiBaseComponent';
import ApiSample from '../../../data/ApiSample';
import Fade from '@material-ui/core/Fade';

class Auth extends Component {
  render() {
    let authData = ApiSample.auth;
    return (
      <div>
        <Fade in={true} timeout={1200} >
          <div>
            {authData.map((item, index)=>
              <ApiBaseComponent apiData={item}></ApiBaseComponent>
            )}
          </div>
        </Fade>
      </div>
    )
  }
}

export default Auth;