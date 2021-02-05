import React from "react";

import {createStackNavigator} from "@react-navigation/stack";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

import Header from "./components/Header";

const Stack = createStackNavigator();

function Routes() {
    return (
        <Stack.Navigator screenOptions={{
                header: (props) => <Header navigation={props.navigation}/>
            }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Cart" component={Cart}/>
        </Stack.Navigator>
    );
}

export default Routes;