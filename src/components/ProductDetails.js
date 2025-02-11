import React, { useState } from "react";
import "./css/ProductDetails.css";
import eyelinerImage from '../images/Frame 40.png';
import boxImage from '../images/Frame 41.png';
import Image from '../images/Frame 42.png';
import Group from '../images/Frame 12.png';
import profile1 from "../images/images.jpeg";
import profile2 from "../images/images.jpeg";
import profile3 from "../images/images.jpeg";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };
  const reviews = [
    {
      id: 1,
      name: "Sneha T",
      text: `"I like how smoothly it glides without tugging on my eyelids. Good staying power but needs a touch-up after long hours."`,
      time: "a month ago",
      rating: 5,
      image: profile1,
    },
    {
      id: 2,
      name: "Meera",
      text: `"The pigmentation is amazing! It stays intact for hours, even in humid weather. Definitely my go-to eyeliner now!"`,
      time: "a month ago",
      rating: 5,
      image: profile2,
    },
    {
      id: 3,
      name: "Priya",
      text: `"Long-lasting and smudge-proof. Perfect for daily use. Highly recommend!"`,
      time: "a month ago",
      rating: 4,
      image: profile3,
    },
  ];
  return (
    <div>
      <div className="product-container">
        <div className="product-left">
          <div className="product-thumbnails">
            <img src={eyelinerImage} alt="thumbnail" />
            <img src={eyelinerImage} alt="thumbnail" />
            <img src={boxImage} alt="thumbnail" />
            <img src={Image} alt="thumbnail" />
          </div>
          <div className="main-image">
            <div className="icon"><i class="bi bi-suit-heart"></i></div>
            <img src={Group} alt="lip" />
          </div>
        </div>

        <div className="product-right">
          <h2>Maybelline New York Colossal Bold Pencil Eyeliner</h2>
          <p>Get intense, long-lasting black color with a smooth, matte finish this 3ml pencil glides effortlessly for bold, smudge-proof definition. Perfectly for all-day wear!</p>
          <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill">
            </i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> (10 Reviews)</p>
          <div className="price-section">
            <span className="current-price">₹229</span>
            <span className="original-price">₹289</span>
            <span className="discount">10% OFF</span>
          </div>

          {/* Quantity Section */}
          <div className='quantity'>
          <div className="quantity-section">
            <button onClick={decreaseQuantity} className="qty-btn">-</button>
            <span className="qty-value">{quantity}</span>
            <button onClick={increaseQuantity} className="qty-btn">+</button>
          </div>

          <a href='customerDetails'><button className="add-to-cart">ADD TO CART</button></a>
        </div>
        </div>
      </div>
      <div className='container'>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" 
              aria-controls="collapseOne">
                About this Item
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>Highly pigmented waterproof eye liner.  Ideal for defined lines and a range of looks.  Perfect for daily use </li>
                  <li>Create different looks - winged. butterfly or simple swipe</li>
                  <li>From the inner corner of each eye. draw a neat stroke along your upper lash line.  Extend a little beyond the outer corner pf each eye.</li>
                  <li>Content: 1X Maybelline New York Colossal Ncid Eyeliner, Smudge proof and waterprof, long tasting Blck, 3g</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" 
              aria-controls="collapseTwo">
                Ingredients
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">

              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                How to Use
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-container">
        <div className='review'>
          <h2>Customer Reviews</h2>
          <button className="write-review-btn">Write a review</button>
        </div>

        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <img src={review.image} alt={review.name} className="profile-pic" />
            <div className="review-content">
              <h3>{review.name}</h3><hr></hr>
              <p>{review.text}</p>
              <span className="review-time">{review.time}</span>
            </div>
            <div className="rating">⭐️⭐️⭐️⭐️⭐️</div>
          </div>
        ))}
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

export default ProductDetails;
