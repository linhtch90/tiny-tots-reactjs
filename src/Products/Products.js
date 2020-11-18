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

function Products() {
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
                <button type="button" className="category-button">
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
      </section>
    </div>
  );
}

export default Products;
