import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export const AuthForm = ({ headerText, submitButtonText, onSubmit, isLoading, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = !!email && !!password;

  return (
    <>
      <Text h1 style={styles.title}>
        {headerText}
      </Text>
      <Input
        placeholder="E-mail"
        leftIcon={<AntDesign name="mail" size={24} color="black" />}
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        leftIcon={
          <MaterialCommunityIcons
            name="form-textbox-password"
            size={24}
            color="black"
          />
        }
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={setPassword}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <Button
        style={styles.button}
        title={submitButtonText}
        onPress={() => onSubmit({ email, password })}
        loading={isLoading}
        disabled={!isFormValid}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: -100,
    marginBottom: 30,
    marginHorizontal: 15,
  },
  button: {
    margin: 15,
  },
  error: {
    color: "red",
    fontSize: 16,
    marginHorizontal: 15,
    marginBottom: 15,
  },
});
