import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text h1 style={styles.title}>Sign Up</Text>
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
      <Button style={styles.button} title="Sign Up" onPress={() => null} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    justifyContent: "center"
  },
  title: {
    marginTop: -100,
    marginBottom: 30,
    marginHorizontal: 15
  },
  button: {
    margin: 15
  }
});
