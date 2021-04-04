import React, { useState, createContext, useContext } from "react";
import trackerApi from "../api/tracker.server";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [recording, setRecording] = useState(false);
  const [locations, setLocations] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const startRecording = () => {
    setRecording(true);
  };

  const stopRecording = () => {
    setRecording(false);
  };

  const addLocation = (loc) => {
    setCurrentLocation(loc);
    if (recording) {
      setLocations((oldArray) => [...oldArray, loc]);
    }
  };

  const changeName = (name) => {
    setName(name);
  };

  const fetchTracks = async () => {
    setLoading(true);
    const response =  await trackerApi.get("/tracks");
    setTracks(response.data);
    setLoading(false);
  };

  const saveTracks = async () => {
    setLoading(true);
    try {
      const data = { name, locations };
      const response = await trackerApi.post("/tracks", data);
      setLocations([]);
      setName("");
      setLoading(false);
      return response;
    } catch (error) {
      setError(error.error);
    }
  };

  return (
    <LocationContext.Provider
      value={{
        loading,
        error,
        recording,
        locations,
        currentLocation,
        tracks,
        startRecording,
        stopRecording,
        addLocation,
        changeName,
        saveTracks,
        fetchTracks,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
