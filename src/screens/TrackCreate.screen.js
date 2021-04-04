import "../_mockLocation";
import React, { useCallback, useContext } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Text } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";

import { Map } from "../components/Map.component";
import { TrackForm } from "../components/TrackForm.component";

import { LocationContext } from "../context/Location.context";
import useLocation from "../hooks/useLocation.hook";

export const TrackCreateScreen = () => {
  const {
    addLocation,
    changeName,
    startRecording,
    stopRecording,
    saveTracks,
    locations,
    recording,
    loading
  } = useContext(LocationContext);

  const isFocused = useIsFocused();

  const callback = useCallback((location) => {
    addLocation(location);
  }, [recording]);
  const [error] = useLocation(isFocused || recording, callback);

  const onStartRecording = (name) => {
    changeName(name);
    startRecording();
  };

  const onStopRecording = () => {
    stopRecording();
  };

  if (error) {
    return (
      <SafeAreaView>
        <Text style={styles.error}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <Text h1 style={styles.title}>
        Create a Track
      </Text>
      <Map />
      <View style={styles.trackForm}>
        <TrackForm
          loading={loading}
          startRecording={onStartRecording}
          stopRecording={onStopRecording}
          saveTrack={saveTracks}
          recording={recording}
          locations={locations}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: 15,
  },
  error: {
    color: "red",
    fontSize: 16,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  trackForm: {
    margin: 50,
  },
});
