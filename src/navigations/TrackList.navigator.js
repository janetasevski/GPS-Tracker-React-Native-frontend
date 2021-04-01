import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TrackListScreen } from '../screens/TrackList.screen';
import { TrackDetailScreen } from '../screens/TrackDetail.screen';

const Stack = createStackNavigator();

export const TrackListNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
}