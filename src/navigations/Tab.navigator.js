import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { TrackListNavigator } from "./TrackList.navigator";

import { TrackCreateScreen } from "../screens/TrackCreate.screen";
import { AccountScreen } from "../screens/Account.screen";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => {
          let iconName;
          if (route.name === "TrackListNavigator") {
            iconName = "list";
          } else if (route.name === "TrackCreate") {
            iconName = "map";
          } else if (route.name === "Account") {
            iconName = "settings";
          }
          return <Feather name={iconName} size={size} color={color} />
        },
      })}
    >
      <Tab.Screen
        name="TrackListNavigator"
        options={{ title: "Track List" }}
        component={TrackListNavigator}
      />
      <Tab.Screen
        name="TrackCreate"
        options={{ title: "Track Create" }}
        component={TrackCreateScreen}
      />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};
