import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Text, ListItem } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";

import { LocationContext } from "../context/Location.context";

export const TrackListScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const { fetchTracks, tracks, loading } = useContext(LocationContext);

  useEffect(() => {
    if (isFocused) {
      fetchTracks();
    }
  }, [isFocused]);

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 150 }} />
      ) : (
        <FlatList
          data={tracks}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("TrackDetail", { _id: item._id })
                }
              >
                <ListItem>
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: 15,
  },
});
