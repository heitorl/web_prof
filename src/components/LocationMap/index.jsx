import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { getCoordinatesFromAddress } from "../../api/getCoordinatis";

const GoogleMapWithGeocoding = ({ addressData }) => {
  const apiKey = process.env.API_KEY_MAPS;
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    if (addressData) {
      getCoordinatesFromAddress(addressData).then((location) => {
        if (location) {
          setCoordinates(location);
        }
      });
    }
  }, [addressData]);

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  return isLoaded ? (
    coordinates ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lng: +coordinates.lon,
          lat: +coordinates.lat,
        }}
        zoom={20}
      >
        <Marker
          position={{
            lng: +coordinates.lon,
            lat: +coordinates.lat,
          }}
          options={{
            label: {
              text: "você está aqui ?",
              color: "#ffffff",
            },
          }}
        />
      </GoogleMap>
    ) : (
      <p>Carregando...</p>
    )
  ) : (
    <></>
  );
};

export default GoogleMapWithGeocoding;
