import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  Product,
  Image,
  Title,
  Price,
  ProductAmount,
  ProductAmountText,
  AddCartButton,
  AddCartButtonText,
} from './styles';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

interface Product {
 id: number;
 title: string;
 price: number,
 image: string;
 priceFormatted?: string;
}

interface ICart {
  cart: any;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigation = useNavigation();
  const amount = useSelector((state: ICart)=>
    state.cart.reduce((sumAmount: any, product: any ) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();
  useEffect(() => {
    

    const loadProducts = async () => {
      const response = await api.get<Product[]>('/products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
      
    };
    loadProducts();
  }, []);

  const handleAddProduct = (id: any) => {
    
    dispatch(CartActions.addToCartRequest(id));
    // navigation.navigate('Cart');
  };
  
  return (
    <Container>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={products}
      keyExtractor={product => String(product.id)}
      renderItem={({item }) => (

        <Product>
            <Image source={{ uri:`${item.image}`}} />
            <Title>{item.title}</Title>
            <Price>{item.priceFormatted}</Price>


          <AddCartButton onPress={() => handleAddProduct(item.id)}>
            <ProductAmount>
              <Icon name="add-shopping-cart" size={20} color="#fff" />
              <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
            </ProductAmount>
            <AddCartButtonText>ADICIONAR AO CARRINHO</AddCartButtonText>
          </AddCartButton>
        </Product>
      )}
    />
  </Container>
);
};

export default Home;