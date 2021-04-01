import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { SignNavigator } from "./Sign.navigator";
import { TabNavigator } from "./Tab.navigator";

export const Navigation = () => {
  const isAuthenticated = false;

  return (
    <NavigationContainer>
      {!isAuthenticated ? <SignNavigator /> : <TabNavigator />}
    </NavigationContainer>
  );
};
