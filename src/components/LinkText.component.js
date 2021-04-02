import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";

export const LinkText = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.signinText}>
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  signinText: {
    fontSize: 16,
    color: "#4287f5",
    marginTop: 20,
    margin: 15,
  },
});