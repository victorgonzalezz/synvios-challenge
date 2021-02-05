import React, {useEffect, useState, useContext} from "react";

import Modal from "../../components/Modal";

import CartContext from "../../Context/CartContext";

import {FlatList} from "react-native";

import Api from "../../services/api";

import {formatPrice} from "../../util/format";

import Icon from "react-native-vector-icons/MaterialIcons";

import {
    Container,
    Item,
    Image,
    ItemInfo,
    ItemName,
    ItemPrice,
    Button,
    ButtonCart,
    Quant,
    ButtonLabel
} from "./styles";

interface Product{
    id: number,
    title: string,
    price: number,
    image: string,
    priceFormatted?: string
}

interface QuantProps {
    [id:number]:number;
}

function Home(){
    const {addToCart, cartItems, showModal} = useContext(CartContext);

    const [products, setProducts] = useState<Product[]>([]);
    const [quants, setQuants] = useState<QuantProps>({})

    useEffect(() => {
        function quantItem(){
            const quantItems = cartItems.reduce((accumulate, product) => ({
                ...accumulate,
                [product.id] : product.amount
            }), {});

            setQuants(quantItems);
        }

        quantItem();
    }, [cartItems]);

    useEffect(() => {
        async function getProducts(){
            const request = await Api.get("/products");

            const newProducts = request.data.map((product:Product) => ({
                ...product,
                priceFormatted: formatPrice(product.price)
            }));

            setProducts(newProducts);
        }

        getProducts();
    }, []);

    return (
        <Container>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={products}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => (
                    <Item>
                    <Image source={{uri: `${item.image}`}}/>
                    <ItemInfo>
                        <ItemName>{item.title}</ItemName>
                        <ItemPrice>{item.priceFormatted}</ItemPrice>

                        <Button onPress={() => addToCart(item)}>
                            <ButtonCart>
                                <Icon name="add-shopping-cart" size={25} color="#FFF"/>
                                <Quant>{quants[item.id] || 0}</Quant>
                            </ButtonCart>
                            <ButtonLabel>ADICIONAR</ButtonLabel>
                        </Button>
                    </ItemInfo>
                </Item>
                )}
            />
            {showModal && <Modal/>}
        </Container>
    );
}

export default Home;