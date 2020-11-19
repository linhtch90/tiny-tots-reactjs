import React, { useState, useEffect } from "react";
import "./style/products.css";

import AOS from "aos";
import "aos/dist/aos.css";

import johnson from "./images/brands/johnson.png";
import babycomfy from "./images/brands/babycomfy.png";
import kids from "./images/brands/kids.png";
import lego from "./images/brands/lego.png";
import pamper from "./images/brands/pamper.png";
import pigeon from "./images/brands/pigeon.png";

import ProductCard from "../ProductCard/ProductCard.js";

function Products() {
  const [productList, setProductList] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  useEffect(function fetchData() {
    fetch("./product-data.json")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
        setOriginalList(data);
      });
  },[]);

  // function filterCategory(category) {
  //   let filterList = productList.filter(function (item) {
  //     return item.Category === category;
  //   });
  //   if (filterList.length !== productList.length) {
  //     setProductList(filterList);
  //   }
  // }

    // function allProduct() {
    // 	if (productList.length < originalList.length) {
    // 	    setProductList(originalList);
    // 	}
    // }

  return (
    <div>
      {/*Products page*/}
      <section id="product-brand-categories">
        {/*Brands*/}
        <div className="container-fluid brand-background">
          <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="brand-title">
                <p>BRANDS</p>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center brand-container">
                <img src={johnson} alt="Johnson" className="brand-logo" />
                <img src={babycomfy} alt="BabyComfy" className="brand-logo" />
                <img src={kids} alt="Kids" className="brand-logo" />
                <img src={lego} alt="Logo" className="brand-logo" />
                <img src={pamper} alt="Pamper" className="brand-logo" />
                <img src={pigeon} alt="Pigeon" className="brand-logo" />
              </div>
            </div>
          </div>
        </div>
        {/*Categories*/}
        <div className="container-fluid category-background">
          <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="brand-title">
                <p>CATEGORY</p>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center brand-container">
                <button
                  type="button"
                  className="category-button"
                  
                >
                  BABY CARE
                </button>
                <button type="button" className="category-button">
                  FASHION
                </button>
                <button type="button" className="category-button">
                  TOYS
                </button>
                <button type="button" className="category-button">
                  WELLNESS AND HYGIENE
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*Show All*/}
        <div className="container-fluid category-background">
          <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="brand-title">
                  <button type="button" className="category-button" >
                  OUR PRODUCTS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Show products */}
      <section id="show-product">
        <div className="container">
          <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
            {productList &&
              productList.map((productItem) => {
                return (
                  <div className="product-card">
                    <div className="d-flex flex-column product-card-column">
                      <img
                        src={productItem.Image}
                        alt="product-photo"
                        className="justify-self-center align-self-center product-photo"
                      />
                      <p className="product-name">{productItem.Name}</p>
                      <p className="product-category">
                        Category: {productItem.Category}
                      </p>
                      <p className="product-category">
                        Brand: {productItem.Brand}
                      </p>
                      <p className="product-price">
                        Price: {productItem.Price} USD
                      </p>
                      <div className="d-flex flex-row justify-content-between align-items-center product-button-container">
                        <button>Add to Cart</button>
                        <button>Add to Compare</button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
