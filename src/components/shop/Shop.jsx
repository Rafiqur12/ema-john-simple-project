import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../product/Product';
import Cart from '../cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // get shopping cart from local storage
    useEffect(()=>{
const storedCart = getShoppingCart();
// console.log(storedCart);
// step- 1 : get id 
for (const id in storedCart){
    // console.log(id)
    // step - 2:get the product by using id
    const savedProduct = products.find(product => product.id === id)
    console.log(savedProduct);
    // step-3: get quantity of the product 
}

    }, [products])

    const handleAddToCart =(product) =>{
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                    key = {product.id}
                    product = {product}
                    handleAddToCart ={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;