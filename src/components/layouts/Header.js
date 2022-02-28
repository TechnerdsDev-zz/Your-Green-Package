import mainLogo from "../../assets/images/logo.png";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Header() {
  const location = useLocation();
  const [show, setShow] = useState(true);
  const handleToggle = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    if (window.innerWidth < 767) {
      setShow(false);
    }
  }, []);
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
            {show ? (
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
                      <NavLink to="partners" className="custom_btn">
                        Order Now
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            ) : (
              ""
            )}

            <div class={show ? "burger active" : "burger"}>
              <div onClick={handleToggle} class="strip burger-strip">
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
