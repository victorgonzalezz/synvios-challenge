import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';

import Router from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Router
        // ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
     </Provider>
     </NavigationContainer>
  );
};

export default App;