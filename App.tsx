import React from "react";

import {StatusBar} from "react-native";

import {NavigationContainer} from "@react-navigation/native";

import Routes from "./src/routes";

import {Cart} from "./src/Context/CartContext";

function App(){
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={"#191920"}/>
            <Cart>
                <Routes/>
            </Cart>
        </NavigationContainer>
    );
}

export default App;