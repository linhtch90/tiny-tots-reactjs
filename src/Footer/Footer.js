import "./style/footer.css";
import logo from "./images/tiny-tots-logo.jpg";
import footerBackground from "./images/footer-background.jpg";

function Footer() {
  return (
    // Footer
    <section id="footer">
      <div className="container-fluid footer-background">
        <div className="container">
          <div className="d-flex flex-row justify-content-center align-items-center">
            {/* Shop */}
            <div className="col-sm-4 justify-content-begin align-items-center">
              <p className="footer-header">Shop</p>
              <ul className="footer-list">
                <li>
                  <a href="" className="footer-link">
                    Sale
                  </a>
                </li>
                <li>
                  <a href="" className="footer-link">
                    Baby
                  </a>
                </li>
                <li>
                  <a href="" className="footer-link">
                    Boy Clothing
                  </a>
                </li>
                <li>
                  <a href="" className="footer-link">
                    Girl Clothing
                  </a>
                </li>
                <li>
                  <a href="" className="footer-link">
                    Formal Wear
                  </a>
                </li>
              </ul>
            </div>
            {/* // Support */}
            <div className="col-sm-4 justify-content-begin align-items-center">
              <p className="footer-header">Support</p>
              <ul className="footer-list">
                <li>
                  <a href="" className="footer-link">
                    Custom Order
                  </a>
                </li>
                <li>
                  <a href="" className="footer-link">
                    Delivery
                  </a>
                </li>
                <li>
                  <a href="" className="footer-link">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="" className="footer-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Footer Logo */}
            <div className="col-sm-4 justify-content-center align-items-center">
              <img alt="footer-logo" src={logo} className="footer-logo" />
              <p className="footer-info">
                <b>Address:</b> 1 Phan Dang Luu Street, Hai Chau District,
                Danang City, Vietnam
              </p>
              <p className="footer-info">
                <b>Hotline:</b> +84 236 3681 666
              </p>
              <p className="footer-info">
                <b>Email:</b> info@tinytots.com
              </p>
              <p className="footer-icon">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-instagram-square"></i>
                <i className="fab fa-youtube-square"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
