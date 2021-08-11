import React from 'react';
import {AppRegistry, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {name as appName} from './app.json';

import Routes from './src/config/routes';

function App() {
  return (
    <View>
      <Text>test 02</Text>
    </View>
  );
}

AppRegistry.registerComponent(appName, () => App);

{
  /* <NavigationContainer>
      <Routes />
    </NavigationContainer> */
}
