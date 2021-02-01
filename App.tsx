import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { Provider } from 'react-redux';

// import store from './store';

import Router from './src/routes';
import NavigationService from './src/services/navigation';

const App = () => {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Router
        // ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
      </NavigationContainer>
    //  </Provider>
  );
};

export default App;