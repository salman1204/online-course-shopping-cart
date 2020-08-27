import React from "react";
import "./Cart.css"

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((sum, course) => sum + course.price, 0)
  return (
    <div className="cart">
      <h1>Order Summary</h1>
      <p>Items Ordered: {cart.length} </p>
      <p>Product total Price: {totalPrice} </p>
      <button>Place Order</button>
    </div>
  );
};

export default Cart;
