import React, { useState, useEffect } from "react";
import "./style/product-card.css";

import AOS from "aos";
import "aos/dist/aos.css";

function ProductCard(props) {

    return (
	<div>
	    {/* Show product card*/}
	    
		<div className="product-card-container">
		    <div className="d-flex flex-column product-card-column">
			<img src={props.product.Image} alt="product-photo" className="product-photo" />
			    <p className="product-name">{props.product.Name}</p>
			<p className="product-category">Category: {props.product.Category}</p>
			<p className="product-category">Brand: {props.product.Brand}</p>
			<p className="product-price">Price: {props.product.Price} USD</p>
			<div className="d-flex flex-row justify-content-between align-items-center product-button-container">
			    <button>Add to Cart</button>
			    <button>Add to Compare</button>
			</div>
		    </div>		    
		</div>
	    
	</div>
    );
}

export default ProductCard;
