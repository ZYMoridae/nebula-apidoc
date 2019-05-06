import React, { Component } from "react";
import ApiBaseComponent from "./ApiBaseComponent";
import Fade from "@material-ui/core/Fade";

class CommonApiComponent extends Component {
  render() {
    const { apiData } = this.props;

    return (
      <div>
        <Fade in={true} timeout={1200}>
          <div>
            {apiData.map((item, index) => (
              <ApiBaseComponent key={index} apiData={item} />
            ))}
          </div>
        </Fade>
      </div>
    );
  }
}

export default CommonApiComponent;
