import React, {useEffect, useContext} from "react";

import CartContext from "../../Context/CartContext";

import Icon from "react-native-vector-icons/MaterialIcons";

import {ModalContainer, ErrorText} from "./styles";

function Modal(){
    const {setShowModal} = useContext(CartContext);

    useEffect(() => {
        function toHideModal(){
            setTimeout(function(){
                setShowModal(false);
            }, 2000);
        }

        toHideModal();
    }, []);

    return (
        <ModalContainer>
            <Icon name="error" color="#FFF" size={30}/>
            <ErrorText>Quantidade solicitada fora de estoque.</ErrorText>
        </ModalContainer>
    );
}

export default Modal;