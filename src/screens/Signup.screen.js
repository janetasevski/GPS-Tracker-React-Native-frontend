import React, { useContext, useCallback, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

import { AuthForm } from "../components/AuthForm.component";
import { LinkText } from "../components/LinkText.component";

import { AuthContext } from "../context/Auth.context";

export const SignupScreen = ({ navigation }) => {
  const { signup, isLoading, error, clearError } = useContext(AuthContext);
  
  useFocusEffect(
    useCallback(() => {
      clearError();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <AuthForm
        headerText="Sign Up"
        submitButtonText="Sign Up"
        onSubmit={signup}
        isLoading={isLoading}
        error={error}
      />
      <LinkText
        onPress={() => navigation.navigate("Signin")}
        text="Already have an account? Sing in instead."
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    justifyContent: "center",
  },
});
