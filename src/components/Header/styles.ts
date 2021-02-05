import styled from "styled-components/native"

export const HeaderContainer = styled.View`
    background: #191920;
    flex-direction: row;
    padding: 20px 15px;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.Image`
    width: 185px;
    height: 24px;
`;

export const CartInfo = styled.View`
    position: relative;
`;

export const CartQuant = styled.Text`
    position: absolute;
    color: #FFF;
    background: #7159c1;
    border-radius: 50px;
    width: 20px;
    height: 20px;
    font-size: 15px;
    text-align: center;
    top: -10px;
    right: -10px;
`;