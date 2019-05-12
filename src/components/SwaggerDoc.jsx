import React, { Component } from 'react';
import SwaggerUi, { presets } from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';
import swagger from '../data/swagger.json';
import NebulaAppBar from './NebulaAppBar';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class SwaggerDoc extends React.Component {

  componentWillMount() {
    const { fetchSwaggerConfig } = this.props;
    fetchSwaggerConfig();
  }

  componentDidUpdate() {
    const { info } = this.props;
    if (info) {
      SwaggerUi({
        dom_id: '#swaggerContainer',
        url: info.value,
        presets: [presets.apis],
      });
    }
  }

  render() {
    const { info, isFetchingSwaggerConfig } = this.props;

    return (
      <div>
        <NebulaAppBar />
        {isFetchingSwaggerConfig && <div className='sweet-loading'>
          <CircleLoader
            css={override}
            sizeUnit={"px"}
            size={100}
            color={'#ff5000'}
            loading={true}
          />
        </div>}
        <div id="swaggerContainer" />
      </div>

    );
  }
}

export default SwaggerDoc;