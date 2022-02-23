import React from "react";
import garden from "../../assets/images/garden.png";
import cammcan from "../../assets/images/cammcan.png";
import mission from "../../assets/images/mission_dispensaries.png";
import neta from "../../assets/images/neta.png";
import rise from "../../assets/images/rise.png";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { arr } from "../../assets/data/Book";
export default function Partners({ isHome }) {
  const [code, setCode] = useState();
  const [despensaries, setDespensaries] = useState("");
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("../garden-remedies-newton");
  };
  const handleChange = (e) => {
    setCode(e.target.value);
  };
  const handleClick = () => {
    const obj = arr.find((el) => el["Zip Code"] == code);
    setDespensaries(obj.Dispensaries);
  };

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
                      Founded in 2013, Garden Remedies is a provider of premium
                      cannabis grown naturally in Central Massachusetts since
                      2016. It grows, creates, tests and packages its products
                      at its cultivation center in Fitchburg, offering its
                      products at their Marlborough, Melrose and Newton
                      adult-use and medical dispensaries, as well as to
                      third-party dispensary partners across the Commonwealth
                    </p>
                    <div className="my_btn">
                      <a onClick={clickHandler} className="custom_btn">
                        Order Now
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="partner_main">
                    <span>
                      <img src={neta} alt="Logo" />
                    </span>
                    <h4>Neta</h4>
                    <p>
                      NETA is a passionate group of patient advocates,
                      experienced professionals, industry leaders and
                      philanthropists. We have come together to improve the
                      quality of patients’ lives through personalized care and
                      the best in the art and science of medical marijuana.
                    </p>
                    <div className="my_btn">
                      <a
                        href="https://www.netacare.org/"
                        className="custom_btn"
                        target="_blank"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="partner_main">
                    <span>
                      <img src={rise} alt="Logo" />
                    </span>
                    <h4>Rise Chelsea</h4>
                    <p>
                      At Rise Dispensaries, we open our doors to the novice and
                      experienced alike with unmatched variety and service, all
                      in a cozy environment to make you feel right at home.
                    </p>
                    <div className="my_btn">
                      <a href="" className="custom_btn">
                        Coming Soon
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="partner_main">
                    <span>
                      <img src={mission} alt="Logo" />
                    </span>
                    <h4>Mission Dispensaries</h4>
                    <p>
                      We think of Mission as a different kind of dispensary, not
                      just filling orders, but fulfilling your needs as an
                      individual. Whether you’re new to the world of cannabis or
                      a seasoned canna-sseur, we got you covered. Over the last
                      5 years, Mission has become one of New England's favorite
                      dispensaries - renowned for crafting unforgettable
                      experiences and award-winning products at sensible prices
                      you won't find anywhere else.
                    </p>
                    <div className="my_btn">
                      <a href="" className="custom_btn">
                        Coming Soon
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="partner_main">
                    <span>
                      <img src={cammcan} alt="Logo" />
                    </span>
                    <h4>CommCan</h4>
                    <p>
                      Dedicated to bringing world-class cannabis products to
                      Massachusetts, CommCan is the Commonwealth's true
                      "home-grown" cannabis company. Family-owned and operated
                      by native Massachusetts residents without any outside
                      consultants, investors or management companies.
                    </p>
                    <div className="my_btn">
                      <a href="" className="custom_btn">
                        Coming Soon
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="custom_search" id="search">
              <label htmlFor="">
                See which Partner delivers to your Zipcode
              </label>
              <div className="custom_searchField">
                <input
                  onChange={handleChange}
                  value={code}
                  type="number"
                  placeholder="Enter Your Zipcode"
                />
                <button onClick={handleClick} className="custom_btn">
                  Search
                </button>
              </div>
              {despensaries && (
                <span>
                  <b>{despensaries}</b> delivers to your area
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
