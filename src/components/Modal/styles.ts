import styled from "styled-components/native";

export const ModalContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #cc0000;
    padding: 10px;
    border-radius: 7px;
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: 20px;
`;

export const ErrorText = styled.Text`
    color: #FFF;
    font-size: 15px;
    margin-left: 5px;
`;