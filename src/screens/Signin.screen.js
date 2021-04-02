import React, { useContext, useCallback, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { AuthForm } from "../components/AuthForm.component";
import { LinkText } from "../components/LinkText.component";

import { AuthContext } from "../context/Auth.context";

export const SigninScreen = ({ navigation }) => {
  const { signin, isLoading, error, clearError } = useContext(AuthContext);

  useFocusEffect(
    useCallback(() => {
      clearError();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <AuthForm
        headerText="Sign In"
        submitButtonText="Sign In"
        onSubmit={signin}
        isLoading={isLoading}
        error={error}
      />
      <LinkText
        onPress={() => navigation.navigate("Signup")}
        text="Dont have an account? Sing up instead."
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
