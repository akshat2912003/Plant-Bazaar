
import React, { useContext } from 'react';
import './CartItems.css';
import { PlantContext } from '../../Context/PlantContext';
import { loadStripe } from '@stripe/stripe-js';
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(PlantContext);

    // Payment function
    const makePayment = async () => {
        const stripe = await loadStripe('pk_test_51QLp42KuYUI0RL0BtfZrr85IzglW2b1fQQJ2YmZrUkH5PTb93jYStEQavoFM34uRuX9ICN8TSZa998cJwfrNJn2600PXxTGJp1');
        
        const products = all_product.filter((e) => cartItems[e.id] > 0).map((e) => ({
            name: e.name,
            image: e.image,
            new_price: e.new_price,
            quantity: cartItems[e.id],
        }));

        const response = await fetch('https://plant-bazaar.onrender.com/create-checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ products }),
        });

        const session = await response.json();
        const result = stripe.redirectToCheckout({ sessionId: session.id });

        if (result.error) console.log(result.error);
    };

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>Rs. {e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>Rs. {e.new_price * cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>Rs. {getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>Rs. {getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={makePayment}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Promo code' />
                        <button>APPLY</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;

