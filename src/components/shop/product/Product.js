import React from 'react'
import './product.css'

const Product = (props) => {
    const {product,handleCart } = props
    const {img, name, price, seller, ratings} = product;
  return (
    <div className='product'>
        <img src={img} alt="products images" />
        <div className="productDesc">
            <h3>{name}</h3>
            <h4>Price ${price}</h4>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>
        </div>
            <button onClick={()=> handleCart(product)}>Add to cart</button>
    </div>
  )
}

export default Product