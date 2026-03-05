import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Smartphone Pro Max', price: 29999, quantity: 1 },
    { id: 2, name: 'Gaming Laptop', price: 89999, quantity: 1 }
  ]);

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateDiscount = () => {
    return calculateTotal() * 0.1; // 10% discount
  };

  const calculateFinalAmount = () => {
    return calculateTotal() - calculateDiscount();
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="empty-state">
          <h2>🛒 Your Cart is Empty</h2>
          <p>Add items to your cart to get started</p>
          <a href="/" className="continue-shopping">Continue Shopping</a>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      
      <div className="cart-content">
        {/* Cart Items */}
        <div className="cart-items">
          <div className="cart-header">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
            <span>Action</span>
          </div>

          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-name">{item.name}</div>
              <div className="item-price">₹{item.price.toLocaleString()}</div>
              <div className="item-quantity">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <input type="number" value={item.quantity} readOnly />
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <div className="item-total">₹{(item.price * item.quantity).toLocaleString()}</div>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>✕</button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="cart-summary">
          <h3>Price Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{calculateTotal().toLocaleString()}</span>
          </div>
          <div className="summary-row discount">
            <span>Discount (10%)</span>
            <span>-₹{calculateDiscount().toLocaleString()}</span>
          </div>
          <div className="summary-row shipping">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total Amount</span>
            <span>₹{calculateFinalAmount().toLocaleString()}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
