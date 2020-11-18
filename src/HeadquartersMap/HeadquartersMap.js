import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d

const HeadquartersMap = () => {
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const [currentPosition, setCurrentPosition] = useState({});

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  return (
    <LoadScript googleMapsApiKey="AIzaSyBlLbg_xX82eONbEfGGuQuP-THVaMgqDZk">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentPosition}
      >
        {currentPosition.lat && <Marker position={currentPosition} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default HeadquartersMap;
