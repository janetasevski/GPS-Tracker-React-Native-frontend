import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export const TrackListScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Text onPress={() => navigation.navigate("TrackDetail")}>Go to track details</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
