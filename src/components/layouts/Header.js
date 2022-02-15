import mainLogo from "../../assets/images/logo.png";
import * as React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Header() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <header>
      <div className="header">
        <div className="auto_container">
          <div className="header_inner">
            <div className="logo">
              <NavLink to="/">
                <img src={mainLogo} alt="Logo" />
              </NavLink>
            </div>
            <nav>
              <div className="main_nav">
                <ul>
                  <li>
                    <NavLink to="/" activeClassName="active">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="about">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="faqs" activeClassName="active">
                      FAQ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="partners" activeClassName="active">
                      Partners
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="contact">Contact Us</NavLink>
                  </li>

                  <li>
                    <NavLink to="garden-remedies-newton" className="custom_btn">
                      Order Now
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            <div class="burger">
              <div class="strip burger-strip">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
