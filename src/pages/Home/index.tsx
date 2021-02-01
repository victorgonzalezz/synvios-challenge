import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
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

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  // const [setLoading] = useState(false);
  useEffect(() => {
    // setLoading(true);

    const loadProducts = async () => {
      const response = await api.get<Product[]>('/products');
      console.log(response.data);
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
      // setLoading(false);
    };
    loadProducts();
  }, []);
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
            <Price>{item.price}</Price>

          <AddCartButton onPress={() => {} }>
            <ProductAmount>
              <Icon name="add-shopping-cart" size={20} color="#fff" />
              <ProductAmountText> 0 </ProductAmountText>
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