import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TrackListNavigator } from "./TrackList.navigator";

import { TrackCreateScreen } from "../screens/TrackCreate.screen";
import { AccountScreen } from "../screens/Account.screen";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TrackListNavigator" component={TrackListNavigator} />
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};
