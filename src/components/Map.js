import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

import { TOKEN } from '../apis/mapsToken';
import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 40.4406,
      longitude: -79.9959,
      zoom: 10
    }
  };

  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken={TOKEN}
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}

export default Map;
