import React, { useEffect, useState } from 'react'
import Cart from '../cart/Cart';
import Product from './product/Product';
import './shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleCart = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
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