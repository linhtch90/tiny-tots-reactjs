import "./style/home.css";
import React, { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import carousel1 from "./images/carousel-1.jpg";
import carousel2 from "./images/carousel-2.jpg";
import carousel3 from "./images/carousel-3.jpg";
import carousel4 from "./images/carousel-4.jpg";

import customer1 from "./images/customer-1.jpg";
import customer2 from "./images/customer-2.jpg";
import customer3 from "./images/customer-3.jpg";

import featuresSaving from "./images/features-saving.jpg";
import featuresCashback from "./images/features-cashback.jpg";
import featuresVibe from "./images/features-vibe.jpg";
import featuresSale from "./images/features-sale.jpg";

import instagram1 from "./images/instagram-1.jpg";
import instagram2 from "./images/instagram-2.jpg";
import instagram3 from "./images/instagram-3.jpg";
import instagram4 from "./images/instagram-4.jpg";
import instagram5 from "./images/instagram-5.jpg";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <div>
      {/* Beginning Carousel */}
      <section id="carousel-images">
        <div className="container-fluid">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={carousel1}
                  alt="carousel-1"
                />
                <div className="carousel-caption d-none d-md-block">
                  <p className="carousel-tip">
                    Browse and shop the newest designs at great prices
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={carousel2}
                  alt="carousel-2"
                />
                <div className="carousel-caption d-none d-md-block">
                  <p className="carousel-tip">
                    Great service, love product and reasonable prices
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={carousel3}
                  alt="carousel-3"
                />
                <div className="carousel-caption d-none d-md-block">
                  <p className="carousel-tip">Speedy and free 24/7 delivery</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={carousel4}
                  alt="carousel-4"
                />
                <div className="carousel-caption d-none d-md-block">
                  <p className="carousel-tip">Happy shopping and save time</p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>

      {/* Impressive Features */}
      <section id="site-features">
        <div className="container">
          <div className="d-flex w-100 justify-content-center align-items-center">
            <h1 className="features-title" data-aos="fade-up">
              Why Are We Loved?
            </h1>
          </div>
          <div
            className="d-flex flex-column justify-content-center align-items-center features-container"
            data-aos="zoom-in"
          >
            {/* Features Row 1 */}
            <div className="d-flex flex-row justify-content-between align-items-center features-row">
              {/* Feature 1 */}
              <div className="d-flex flex-row justify-content-center align-items-center features-item">
                <img
                  src={featuresSaving}
                  alt="features-horse"
                  className="features-image"
                />
                <div>
                  <p className="features-item-title">Saving Everyday</p>
                  <p className="features-item-content">
                    Saving money is not about buying bigger things. It is about
                    taking care of your family
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="d-flex flex-row justify-content-center align-items-center features-item">
                <img
                  src={featuresSale}
                  alt="features-trolley"
                  className="features-image"
                />
                <div>
                  <p className="features-item-title">Half Price Sale</p>
                  <p className="features-item-content">
                    Anyone who tells you money cannot buy happiness does not
                    know where to shop
                  </p>
                </div>
              </div>
            </div>
            {/* Features Row 2 */}
            <div className="d-flex flex-row justify-content-between align-items-center features-row">
              {/* Feature 3 */}
              <div className="d-flex flex-row justify-content-center align-items-center features-item">
                <img
                  src={featuresCashback}
                  alt="features-horse"
                  className="features-image"
                />
                <div>
                  <p className="features-item-title">15% Cash Back</p>
                  <p className="features-item-content">
                    Up to 15% cash back in the first 30 days. Be confident as
                    much as possible with your choices
                  </p>
                </div>
              </div>
              {/* Feature 4 */}
              <div className="d-flex flex-row justify-content-center align-items-center features-item">
                <img
                  src={featuresVibe}
                  alt="features-trolley"
                  className="features-image"
                />
                <div>
                  <p className="features-item-title">Comfort Vibe Play</p>
                  <p className="features-item-content">
                    Easy to access and comfortable features with Vibe Play is
                    now available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave - Free Shipping */}
      <section id="wave">
        <div className="container-fluid wave-background" data-aos="fade-right">
          <div className="container">
            <p className="wave-title" data-aos="fade-right">
              <i className="fas fa-shipping-fast"></i> Let us worry about
              shipping!
              <i className="fas fa-shipping-fast"></i>
            </p>
            <p className="wave-content" data-aos="fade-right">
              Order any thing and we will send it over for free in under 24
              hours
            </p>
          </div>
        </div>
      </section>

      {/* Customer Review */}
      <section id="customer-review">
        <div className="container">
          <h1 className="features-title" data-aos="fade-up">
            See What Our Amazing Customers Have To Say
          </h1>
        </div>
        <div className="container">
          <div
            className="d-flex flex-row justify-content-between align-items-center customer-review-container"
            data-aos="zoom-in"
          >
            {/* Customer 1 */}
            <div className="d-flex flex-column justify-content-center align-items-center customer-review-card">
              <img
                src={customer1}
                alt="customer-1"
                className="customer-image"
              />
              <p className="customer-name">Olivia H.</p>
              <p className="customer-review">
                <i className="fas fa-quote-left"></i>
                <i>
                  I was informed by phone when I could expect my item to be
                  delivered and the product I wanted arrived in perfect
                  condition, very happy with the service and my overall
                  purchase.
                </i>
              </p>
            </div>
            {/* Customer 2 */}
            <div className="d-flex flex-column justify-content-center align-items-center customer-review-card">
              <img
                src={customer2}
                alt="customer-2"
                className="customer-image"
              />
              <p className="customer-name">Sophia K.</p>
              <p className="customer-review">
                <i className="fas fa-quote-left"></i>
                <i>
                  Places my order but the item was not in stock but the customer
                  service team kept me well informed and delivery was arranged
                  for a Saturday morning which was great.
                </i>
                >
              </p>
            </div>
            {/* Customer 3 */}
            <div className="d-flex flex-column justify-content-center align-items-center customer-review-card">
              <img
                src={customer3}
                alt="customer-3"
                className="customer-image"
              />
              <p className="customer-name">Amelia T.</p>
              <p className="customer-review">
                <i className="fas fa-quote-left"></i>
                <i>
                  The product I bought was cheaper on Tiny Tots than any other
                  website I found. The delivery service was great (within 24
                  hours). I am a Very Happy Customer and would recommend Tiny
                  Tots to friends and family.
                </i>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section id="instagram">
        <div className="container-fluid">
          <div className="instagram-background" data-aos="fade-left">
            <p className="wave-title" data-aos="fade-left">
              Our Instagram
            </p>
            <div
              className="d-flex flex-row justify-content-center align-items-center instagram-container"
              data-aos="fade-left"
            >
              <img
                alt="instagram-1"
                src={instagram1}
                className="instagram-item"
                data-aos="fade-left"
              />
              <img
                alt="instagram-2"
                src={instagram2}
                className="instagram-item"
                data-aos="fade-left"
              />
              <img
                alt="instagram-3"
                src={instagram3}
                className="instagram-item"
                data-aos="fade-left"
              />
              <img
                alt="instagram-4"
                src={instagram4}
                className="instagram-item"
                data-aos="fade-left"
              />
              <img
                alt="instagram-5"
                src={instagram5}
                className="instagram-item"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about-us" data-aos="flip-up">
        <div className="container">
          <h1 className="features-title">About Tiny Tots</h1>
        </div>
        <div className="container about-content">
          <p>
            Tiny Tots Kids was born from a desire to combine a love for making
            beautiful products by hand and offering them at affordable prices.
            Our clothing line is globally sourced with a strong Bali influence.
          </p>
          <p>
            Inspired by the colors of life and the curious nature of childhood,
            Tiny Tots Kids has set out to make colorful, happy and vibrant kids
            clothing all hand crafted in Bali, the Island of the Gods.
          </p>
          <p>
            We are currently offering kids summer clothing for ages Newborn to
            13 years and hoping to extend the range to older ages and colder
            seasons as the brand is growing.
          </p>
          <p>
            We hope your little one enjoys wearing our products as much as we
            love making them and we are looking forward to sharing photos,
            stories and of course our products with you.
          </p>
          <p>Much Love, TinyTots-Kids Fairies x</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
