import styled from "styled-components/native";

import {RectButton} from "react-native-gesture-handler";

export const Container = styled.View`
    background: #191920;
    flex: 1;
    padding: 10px;
`;

export const CartContainer = styled.View`
    background: #FFF;
    border-radius: 7px;
    overflow: hidden;
    padding: 15px;
`;

export const Item = styled.View`
    flex-direction: column;
`;

export const ItemContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Image = styled.Image`
    width: 100px;
    height: 100px;
`;

export const InfoContainer = styled.View`
    flex: 1;
    margin-left: 10px;
`;

export const ItemText = styled.Text.attrs(props => ({
    numberOfLines: 2
}))`
    font-size: 15px;
`;

export const ItemPrice = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin-top: 5px;
`;

export const FooterItem = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #EEE;
    padding: 10px;
    border-radius: 5px;
`;

export const Quant = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const QuantItem = styled.Text`
    background: #FFF;
    border-radius: 5px;
    width: 50px;
    padding: 5px 10px;
    margin: 0 5px;
`;

export const SubTotal = styled.Text`
    font-weight: bold;
    font-size: 20px;
`;

export const FooterCartContainer = styled.View`
    align-items: center;
    margin-top: 30px;
`;

export const TotalText = styled.Text`
    color: #999;
    font-size: 20px;
`;

export const TotalPrice = styled.Text`
    font-weight: bold;
    font-size: 30px;
`;

export const Button = styled(RectButton)`
    background: #7159c1;
    width: 100%;
    border-radius: 7px;
    margin-top: 30px;
`;

export const ButtonLabel = styled.Text`
    color: #FFF;
    font-weight: bold;
    text-align: center;
    padding: 15px;
`;

export const TextCartEmpty = styled.Text`
    font-weight: bold;
    font-size: 25px;
`;

export const CartEmpty = styled.View`
    align-items: center;
`;