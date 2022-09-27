import React from "react";
import './cart.css'

const Cart = ({cart}) => {
  // console.log(cart);
    let total = 0;
    let shipping = 0;
    let tax = 0;
    let totalItem = 0;
    for(let c of cart){
      totalItem += c.quantity;
        total = total + c.price * totalItem;
        shipping = shipping + +c.shipping;
        tax = +(total * 0.1).toFixed(3)
    }
    const grandTotal = +(total + shipping + tax).toFixed(3);
  return (
    <div className="cart">
      <h1>Order summery</h1>
      <h3>Select items {totalItem}</h3>
      <h3>Total price ${total}</h3>
      <h3>Total shipping ${shipping}</h3>
      <h3>Total Tax ${tax}</h3>
      <h3>Grand total ${grandTotal}</h3>
    </div>
  );
};

export default Cart;
