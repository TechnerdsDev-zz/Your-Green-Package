import React from "react";
import garden from "../../assets/images/garden.png";
import cammcan from "../../assets/images/cammcan.png";
import mission from "../../assets/images/mission_dispensaries.png";
import neta from "../../assets/images/neta.png";
import rise from "../../assets/images/rise.png";
export default function Partners({ isHome }) {
  return (
    <div className={isHome ? "" : "main_container padding_top"}>
      <div className="partner">
        <div className="auto_container">
          <div className="partner_inner">
            <div className="custom_heading">
              <h3>Our Partners</h3>
              <h2>Our Partners Services Are Live!</h2>
            </div>
            <div className="partner_list">
              <ul>
                <li>
                  <div className="partner_main">
                    <span>
                      <img src={garden} alt="Logo" />
                    </span>
                    <h4>Garden Remedies</h4>
                    <p>
                      Your Green Package is making Cannabis Deliveries in the
                      Greater Boston, Newton, and Northamptonarea.
                    </p>
                    <div className="my_btn">
                      <a href="" className="custom_btn">
                        Join our List
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="partner_main">
                    <span>
                      <img src={neta} alt="Logo" />
                    </span>
                    <h4>Garden Remedies</h4>
                    <p>
                      Your Green Package is making Cannabis Deliveries in the
                      Greater Boston, Newton, and Northamptonarea.
                    </p>
                    <div className="my_btn">
                      <a href="" className="custom_btn">
                        Join our List
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="partner_main">
                    <span>
                      <img src={rise} alt="Logo" />
                    </span>
                    <h4>Garden Remedies</h4>
                    <p>
                      Your Green Package is making Cannabis Deliveries in the
                      Greater Boston, Newton, and Northamptonarea.
                    </p>
                    <div className="my_btn">
                      <a href="" className="custom_btn">
                        Join our List
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="partner_main">
                    <span>
                      <img src={mission} alt="Logo" />
                    </span>
                    <h4>Garden Remedies</h4>
                    <p>
                      Your Green Package is making Cannabis Deliveries in the
                      Greater Boston, Newton, and Northamptonarea.
                    </p>
                    <div className="my_btn">
                      <a href="" className="custom_btn">
                        Join our List
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="partner_main">
                    <span>
                      <img src={cammcan} alt="Logo" />
                    </span>
                    <h4>Garden Remedies</h4>
                    <p>
                      Your Green Package is making Cannabis Deliveries in the
                      Greater Boston, Newton, and Northamptonarea.
                    </p>
                    <div className="my_btn">
                      <a href="" className="custom_btn">
                        Join our List
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="custom_search">
              <label htmlFor="">
                See which Partner delivers to your Zipcode
              </label>
              <div className="custom_searchField">
                <input type="text" placeholder="Enter Your Zipcode" />
                <button className="custom_btn">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
