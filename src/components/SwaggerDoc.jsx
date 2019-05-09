import React, {Component} from 'react';
import SwaggerUi, {presets} from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';
import swagger from '../data/swagger.json';

class SwaggerDoc extends Component {
  componentDidMount() {
    SwaggerUi({
      dom_id: '#swaggerContainer',
      spec: swagger,
      presets: [presets.apis],
    });
  }

  render() {
    return (
      <div id="swaggerContainer" />
    );
  }
}

export default SwaggerDoc;