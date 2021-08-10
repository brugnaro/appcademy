import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Main = createNativeStackNavigator();

import {Home, List} from '../screens';

const Routes: React.FC = () => (
  <NavigationContainer>
    <Main.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: '#f6f6f6'},
        headerShown: false,
      }}>
      <Main.Screen name="Home" component={Home} />
      <Main.Screen name="Lista" component={List} />
    </Main.Navigator>
  </NavigationContainer>
);

export default Routes;
