import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SigninScreen } from '../screens/Signin.screen';
import { SignupScreen } from '../screens/Signup.screen';

const Stack = createStackNavigator();

export const SignNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
    </Stack.Navigator>
  );
}