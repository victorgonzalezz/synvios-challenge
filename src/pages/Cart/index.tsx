import React, {useContext, useState, useEffect} from "react";

import Modal from "../../components/Modal";

import {formatPrice} from "../../util/format";

import CartContext from "../../Context/CartContext";

import {ScrollView} from "react-native";

import {BorderlessButton} from "react-native-gesture-handler";

import Icon from "react-native-vector-icons/MaterialIcons";

import {
    Container,
    CartContainer,
    ItemContainer,
    Image,
    InfoContainer,
    ItemText,
    ItemPrice,
    Item,
    FooterItem,
    Quant,
    QuantItem,
    SubTotal,
    FooterCartContainer,
    TotalText,
    TotalPrice,
    Button,
    ButtonLabel,
    TextCartEmpty,
    CartEmpty
} from "./styles";

function Cart(){
    const {cartItems, addToCart, removeToCart, deleteToCart, showModal} = useContext(CartContext);

    const [total, setTotal] = useState("");

    useEffect(() => {
        function calculateTotal(){
            const totalProducts = cartItems.reduce((acumulate, product) => {
                return acumulate + (product.price * product.amount!);
            }, 0);
            
            setTotal(formatPrice(totalProducts));
        }

        calculateTotal();
    }, [cartItems]);

    if(cartItems.length === 0){
        return (
            <Container>
                <CartContainer>
                    <CartEmpty>
                        <Icon name="remove-shopping-cart" size={70} color="#999"/>
                        <TextCartEmpty>Seu carrinho está vazio.</TextCartEmpty>
                    </CartEmpty>
                </CartContainer>
            </Container>
        );
    }

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CartContainer>
                    {cartItems.map(item => (
                        <Item key={item.id}>
                            <ItemContainer>
                                <Image source={{uri: `${item.image}`}}/>
                                <InfoContainer>
                                    <ItemText>{item.title}</ItemText>
                                    <ItemPrice>{item.priceFormatted}</ItemPrice>
                                </InfoContainer>
                                <BorderlessButton onPress={() => deleteToCart(item)}>
                                    <Icon name="delete-forever" color="#7159c1" size={30}/>
                                </BorderlessButton>
                            </ItemContainer>
                            <FooterItem>
                                <Quant>
                                    <BorderlessButton onPress={() => removeToCart(item)}>
                                        <Icon
                                            name="remove-circle-outline"
                                            color="#7159c1"
                                            size={30}
                                        />
                                    </BorderlessButton>
                                    <QuantItem>{item.amount}</QuantItem>
                                    <BorderlessButton onPress={() => addToCart(item)}>
                                        <Icon
                                            name="add-circle-outline"
                                            color="#7159c1"
                                            size={30}
                                        />
                                    </BorderlessButton>
                                </Quant>
                                <SubTotal>{item.subTotal}</SubTotal>
                            </FooterItem>
                        </Item>
                    ))}
                    <FooterCartContainer>
                        <TotalText>TOTAL</TotalText>
                        <TotalPrice>{total}</TotalPrice>
                        <Button>
                            <ButtonLabel>FINALIZAR PEDIDO</ButtonLabel>
                        </Button>
                    </FooterCartContainer>
                </CartContainer>
            </ScrollView>
            {showModal && <Modal/>}
        </Container>
    );
}

export default Cart;