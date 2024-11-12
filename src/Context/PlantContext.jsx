import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'
export const PlantContext = createContext(null)
    // function creating empty cart
const getDefaultCart = () => {
    let cart = {};
    for(let index = 0; index < all_product.length+1; index++){
        cart[index] = 0
    }
    return cart;
}
    
const PlantContextProvider = (props) =>{
    const [cartItems, setCartItems] = useState(getDefaultCart())
    // const contextValue = {all_product, cartItems};

    const addToCart = (itemId) =>{
        setCartItems((prev) =>({...prev, [itemId] : prev[itemId]+1}));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev) =>({...prev, [itemId] : prev[itemId]-1}))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    }

    //total cart amount function
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product) => product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
            // return totalAmount;
        }
        return totalAmount;
    }

    //total cart items numbers funcntion, import it in navbar.jsx
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem += cartItems[item]
            }
        }
        return totalItem;
    }

    const contextValue = {getTotalCartItems, getTotalCartAmount,all_product, cartItems, addToCart, removeFromCart}

    return (
        <PlantContext.Provider value={contextValue}>
            {props.children}
        </PlantContext.Provider>
    )
}

export default PlantContextProvider
