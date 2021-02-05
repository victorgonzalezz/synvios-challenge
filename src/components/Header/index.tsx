import React, {useContext} from "react";

import CartContext from "../../Context/CartContext";

import {StackNavigationProp} from "@react-navigation/stack";

import {TouchableOpacity} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";


import {HeaderContainer, Logo, CartInfo, CartQuant} from "./styles";

interface HeaderProps{
    navigation: StackNavigationProp<Record<string, object | undefined>, string>
}

const Header:React.FC<HeaderProps> = ({navigation}) =>{
    const {cartItems} = useContext(CartContext);

    return (
        <HeaderContainer>
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <CartInfo>
                    <Icon name="shopping-basket" size={25} color="#FFF"/>
                    <CartQuant>{cartItems.length}</CartQuant>
                </CartInfo>
            </TouchableOpacity>
        </HeaderContainer>
    );
}

export default Header;