import React, { Component } from 'react';

import MapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as ModalActions } from '../../store/ducks/modal';

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const { showModal } = this.props;
    const [longitude, latitude] = e.lngLat;
    showModal({ latitude, longitude });
  };

  render() {
    const { users } = this.props;
    return (
      <MapGL
        {...this.state.viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1Ijoicm9tdWxvOTQiLCJhIjoiY2p2ZzF1NzF6MDM0NjRhczI2ajhrNnRueiJ9.eZlKkNTaq1GM_Fh47UFUaA"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {users.data.map(usr => (
          <Marker
            latitude={usr.cordinates.latitude}
            longitude={usr.cordinates.longitude}
            key={usr.id}
          >
            <img
              style={{
                borderRadius: 100,
                width: 48,
                height: 48,
              }}
              alt={`${usr.name} Avatar`}
              src={usr.avatar}
            />
          </Marker>
        ))}
      </MapGL>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
