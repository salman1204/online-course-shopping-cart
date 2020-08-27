import React from "react";
import "./Cart.css"
import Button from 'react-bootstrap/Button';


const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((sum, course) => sum + course.price, 0)
  return (
    <div className="cart">
      <h1>Order Summary</h1>
      <p>Items Ordered: {cart.length} </p>
      <p>Product total Price: {totalPrice} </p>
      <Button variant="success">Place Order</Button>    
    </div>
  );
};

export default Cart;
