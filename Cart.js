import React from 'react';
import { Card } from 'react-bootstrap';

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price.substring(1)), 0).toFixed(2);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Cart</Card.Title>
        <ul className="list-group list-group-flush">
          {cartItems.map((item, index) => (
            <li key={index} className="list-group-item">
              <span>{item.title}</span>
              <span className="ms-auto">{item.price}</span>
            </li>
          ))}
        </ul>
        <Card.Text>Total: ${totalPrice}</Card.Text>
        <button className="btn btn-primary">Checkout</button>
      </Card.Body>
    </Card>
  );
};

export default Cart;
