import React, { useContext } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import { Button } from "react-native-elements";

import { AuthContext } from "../context/Auth.context";

export const AccountScreen = () => {
  const { signout, isLoading } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text h1 style={styles.title}>
        Account
      </Text>
      <Button
        style={styles.button}
        title="Sign out"
        loading={isLoading}
        onPress={signout}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  title: {
    margin: 15,
  },
  button: {
    margin: 15,
  },
});
