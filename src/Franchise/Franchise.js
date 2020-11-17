import React, { useState, useEffect } from "react";
import "./style/franchise.css";

import AOS from "aos";
import "aos/dist/aos.css";

import opportunity1 from "./images/opptunity-1.png";
import opportunity2 from "./images/opptunity-2.png";
import opportunity3 from "./images/opptunity-3.png";
import opportunity4 from "./images/opptunity-4.png";


function Franchise() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <div>
      {/* Franchise Opportunities Near You */}
      <section id="franchise-opportunities">
        <div className="container">
          <h1 className="features-title" data-aos="fade-up">
            Offering Franchise Opportunities Near You
          </h1>
          <p className="features-content" data-aos="zoom-in">
            Have you ever imagined owning your very own fashion boutique but
            were afraid to take the plunge? Have you been looking for the chance
            to open your own boutique, but you were not sure if you would have
            all the support you need to succeed? Have you shopped at an Tiny
            Tots franchise and loved it so much you wanted to open your very
            own?
          </p>
        </div>

        <div className="container-fluid">
          <div className="container">
            <div className="d-flex flex-row justify-content-between align-items-center opportunity-container">
              {/* Card 1 */}
              <div
                className="d-flex flex-column justifi-content-center align-items-center opportunity-card-1"
                data-aos="flip-left"
              >
                <img
                  alt="opportunity-1"
                    src={opportunity1}
                  className="opportunity-photo"
                />
                <p className="opportunity-card-content">
                  Tiny Tots started in 2007, but our commitment to bringing
                  beautiful, quality pieces to our customers started long before
                  that.
                </p>
              </div>
              {/* Card 2 */}
              <div
                className="d-flex flex-column justifi-content-center align-items-center opportunity-card-2"
                data-aos="flip-left"
              >
                <img
                  alt="opportunity-2"
                  src={opportunity2}
                  className="opportunity-photo"
                />
                <p className="opportunity-card-content">
                  Stylish products, an affordable investment, and worldwide
                  brand exposure make Tiny Tots the franchise opportunity to
                  beat.
                </p>
              </div>
              {/* Card 3 */}
              <div
                className="d-flex flex-column justifi-content-center align-items-center opportunity-card-3"
                data-aos="flip-left"
              >
                <img
                  alt="opportunity-3"
                  src={opportunity3}
                  className="opportunity-photo"
                />
                <p className="opportunity-card-content">
                  Use your skills to invest in yourself and the women in your
                  community, and empower yourself to be in control of your
                  future.
                </p>
              </div>
              {/* Card 4 */}
              <div
                className="d-flex flex-column justifi-content-center align-items-center opportunity-card-4"
                data-aos="flip-left"
              >
                <img
                  alt="opportunity-4"
                  src={opportunity4}
                  className="opportunity-photo"
                />
                <p className="opportunity-card-content">
                  Fill out the form, learn the ropes, complete the paperwork,
                  and open your store. Our ten-step process for franchising
                  gives you all the tools you need to get started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One of the top fashion franchise */}
      <section id="top-franchise">
        <div className="container">
          <h1 className="features-title" data-aos="fade-in">
            One of the Top Children Clothing Franchises
          </h1>
          <p className="features-content" data-aos="zoom-in">
            We are extremely proud to help our franchisees feel empowered to
            <br />
            live the lives they were meant to live and when you join our brand
            family, you can too!{" "}
          </p>
        </div>
        {/* Franchise registration form */}
        <div
          className="container-fluid franchise-registration-background"
          data-aos="fade-right"
        >
          <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="features-title" data-aos="fade-up">
                Franchise Registration
              </h1>
              <p className="franchise-content" data-aos="zoom-in">
                Imagine owning your own boutique!
              </p>
              <form
                id="franchise-registration-form"
                action=""
                className="d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-left"
              >
                <input
                  type="text"
                  className="form-control"
                  id="franchiseFirstName"
                  aria-describedby="franchiseFirstName"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  id="franchiseLastName"
                  aria-describedby="franchiseLastName"
                  placeholder="Last Name"
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  id="franchiseAddress"
                  aria-describedby="franchiseAddress"
                  placeholder="Address"
                  required
                />
                <input
                  type="email"
                  className="form-control"
                  id="franchiseEmail"
                  aria-describedby="franchiseEmail"
                  placeholder="Email"
                  required
                />
                <button type="submit" className="btn franchise-registration-button">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Franchise;
