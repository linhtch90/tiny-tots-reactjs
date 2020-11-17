import React, { useState, useEffect } from "react";
import "./style/contactus.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Script from '@gumgum/react-script-tag';

/*global google*/

const google = window.google;

function ContactUs() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
    
  return (
    <div>
      {/* SALES INFOR */}
      <section id="sales-infor">
        <div className="container">
          <div className="d-flex flex-column w-100 justify-content-center align-items-center">
            <h1 className="sales-title" data-aos="fade-up">
              REACH OUR TEAM
            </h1>
            <p className="sales-content" data-aos="zoom-in">
              TinyTots Retail was founded to help parents find everything they
              need for their children under one roof. We operates multi-brand
              kids outlets for all needs and occasions for children aged 0-12
              years.
            </p>
            <p className="sales-content" data-aos="zoom-in">
              We are a community of like-minded professionals who despite our
              differentiated backgrounds, share the goal and the passion to
              supply primary baby and child products.
            </p>
            <p className="sales-content" data-aos="zoom-in">
              Our team is comprised of dedicated development professionals with
              a rich understanding of the unique context of the geographies
              where we work, alongside deep baby products expertise.
            </p>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center support-container">
            <div className="d-flex flex-row justify-content-around align-items-center support-row">
              {/* Support 1 */}
              <div
                className="d-flex flex-column justify-content-center align-items-center support-item"
                data-aos="flip-left"
              >
                <h2 className="support-title">Talk to Sales</h2>
                <p className="support-content">
                  Our experts love to answer questions. Find the right solution
                  for you. Explain options for pricing or every else about
                  products.
                </p>
                <h3>
                  <i className="fas fa-phone-alt"></i>
                  <span className="badge badge-secondary">012 345 678 99</span>
                </h3>
              </div>
              {/* Support 2 */}
              <div
                className="d-flex flex-column justify-content-center align-items-center support-item"
                data-aos="flip-left"
              >
                <h2 className="support-title">Customer Support</h2>
                <p className="support-content">
                  Already a customer? If you are encountering a technical or
                  payment issue, our customer support team will be happy to
                  assist you.
                </p>
                <button type="button" className="btn btn-outline-danger">
                  <a className="mailtoui email-sp" href="mailto:info@tinytots.com">
                    Email Support
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEADQUATERS */}
      <section id="headquaters">
        <div className="container">
          <div className="d-flex w-100 justify-content-around">
            <div className="d-flex flex-column headquaters-item" data-aos="zoom-in">
              <h2 className="headquaters-title">Headquaters</h2>
              <p className="headquaters-content">
                <b>Address:</b> 1 Phan Dang Luu Street, Hai Chau District,
                Danang City, Vietnam (Geolocation API).
              </p>
              <p className="headquaters-content">
                <b>Opening hours: </b> Mon - Fri 11.00 -19.00 , Saturday 11.00 -
                15.00
              </p>
              <p className="headquaters-content">
                <b>Phone:</b> +84 236 3681 666
              </p>
              <p className="headquaters-content">
                <b>Email:</b>
                <a className="mailtoui" href="mailto:info@tinytots.com">
                  info@tinytots.com
                </a>
              </p>
              <p>
                <span
                  className="badge badge-pill badge-danger"
                  style="margin-top: 4rem"
                >
                  Or you can visit us at:
                </span>
              </p>
              <p className="footer-icon">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-instagram-square"></i>
                <i className="fab fa-youtube-square"></i>
              </p>
            </div>
            <div id="headquaters-map"></div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <div className="container" data-aos="fade-left">
        <div id="accordion">
          <div className="card">
            <div className="card-header">
              <a className="card-link">
                Corporate Inquiries: You can reach our corporate headquarters.
              </a>
            </div>
            <div id="collapseOne" className="collapse show">
              <div className="card-body">
                Please be sure to include <b>Attention</b> information, so we
                know which department to direct your inquiry to.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STORIES */}
      <section id="stores">
        <div className="container">
          <h2 className="stores-title" data-aos="zoom-out">
            Want to Find a Nearby Store?
          </h2>

          <div className="d-flex justify-content-around align-items-center stores-list-container">
            <div className="stores-map-container">
              <div id="stores-map">map</div>
            </div>
            <div data-aos="zoom-out">
              <h2 style="padding-left: 1rem">List of Stores</h2>
              {/* Store 1 */}
              <div className="store-add">
                <h4>Store 1:</h4>
                <p>
                  Address: 28 Nui Thanh, Hoa Thuan ong, Hai Chau, Tp. Da Nang
                </p>
                <p>Phone: +84 578 3123 324</p>
                <p>
                  Email:
                  <a className="mailtoui" href="mailto:info@tinytotsdn.com">
                    info@tinytotsdn.com
                  </a>
                </p>
              </div>
              {/* Store 2 */}
              <div className="store-add">
                <h4>Store 2:</h4>
                <p>
                  Address: 143 Hoang Dieu 2, Linh Chieu, Thu uc, Tp. Ho Chi Minh
                </p>
                <p>Phone: +84 578 3123 324</p>
                <p>
                  Email:
                  <a className="mailtoui" href="mailto:info@tinytotshcm.com">
                    info@tinytotshcm.com
                  </a>
                </p>
              </div>
              {/* Store 3 */}
              <div className="store-add">
                <h4>Store 3:</h4>
                <p>
                  Address: 52 Nguyen Khanh Toan, Quan Hoa, Cau Giay, Tp. Ha Noi
                </p>
                <p>Phone: +84 578 3123 324</p>
                <p>
                  Email:
                  <a className="mailtoui" href="mailto:info@tinytotshn.com">
                    info@tinytotshn.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
	  
      </section>

	{/* Import script file with react-script-tag */}
	{/* <Script src="https://polyfill.io/v3/polyfill.min.js?features=default" />
	<Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlLbg_xX82eONbEfGGuQuP-THVaMgqDZk&callback=getlocation&libraries=&v=weekly" defer />
	<Script src="./js/geolocation.js" />
	<Script src="./js/stores-map.js" />
	<Script src="https://cdn.jsdelivr.net/npm/mailtoui@1.0.3/dist/mailtoui-min.js" /> */}
	
    </div>
  );
}

export default ContactUs;
