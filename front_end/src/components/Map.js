import React from "react";
import GoogleMapReact from "google-map-react";
import userIcon from "./userIcon.png";
import { useGeolocated } from "react-geolocated";
import RestroomMarker from "./RestroomMarker"

const UserMarker = ({ text }) => (
  <div>
    <div
      style={{
        borderRadius: "50%",
        width: "25px",
        height: "25px",
        transform: "translate(-50%, -50%)",
        color: "white",
      }}
    >
      <a>
        <img
          src={userIcon}
          style={{
            width: "80%",
          }}
        />
        {text}
      </a>
    </div>
  </div>
);

function Map({ searchResult }) {
  const restrooms = searchResult.map((d) => (
    <RestroomMarker
      key={d.id}
      building_id={d.id}
      lat={d.latitude}
      lng={d.longitude}
      text={d.name}
      distance={d.distance}
      walking_time={d.walkingTime}
      floors={d.floors}
    />
  ));

  const defaultProps = {
    center: {
      lat: 33.646813,
      lng: -117.842527,
    },
    zoom: 16,
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
        bootstrapURLKeys={{ key: "AIzaSyDL0gcQf5NFWRFZdXgUtatPoOxE5JaxdJY" }}
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
            text="YOU"
          />
        ) : (
          <div>Getting the location data&hellip; </div>
        )}
        {restrooms}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
