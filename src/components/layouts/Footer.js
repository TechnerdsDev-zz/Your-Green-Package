import React from "react";
import footerLogo from "../../assets/images/footer_logo.png";
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer_top">
          <div className="auto_container">
            <div className="footer_topInner">
              <div className="footer_firstDiv">
                <div className="footer_logo">
                  <a href="#">
                    <img src={footerLogo} alt="logo" />
                  </a>
                </div>
              </div>
              <div className="footer_secondDiv footer_list">
                <title>CONTACT US</title>
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      Info@yourgreenpackage.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+(002) 234-56-678">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                      +(002) 234-56-678
                    </a>
                  </li>
                  <li>
                    <a href="mailto:Info@gmail.com">
                      <i className="fa fa-envelope"></i>Info@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer_thirdDiv footer_list">
                <title>FOLLOW US</title>
                <div className="follow_us">
                  <ul>
                    <li>
                      <a href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
