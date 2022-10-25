import React from "react"
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => (
  <div style={{
    background: 'lightblue',
    borderRadius: '50%',
    width: '25px',
    height: '25px',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);


function Map() {
  
  const defaultProps = {
    center: {
      lat: 33.646813,
      lng: -117.842527
    },
    zoom: 16
  };

  return (
    // Important! Always set the container height explicitly
    
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={33.646813}
          lng={-117.842527}
          text=""
        />
        <AnyReactComponent
          lat={33.646393}
          lng={-117.839737}
          text=""
        />
        <AnyReactComponent
          lat={33.646027}
          lng={-117.845745}
          text=""
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map