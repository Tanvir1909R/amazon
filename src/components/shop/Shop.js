import React, { useEffect, useState } from 'react'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from './product/Product';
import './shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    useEffect(()=>{
        const storedCart = getStoredCart();
        let saveCart = [];
        for(let id in storedCart){
            const addedProduct = products.find((pro)=> pro.id === id);
            if(addedProduct){
                let quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // saveCart.push(addedProduct)  //(same as line 26)
                saveCart = [...saveCart,addedProduct]
            }
        }
        setCart(saveCart);
    },[products])

    const handleCart = (selectProduct)=>{
        const exists = cart.find((product => product.id === selectProduct.id));
        let newCart = [];
        if(!exists){
            selectProduct.quantity = 1;
            newCart = [...cart, selectProduct]
        }else{
            const rest = cart.filter((product => selectProduct.id !== product.id));
            exists.quantity += 1;
            newCart = [...rest, exists] 
        }
        setCart(newCart);
        addToDb(selectProduct.id);
    }
  return (
    <section id='shop'>
        <div className="shopWrapper">
            <div className="products">
                {
                    products.map((product)=>
                    <Product key={product.id}
                    product={product}
                    handleCart={handleCart}
                    />  
                    )
                }
            </div>
            <div className="productsCart">
                <Cart cart={cart} />
            </div>
        </div>
    </section>
  )
}

export default Shop