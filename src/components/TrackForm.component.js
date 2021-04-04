import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export const TrackForm = ({
  startRecording,
  stopRecording,
  saveTrack,
  recording,
  locations,
  loading,
}) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const navigation = useNavigation();

  const validation = () => {
    setNameError("");
    if (name === "") {
      setNameError("Rounte name is required");
      return false;
    }
    return true;
  };

  const onStartRecordingHandler = (name) => {
    if (!validation()) return;
    startRecording(name);
  };

  const onSaveHandler = () => {
    if (!validation()) return;
    saveTrack().then((track) => {
      setName("");
      navigation.navigate("TrackList");
    });
  };

  return (
    <>
      <Input
        errorMessage={nameError}
        placeholder="Route Name"
        value={name}
        onChangeText={setName}
      />
      {!recording ? (
        <Button
          style={styles.button}
          title="Start recording"
          onPress={() => onStartRecordingHandler(name)}
        />
      ) : (
        <Button style={styles.button} title="Stop" onPress={stopRecording} />
      )}
      {!recording && locations.length ? (
        <Button
          buttonStyle={styles.saveButton}
          title="Save"
          onPress={onSaveHandler}
          loading={loading}
        />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
  },
  saveButton: {
    marginVertical: 10,
    backgroundColor: "orange",
  },
});
