import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from 'react-native-elements';


export const SigninScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text h1>SigninScreen</Text>
      <Text onPress={() => navigation.navigate("Signup")}>Sign up</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
