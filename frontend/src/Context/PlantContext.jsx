import React, { createContext, useEffect, useState } from 'react'

export const PlantContext = createContext(null)
    // function creating empty cart
const getDefaultCart = () => {
    let cart = {};
    for(let index = 0; index < 300+1; index++){
        cart[index] = 0
    }
    return cart;
}
    
const PlantContextProvider = (props) =>{

    const [all_product, setAll_Product] = useState([])


    const [cartItems, setCartItems] = useState(getDefaultCart())
    // const contextValue = {all_product, cartItems};

    useEffect(() =>{
        fetch('http://localhost:4000/allproducts')
        .then((response) => response.json())
        .then((data) => setAll_Product(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart', {
                method: 'POST',
                headers: {
                    Accept : 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type' :  'application/json',
                },
                body:"",
            }).then((response) => response.json())
           .then((data) => setCartItems(data))
        }
    }, [])
    

    const addToCart = (itemId) =>{
        setCartItems((prev) =>({...prev, [itemId] : prev[itemId]+1})); 
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept : 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type' :  'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
        }

    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev) =>({...prev, [itemId] : prev[itemId]-1}))   
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept : 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type' :  'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
        }

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
