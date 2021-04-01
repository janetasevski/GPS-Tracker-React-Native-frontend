import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export const TrackDetailScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 48 }}>TrackDetailScreen</Text>
      <Text onPress={() => navigation.navigate("TrackList")}>Go to track details</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
