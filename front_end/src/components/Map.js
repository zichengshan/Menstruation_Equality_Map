import {React} from "react"
import GoogleMapReact from 'google-map-react'
import markerIcon from './markerIcon.png'
import userIcon from './userIcon.png'
import { useGeolocated } from "react-geolocated";

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];
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
);
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
        <RestroomMarker
          lat={33.646813}
          lng={-117.842527}
          text="Aldrich Park"
        />
        <RestroomMarker
          lat={33.646393}
          lng={-117.839737}
          text="SSL"
        />
        <RestroomMarker
          lat={33.646027}
          lng={-117.845745}
          text=""
        />
      </GoogleMapReact>
    </div>
  );
}


 
 export default Map;