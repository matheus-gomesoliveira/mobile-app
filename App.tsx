import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#1D1C3E' barStyle={'light-content'} />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
