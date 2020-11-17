import "./style/header.css";
import logo from "./images/tiny-tots-logo.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    // BEGIN Navigation bar
    <section id="navigation">
      <nav className="navbar">
        <div className="container">
          <div className="d-flex flex-row align-items-center justify-content-center w-100">
            <img className="logo" alt="logo" src={logo} />
            <div className="d-flex flex-column align-items-center justify-content-center w-100">
              <div className="d-flex flex-row align-items-center justify-content-end w-100">
                <input
                  className="form-control mr-sm-4 w-25"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button type="button" className="btn login-button mr-sm-4">
                  Join Us
                </button>
                <i className="fas fa-shopping-cart cart-icon"></i>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-end w-100">
                
                  <div className="navbar">
                    <ul className="navbar-nav d-flex flex-row">
                      <li className="nav-item ml-sm-5">
                        <Link to="/">
                          <a className="nav-link">Home</a>
                        </Link>
                      </li>
                      <li className="nav-item ml-sm-5">
                        <Link to="/products">
                          <a className="nav-link">Products</a>
                        </Link>
                      </li>
                      <li className="nav-item ml-sm-5">
                        <Link to="/news">
                          <a className="nav-link">News</a>
                        </Link>
                      </li>
                      <li className="nav-item ml-sm-5">
                        <Link to="/franchise">
                          <a className="nav-link">
                            Franchise
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item ml-sm-5">
                        <Link to="/contactus">
                          <a className="nav-link">
                            Contact Us
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
