import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    // const cart = props.cart; // option 1
    // const {cart} = props; // option 2
    
    // console.log(cart);
    let total = 0;
    let totalShipping = 0;
    for (const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    return (
        <div className='cart'>
             <h3>Order Summary</h3>
                <p>Selected Items: {cart.length }</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${totalShipping}</p>
                <p>Tax: </p>
                <h6>Grand Total: </h6>
        </div>
    );
};

export default Cart;