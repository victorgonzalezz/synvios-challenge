import React, {createContext, useState} from "react";

import Api from "../services/api";

import {formatPrice} from "../util/format";

interface CartContextProps {
    addToCart(item:Product): void;
    removeToCart(item:Product): void;
    deleteToCart(item:Product): void;
    cartItems: Product[];
    showModal: boolean;
    setShowModal(condition:boolean): void;
}

interface Product{
    id: number;
    title: string;
    price: number;
    image: string;
    priceFormatted?: string;
    amount?: number;
    subTotal?: string;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

export const Cart:React.FC = ({children}) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [showModal, setShowModal] = useState(false);

    async function addToCart(item:Product){
        const product = cartItems.findIndex(product => product.id === item.id);

        if(product !== -1){
            const response = await Api.get(`/stock/${item.id}`);

            if(response.data.amount >= cartItems[product].amount! + 1){
                cartItems[product].amount! += 1;

                cartItems[product].subTotal = formatPrice(
                    cartItems[product].amount! * cartItems[product].price
                );

                setCartItems([...cartItems]);
            }else{
                setShowModal(true);
            }
        }else{
            const response = await Api.get(`/stock/${item.id}`);

            if(response.data.amount >= 1){
                setCartItems([...cartItems, {
                    ...item,
                    amount: 1,
                    subTotal: item.priceFormatted
                }]);
            }else{
                setShowModal(true);
            }
        }
    }

    function removeToCart(item:Product){
        const product = cartItems.findIndex(product => product.id === item.id);

        if(cartItems[product].amount !== 1){
            cartItems[product].amount! -= 1;

            cartItems[product].subTotal = formatPrice(
                cartItems[product].amount! * cartItems[product].price
            );

            setCartItems([...cartItems]);
        }
    }

    function deleteToCart(item:Product){
        const product = cartItems.findIndex(product => product.id === item.id);

        cartItems.splice(product, 1);

        setCartItems([...cartItems]);
    }

    return (
        <CartContext.Provider value={{
            addToCart,
            removeToCart,
            deleteToCart,
            cartItems,
            showModal,
            setShowModal
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;