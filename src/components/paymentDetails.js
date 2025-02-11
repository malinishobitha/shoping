import React, { useState } from "react";
import "./css/paymentDetails.css"; 
import Googlepay from '../images/download (2).png';
import Phonepay from '../images/images (1).png';
import Visa from '../images/visa.png';

const PaymentDetails = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    discountCode: "",
  });

  const [cartTotal, setCartTotal] = useState(500); 
  const shippingPrice = 59; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const applyDiscount = () => {
    console.log("Applying discount:", formData.discountCode);
    if (formData.discountCode === "DISCOUNT10") {
      setCartTotal(cartTotal * 0.9);
    }
  };

  return (
    <div>
    <div className="payment-container">
        <div className='payment-det'>
      <form onSubmit={handleSubmit} className="payment-form">
       
        <h5>Contact Details</h5>
        <div className="contact-det">
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        </div>
        <h5>Shipping Address</h5>
        <div className='person-det'>
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} required></textarea>
        </div>
        <div className='state-det'>
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
        <select name="state" value={formData.state} onChange={handleChange} required className="state-dropdown">
  <option value=""> State</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
</select>

        <input type="text" name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} required />
</div>
      </form>
</div>
      {/* Discount Section */}
      <div className="coupan-section">
       <h5>Coupan</h5>
        <div className='coupan'>
          
        <input type="text" name="discountCode" placeholder="Discount Code" value={formData.discountCode} onChange={handleChange} />
        <button onClick={applyDiscount} className="apply-btn">Apply</button>
      </div>

      {/* Total Price Section */}
      <div className="total-amount">
    <h6><span>SubTotal</span> <span>₹{cartTotal.toFixed(2)}</span></h6>
    <h6><span>Shipping Price</span> <span>₹{shippingPrice}</span></h6>
    <hr />
    <h6><span>Total</span> <span>₹{(cartTotal + shippingPrice).toFixed(2)}</span></h6>
</div>


      {/* Payment Checkbox */}
      <div className="payment-cart">
  <h5>Payment </h5>
  

  <div className="payment-option">
    <input type="radio" id="credit-card" name="paymentMethod" value="Credit Card" />
    <label htmlFor="credit-card"> <img src={Visa} alt="googlepay" />Credit Card</label>
  </div>
<hr></hr>
  <div className="payment-option">
    <input type="radio" id="google-pay" name="paymentMethod" value="Google Pay" />
    <label htmlFor="google-pay"> <img src={Googlepay} alt="googlepay" />
    Google Pay</label>
  </div>
  <hr></hr>
  <div className="payment-option">
    <input type="radio" id="phone-pay" name="paymentMethod" value="Phone Pay" />
    <label htmlFor="phone-pay"> <img src={Phonepay} alt="phonepay" />
    Phone Pay</label>
  </div>
<hr></hr>
  <div className="payment-option">
    <input type="radio" id="other-apps" name="paymentMethod" value="Other Apps" />
    <label htmlFor="other-apps">  Other API Apps</label>
  </div>
</div>
<a href="successful"><button className="buy">Buy Now</button></a>
</div>
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
};

export default PaymentDetails;
