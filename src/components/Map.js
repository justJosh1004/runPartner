import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';

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

  mapRef = React.createRef();

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  resize = () => {
    this.handleViewportChange({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  getCoordinates = coords => {};

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
    console.log('THE VIEWPORT: ', viewport);
    this.getCoordinates(viewport.latitude, viewport.longitude);
  };

  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  render() {
    return (
      <ReactMapGL
        ref={this.mapRef}
        mapboxApiAccessToken={TOKEN}
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <Geocoder
          mapRef={this.mapRef}
          onViewportChange={this.handleGeocoderViewportChange}
          mapboxApiAccessToken={TOKEN}
        />
      </ReactMapGL>
    );
  }
}

export default Map;
