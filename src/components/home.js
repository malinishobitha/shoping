import React from 'react';
import bannerImage from '../images/LA_Girl_header.jpg';
import skincare from '../images/skincare.png';
import HairImage from '../images/hair.png';
import Makeup from '../images/makeup.png';
import Bath from '../images/image 2.png';
import Group from '../images/Frame 12.png';
import Serum from '../images/Group 517.png';
import centellaSerum from '../images/Group 518.png';
import cream from '../images/Group 519.png';
import './css/home.css';
import detImage from '../images/girlimage.png';
import bannerImage1 from '../images/image 10.png';
import image from '../images/Group 518.png'
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
                <div className="banner-image">
                <img src={bannerImage1} alt="cream" />
                </div>
                <div className="category">
                    <h2>New Arrivals</h2>
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
</div>
        </div>
    );
}

export default HomePage;
