import styled from "styled-components/native";

import {RectButton} from "react-native-gesture-handler"

export const Container = styled.View`
    background: #191920;
    flex: 1;
    padding: 10px;
`;

export const Item = styled.View`
    background: #FFF;
    flex-direction: row;
    border-radius: 7px;
    overflow: hidden;
    padding: 10px;
    margin-bottom: 10px;
`;

export const Image = styled.Image`
    height: 120px;
    width: 120px;
`;

export const ItemInfo = styled.View`
    flex: 1;
    margin-left: 10px;
`;

export const ItemName = styled.Text.attrs(props => ({
    numberOfLines: 2
}))`
    font-size: 15px;
`;

export const ItemPrice = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin: 10px 0;
`;

export const Button = styled(RectButton)`
    flex-direction: row;
    align-items: center;
    background: #7159c1;
    border-radius: 7px;
    width: 150px;
`;

export const ButtonCart = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 7px;
    background: rgba(0,0,0,0.1);
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
`;

export const Quant = styled.Text`
    color: #FFF;
`;

export const ButtonLabel = styled.Text`
    color: #FFF;
    font-weight: bold;
    margin: auto;
`;