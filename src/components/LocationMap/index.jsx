import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { getCoordinatesFromAddress } from "../../api/getCoordinatis";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const GoogleMapWithGeocoding = ({ addressData }) => {
  const apiKey = process.env.REACT_APP_API_KEY_MAPS;
  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (addressData) {
      const fetchCoordinates = async () => {
        try {
          const location = await getCoordinatesFromAddress(
            addressData,
            (event) => {
              const newProgress = parseInt((event.loaded * 100) / event.total);
              setProgress(newProgress);
            }
          );

          if (location) {
            setCoordinates(location);
          }
        } finally {
          setLoading(false);
        }
      };

      const delay = 5000;

      const timeoutId = setTimeout(fetchCoordinates, delay);

      return () => clearTimeout(timeoutId);
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

  console.log(coordinates, "cordinatess");

  return isLoaded ? (
    coordinates ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lng: +coordinates.lon,
          lat: +coordinates.lat,
        }}
        zoom={18}
      >
        <Marker
          position={{
            lng: +coordinates.lon,
            lat: +coordinates.lat,
          }}
          options={{
            label: {
              text: "Você está aqui?",
              color: "#ffffff",
            },
          }}
        />
      </GoogleMap>
    ) : (
      loading && (
        <div style={{ width: 50, height: 50 }}>
          <CircularProgressbar
            styles={{
              root: { width: 24 },
              path: { stroke: "#1E90FF" },
            }}
            strokeWidth={30}
            value={progress}
          />
        </div>
      )
    )
  ) : (
    <></>
  );
};

export default GoogleMapWithGeocoding;
