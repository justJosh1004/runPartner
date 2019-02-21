import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
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
    },
    marker: {
      lat: 40.4406,
      lng: -79.9959
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

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport },
      marker: {
        ...this.state.marker,
        lat: viewport.latitude,
        lng: viewport.longitude
      }
    });
  };

  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  setMarkerLat = (lat = this.state.viewport.latitude) => {
    this.setState({
      marker: { ...this.state.marker, lat: lat }
    });
  };

  setMarkerLng = (lng = this.state.viewport.longitude) => {
    this.setState({
      marker: { ...this.state.marker, lng: lng }
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
        <Marker
          latitude={this.state.marker.lat}
          longitude={this.state.marker.lng}
          draggable={true}
          onDragEnd={event => {
            console.log(event);
            this.setMarkerLat(event.lngLat[1]);
            this.setMarkerLng(event.lngLat[0]);
          }}
        >
          <FontAwesomeIcon icon={faMapMarker} />
        </Marker>
      </ReactMapGL>
    );
  }
}

export default Map;
