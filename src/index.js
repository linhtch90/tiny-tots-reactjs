import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./index.css";
// import App from './App';
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import Home from "./Home/Home.js";
import Franchise from "./Franchise/Franchise.js";
import ContactUs from "./ContactUs/ContactUs.js";

import reportWebVitals from "./reportWebVitals";

import AOS from "aos";
import "aos/dist/aos.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/franchise">
          <Franchise />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
