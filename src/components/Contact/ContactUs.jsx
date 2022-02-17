import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import map from "../../assets/images/map.png";
import locationMarker from "../../assets/images/location_marker.png";
import { HashLink as Link } from "react-router-hash-link";
const ReactDOM = require("react-dom");
export default function ContactUs() {
  const [state, handleSubmit] = useForm("xgerkbaj");
  if (state.succeeded) {
    return (
      <div>
        <div className="main_container padding_top">
          <div className="contact">
            <div className="contact_inner">
              <div className="custom_heading">
                <h3>Contact us</h3>
                <h2>Get in touch with us</h2>
              </div>
              <div className="contact_main">
                <div className="contact_left">
                  <div className="contact_leftMain">
                    <h2>Thanks for joining!</h2>
                  </div>
                </div>
                <div className="cobtact_right">
                  <figure>
                    <img src={map} alt="Map" />
                  </figure>
                  <div className="location">
                    <div className="location_btn">
                      <span>
                        <img src={locationMarker} alt="Location marker" />
                      </span>
                      <div class="my_btn">
                        <Link to="../partners#search" class="custom_btn">
                          Our Current Address
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="main_container padding_top">
      {/* contact us section start */}
      <div className="contact">
        <div className="contact_inner">
          <div className="custom_heading">
            <h3>Contact us</h3>
            <h2>Get in touch with us</h2>
          </div>
          <div className="contact_main">
            <div className="contact_left">
              <div className="contact_leftMain">
                <h2>Get In Touch With Us</h2>
                {/* <p>
                  All the Lorem Ipsum generators on the Internet tendto repeat
                  predefined chunks as necessary, making this the first
                  truegenerator on the Internet.
                </p> */}
                {/* <div className="contact_data">
                  <ul>
                    <li>
                      <div className="contact_info">
                        <strong>
                          <i className="fa fa-home"></i>
                        </strong>
                        <a href="#">Dummy Address Put here</a>
                      </div>
                    </li>
                    <li>
                      <div className="contact_info">
                        <strong>
                          <i className="fa fa-phone"></i>
                        </strong>
                        <a href="tel:+00-012-264412">+00-012-264412</a>
                        <a href="tel:+00-012-264412">+00-012-264412</a>
                      </div>
                    </li>
                    <li>
                      <div className="contact_info">
                        <strong>
                          <i class="fas fa-globe-asia"></i>
                        </strong>
                        <a href="www.website.com">www.website.com</a>
                        <a href="www.website.com">www.website.com</a>
                      </div>
                    </li>
                  </ul>
                </div> */}
                <div className="contact_form">
                  <form onSubmit={handleSubmit}>
                    <ul>
                      <li className="col_100">
                        <div className="custom_field">
                          {/* <label htmlFor="email">Email Address</label> */}
                          <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                          />
                          <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                          />
                        </div>
                      </li>
                      <li className="col_100">
                        <div className="custom_field">
                          <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                          />
                          <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                          />
                        </div>
                      </li>
                      <li className="col_100">
                        <div className="my_btn">
                          <button
                            type="submit"
                            className="custom_btn"
                            disabled={state.submitting}
                          >
                            Submit
                          </button>
                        </div>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            </div>
            <div className="cobtact_right">
              <figure>
                <img src={map} alt="Map" />
              </figure>
              <div className="location">
                <div className="location_btn">
                  <span>
                    <img src={locationMarker} alt="Location marker" />
                  </span>
                  <div class="my_btn">
                    <Link to="../partners#search" class="custom_btn">
                      Our Current Address
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact us section end */}
    </div>
  );
}
