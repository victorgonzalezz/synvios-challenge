import React from 'react';
import { } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

import Header from './components/Header';
// import HeaderLogo from './components/HeaderLogo';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor:'#141419',
      },
      // headerLeft: <HeaderLogo />,
      // headerRight: <Header /> ,
      cardStyle: {
        backgroundColor: '#141419'
      },
    }}
    >
  
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Cart" component={Cart} />
  </App.Navigator>
);
   
export default Routes;