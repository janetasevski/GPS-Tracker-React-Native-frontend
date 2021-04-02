import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { SignNavigator } from "./Sign.navigator";
import { TabNavigator } from "./Tab.navigator";

import { AuthContext } from '../context/Auth.context';

export const Navigation = () => {
  const { token, tokenIsLoading } = useContext(AuthContext);
  
  if (tokenIsLoading) return null;

  return (
    <NavigationContainer>
      {!token ? <SignNavigator /> : <TabNavigator />}
    </NavigationContainer>
  );
};
