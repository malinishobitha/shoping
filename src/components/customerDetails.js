import React, { useState, useEffect } from "react";
import "./css/customerdetails.css";
import Group from '../images/Frame 12.png';
import centellaSerum from '../images/Group 518.png';

function CustomerDetails() {
  // Example cart data
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Eyeliner",
      price: 229,
      quantity: 1,
      image: Group,
    },
    {
      id: 2,
      name: "Serum",
      price: 1798,
      quantity: 2,
      image: centellaSerum, 
    },
  ]);

  const [total, setTotal] = useState(0); 
  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };
 
  const updateQuantity = (id, action) => {
    setCart(
      cart.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity:
                action === "increase"
                  ? product.quantity + 1
                  : product.quantity > 0
                  ? product.quantity - 1
                  : 0, // Prevent quantity from going below 0
            }
          : product
      )
    );
  };
  

  useEffect(() => {
    const newTotal = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    setTotal(newTotal);
  }, [cart]);

  return (
    <div>
      <div className="category">
        <h2>Cart</h2>
      </div>
      <div className='cart-heads'>
        <div className='cart'>
          <h4>Cart</h4>
        </div>
        <div className="cart-headings">
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Sub Total</h4>
        </div>
      </div>
      <div className="cart-items">
        {cart.map((product) => (
          <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.name} className="product-images" />
            <div className="productName">
              <h3>{product.name}</h3>
            </div>
            <div className="product-details">
              <div className='price'>
                <p>Price: ₹{product.price}</p>
              </div>
              <div className="quantities">
                <button onClick={() => updateQuantity(product.id, "decrease")}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => updateQuantity(product.id, "increase")}>+</button>
              </div>
              <div className="total">
                <p>₹{product.price * product.quantity}</p> 
              </div>
            </div>
            <button onClick={() => removeFromCart(product.id)} className="delete-btn"><i class="bi bi-trash"></i></button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total</h3>
        <h3> ₹{total}</h3> 
        <p>Shipping fee will be calculated at the same time of purchase</p>
        <a href="paymentDetails"><button>Checkout</button></a>
      </div>

      <div className='footer'>
            <h1>Logo</h1>
            <div className='footerdetails'>
              <div className='footerdet'>
                
                <h5>Explore</h5>
                  <p>Home</p>
                  <p>Shop </p>
                  <p>Contact US</p>
                  <p>About US</p>
              </div>
              <div className='footerdet'>
                <h5>Address</h5>
                  <p>6350288747</p>
                  <p>Beautyonline@gmail.com</p>
                  <p>South 7th Street </p>
                  <p>Chennai</p>
              </div>
              <div className='footerdet'>
                <h5>Follow us</h5>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-pinterest"></i>
                <i class="bi bi-whatsapp"></i>
                <i class="bi bi-instagram"></i>
              </div>
            
        </div>
        <div className="copyright">
  <p>
    <span>&copy;</span> 2025 Beautyonline. All rights reserved.
  </p>
</div>
            
</div>
    </div>
  );
}

export default CustomerDetails;
