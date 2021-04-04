import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { TrackListScreen } from "../screens/TrackList.screen";
import { TrackDetailScreen } from "../screens/TrackDetail.screen";

const Stack = createStackNavigator();

export const TrackListNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrackList"
        options={{ title: "Track List" }}
        component={TrackListScreen}
      />
      <Stack.Screen
        name="TrackDetail"
        options={{ title: "Details" }}
        component={TrackDetailScreen}
      />
    </Stack.Navigator>
  );
};
