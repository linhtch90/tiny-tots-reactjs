import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d

const StoresMap = () => {
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const locations = [
    {
      name: "Store 1",
      location: {
        lat: 16.0538439,
        lng: 108.2179835,
      },
    },
    {
      name: "Store 2",
      location: {
        lat: 10.8552583,
        lng: 106.7654855,
      },
    },
    {
      name: "Store 3",
      location: {
        lat: 21.0362645,
        lng: 105.800897,
      },
    },
  ];

  const defaultCenter = {
    lat: 16.0538439,
    lng: 108.2179835,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBlLbg_xX82eONbEfGGuQuP-THVaMgqDZk">
      <GoogleMap mapContainerStyle={mapStyles} zoom={6} center={defaultCenter}>
        {locations.map((item) => {
          return <Marker key={item.name} position={item.location} />;
        })}
      </GoogleMap>
    </LoadScript>
  );
};

export default StoresMap;
