import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import trackerApi from "../api/tracker.server";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [tokenIsLoading, setTokenIsLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) tryLocalSignin();
  }, []);

  const tryLocalSignin = async () => {
    setTokenIsLoading(true);
    const storedToken = await AsyncStorage.getItem("token");
    if (storedToken) setToken(storedToken);
    setTokenIsLoading(false);
  };

  const saveTokenToStorage = async (token) => {
    try {
      await AsyncStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  };
  
  const removeTokenFromStorage = async () => {
    try {
      await AsyncStorage.removeItem("token");
    } catch (error) {
      console.log(error);
    }
  };

  const signup = ({ email, password }) => {
    setIsLoading(true);
    trackerApi
      .post("/signup", { email, password })
      .then((response) => {
        saveTokenToStorage(response.data.token);
        setToken(response.data.token);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.response.data.error);
        setIsLoading(false);
      });
  };

  const signin = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const response = await trackerApi.post("signin", { email, password });
      saveTokenToStorage(response.data.token);
      setToken(response.data.token);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      console.log(error.response.data.error);
      setError(error.response.data.error);
      setIsLoading(false);
    }
  };

  const signout = () => {
    removeTokenFromStorage(null);
    setToken(null);
    setError(null);
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        tokenIsLoading,
        isLoading,
        error,
        clearError,
        signup,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
