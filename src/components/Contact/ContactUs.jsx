import React from "react";
const ReactDOM = require("react-dom");
const WorldMap = require("react-world-map");
export default function ContactUs() {
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
                <p>
                  All the Lorem Ipsum generators on the Internet tendto repeat
                  predefined chunks as necessary, making this the first
                  truegenerator on the Internet.
                </p>
                <div className="contact_data">
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
                </div>
                <div className="contact_form">
                  <form action="">
                    <title>Send messege</title>
                    <ul>
                      <li>
                        <div className="custom_field">
                          <input name="name" type="text" placeholder="Name" />
                        </div>
                      </li>
                      <li>
                        <div className="custom_field">
                          <input
                            type="email"
                            name="phone"
                            placeholder="E-mail"
                          />
                        </div>
                      </li>
                      <li className="col_100">
                        <div className="custom_field">
                          <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </li>
                      <li className="col_100">
                        <div className="my_btn">
                          <a href="" className="custom_btn">
                            Send
                          </a>
                        </div>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            </div>
            <div className="cobtact_right">
              <WorldMap selected={"sa"} onSelect={(continent) => {}} />
            </div>
          </div>
        </div>
      </div>
      {/* contact us section end */}
    </div>
  );
}
