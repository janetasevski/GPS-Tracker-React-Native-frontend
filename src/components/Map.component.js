import React, { useContext } from "react";
import { StyleSheet, Text, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";

import { LocationContext } from "../context/Location.context";

export const Map = () => {
  const { currentLocation, locations } = useContext(LocationContext);

  return (
    <>
      {currentLocation ? (
        <MapView
          style={styles.map}
          region={{
            longitude: currentLocation.coords.longitude,
            latitude: currentLocation.coords.latitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Circle
            center={currentLocation.coords}
            radius={35}
            strokeColor="rgba(158, 158, 255, 1.0)"
            fillColor="rgba(158, 158, 255, 0.3)"
          />
          <Polyline
            coordinates={locations.map((location) => ({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }))}
          />
        </MapView>
      ) : (
        <ActivityIndicator size="large" style={{ marginTop: 100 }} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 300,
  },
});
