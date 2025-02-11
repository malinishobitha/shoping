import React from 'react';
import bannerImage from '../images/LA_Girl_header.jpg';
import skincare from '../images/skincare.png';
import HairImage from '../images/hair.png';
import Makeup from '../images/makeup.png';
import Bath from '../images/image 2 (2).png';
import Group from '../images/Frame 12.png';
import Serum from '../images/Group 517.png';
import centellaSerum from '../images/Group 518.png';
import cream from '../images/Group 519.png';
import './css/home.css';
import detImage from '../images/girlimage.png';
import bannerImage1 from '../images/image 10.png';
import bannerImage2 from '../images/Group 515.png';
import girlImage from '../images/images.jpeg';
import serum from '../images/Group 521.png';
import Facewash from '../images/Group 522.png';
import Lipstick from '../images/Group 523.png';
import WashGel from '../images/Group 524.png';


function HomePage() {
    return (
        <div>
            <div className='container'>
                <div className='banner-image'>
                    
                    <img src={bannerImage} alt="Banner" />
                </div>
                <div className='category'>
                    <h2>Shop by Category</h2>
                </div>
                <div className="images">
                    <div className="productimg">
                    <img src={skincare} alt="facecream" />
                    <p>Skin Care</p>
                    </div>
                    <div className="productimg">
                    <img src={HairImage} alt="eye" />
                    <p>Hair Care</p>
                    </div>
                    <div className="productimg">
                    <img src={Makeup} alt="facecream" />
                    <p>Makeup</p>
                    </div>
                    <div className="productimg">
                    <img src={Bath} alt="bath" />
                    <p>Bath & Body Care</p>
                </div>
                </div>
                <div className="productdet">
                    <div className="details">
                        <h5>About Our Beauty Products</h5>
                        <p>At [Brand Name], we believe that beauty begins with care - care for yourself, your skin and the planet.  
                            Our mission is to provide high-quality, effective and innovative beauty solutions that bring out your natural radiance. </p>
                        <button>Know More</button>
                    </div>
                <div className="detimage">
                    <img src={detImage} alt="detimage"/>
                </div>
                </div>
                <div className='category'>
                    <h2>Our Featured Product</h2>
                </div>
                <div className="product-image">
                    <div className='product'>
                    <img src={Group} alt="lip" />
                    <p>Maybelline Pencil eyeliner </p>
                    <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
                   <p><i class="bi bi-currency-rupee"></i>179</p>
                   <a href ="ProductDetails"><button>Add to Cart</button></a>
                    </div>
                    <div className='product'>
                    <img src={Serum} alt="serum" />
                    <p>Natural Makeup Spray </p>
                    <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
                   <p><i class="bi bi-currency-rupee"></i>237</p>
                   <button>Add to Cart</button>
                    </div>
                    <div className='product'>
                    <img src={centellaSerum} alt="serum" />
                    <p>Centella Serum </p>
                    <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
                   <p><i class="bi bi-currency-rupee"></i>1,798</p>
                   <button>Add to Cart</button>
                    </div>
                    <div className='product'>
                    <img src={cream} alt="cream" />
                    <p>Skin Expert Cream </p>
                    <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
                   <p><i class="bi bi-currency-rupee"></i>1,499</p>
                   <button>Add to Cart</button>
                    </div>
                </div>
                <div className="product-image">
                    <div className='product'>
                    <img src={Group} alt="lip" />
                    <p>Maybelline Pencil eyeliner </p>
                    <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
                   <p><i class="bi bi-currency-rupee"></i>179</p>
                   <button>Add to Cart</button>
                    </div>
                    <div className='product'>
                    <img src={Serum} alt="serum" />
                    <p>Natural Makeup Spray </p>
                    <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
                   <p><i class="bi bi-currency-rupee"></i>237</p>
                   <button>Add to Cart</button>
                    </div>
                    <div className='product'>
                    <img src={centellaSerum} alt="serum" />
                    <p>Centella Serum </p>
                    <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
                   <p><i class="bi bi-currency-rupee"></i>1,798</p>
                   <button>Add to Cart</button>
                    </div>
                    <div className='product'>
                    <img src={cream} alt="cream" />
                    <p>Skin Expert Cream</p>
                    <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
                   <p><i class="bi bi-currency-rupee"></i>1,499</p>
                   <button>Add to Cart</button>
                    </div>
                </div>
                <div className="banner-image1">
                <img src={bannerImage1} alt="cream" />
                <button className="shop-button">Shop Now</button>
                </div>
                <div className="category">
                    <h2>New Arrivals</h2>
                </div>
                 <div className="product-image">
                    <div className='product'>
                    <img src={serum} alt="lip" />
                    <p>Niacinamide Face Serum </p>
                    <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
                   <p><i class="bi bi-currency-rupee"></i>529</p>
                   <button>Add to Cart</button>
                    </div>
                    <div className='product'>
                    <img src={Facewash} alt="serum" />
                    <p>Foaming Face Wash </p>
                    <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
                   <p><i class="bi bi-currency-rupee"></i>347</p>
                   <button>Add to Cart</button>
                    </div>
                    <div className='product'>
                    <img src={Lipstick} alt="serum" />
                    <p>Matte Lipstick</p>
                    <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
                   <p><i class="bi bi-currency-rupee"></i>199</p>
                   <button>Add to Cart</button>
                    </div>
                    <div className='product'>
                    <img src={WashGel} alt="cream" />
                    <p>Body Wash Shower Gel</p>
                    <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
                   <p><i class="bi bi-currency-rupee"></i>269</p>
                   <button>Add to Cart</button>
                    </div>
            </div>
             <div className='banner-image'>
                    
                    <img src={bannerImage2} alt="Banner" />
                </div>
            <div className='category'>
                <h2>Testimonials</h2>
            </div>
            <div className='testimonals'>
               <img src = {girlImage} alt='girlimage'/>
               <p>"I've tried so skincare products over the years, but nothing compares to [Product Name]! After just a week of using it, my skin feels smoother, more hydrated, and has incrediable glow.  It's lightweight, absorbs quickly, and doesn't leave any greasy residue.  Plus.  I love that it's made with naturak ingrdients - it feels like I'm giving  myskin the love deserves.  Highly recommend this to anyone looking to transform their skincare routine!"</p>
               <p>-Sophia</p>
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
}

export default HomePage;
