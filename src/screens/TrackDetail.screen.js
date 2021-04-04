import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";

import { LocationContext } from "../context/Location.context";

export const TrackDetailScreen = ({ route }) => {
  const { _id } = route.params;
  const { tracks } = useContext(LocationContext);
  const [track, setTrack] = useState(null);


  useEffect(() => {
    const result = tracks.find((track) => track._id === _id);
    if (result) {
      setTrack(result);
    }
  }, [tracks]);

  if (!track) {
    return <ActivityIndicator size="large" style={{ marginTop: 150 }} />;
  }
  
  return (
    <SafeAreaView>
      <Text h1 style={styles.title}>
        {track.name}
      </Text>
      <MapView 
        style={styles.map} 
        initialRegion={{
          longitude: track.locations[0].coords.longitude,
          latitude: track.locations[0].coords.latitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: 15,
  },
  map: {
    width: "100%",
    height: 300,
  },
});
