import {React} from "react"
import GoogleMapReact from 'google-map-react'
import markerIcon from './markerIcon.png'
import userIcon from './userIcon.png'
import { useGeolocated } from "react-geolocated";

const RestroomMarker = ({ text }) => (
  <div>
  <div style={{
    borderRadius: '50%',
    width: '25px',
    height: '25px',
    transform: 'translate(-50%, -50%)',
    color: 'white'
    
  }}>
    <a onClick={displayInfo}>
    <img src={markerIcon} style={{
      width: '80%'
    }}/>
    {text}
    </a>
  </div>
  {/* <Table style={{color:"white"}} columns={columns} dataSource={data} onChange={onChange} pagination={false}/> */}
  </div>
)

const UserMarker = ({ text }) => (
  <div>
  <div style={{
    borderRadius: '50%',
    width: '25px',
    height: '25px',
    transform: 'translate(-50%, -50%)',
    color: 'white'
    
  }}>
    <a onClick={displayInfo}>
    <img src={userIcon} style={{
      width: '80%'
    }}/>
    {text}
    </a>
  </div>
  {/* <Table style={{color:"white"}} columns={columns} dataSource={data} onChange={onChange} pagination={false}/> */}
  </div>
);

function displayInfo() {
  console.log("aaaa")
}

function Map() {
  const locationData = [
    {
      key: '1',
      lat: 33.646813,
      lng: -117.842527,
      text: "Aldrich Park"
      
    },
    {
      key: '2',
      lat: 33.646393,
      lng: -117.839737,
      text: "SSL"
    },
    {
      key: '3',
      lat: 33.646027,
      lng: -117.845745,
      text: "xxx"
    },
  ]
  const restrooms = locationData.map(d => <RestroomMarker
    key={d.key}
    lat={d.lat}
    lng={d.lng}
    text={d.text}
  />);

  const defaultProps = {
    center: {
      lat: 33.646813,
      lng: -117.842527
    },
    zoom: 16
  };

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  useGeolocated({
      positionOptions: {
          enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
  });
  return (
    // Important! Always set the container height explicitly
    
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
       {!isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
      <UserMarker
          lat={coords.latitude}
          lng={coords.longitude}
          text="User"
        />
    ) : (
        <div>Getting the location data&hellip; </div>
    )
    }
        
       {restrooms}
      </GoogleMapReact>
    </div>
  );
}


 
 export default Map;