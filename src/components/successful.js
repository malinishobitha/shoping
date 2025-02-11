import React, { useState } from "react";
import successfulImage from '../images/images.png';
import "./css/successful.css"; 


function Successful() {
    return (
        <div>
            <div className='successful'>
                <h5>Payment</h5>
                <img src={successfulImage} alt="success"/>
            <p>Payment Successful!</p>
            <a href='/'><button>Go To Home Page</button></a>
            </div>
            </div>
    );
};
export default Successful;