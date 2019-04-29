import React, { Component } from 'react';
import ApiBaseComponent from '../ApiBaseComponent';
import ApiSample from '../../../data/ShipperSample';
import Fade from '@material-ui/core/Fade';

class Shipper extends Component {
  render() {
    let shipperData = ApiSample.shipper;
    return (
      <div>
        <Fade in={true} timeout={1200} >
          <div>
            {shipperData.map((item, index)=>
              <ApiBaseComponent apiData={item}></ApiBaseComponent>
            )}
          </div>
        </Fade>
      </div>
    )
  }
}

export default Shipper;