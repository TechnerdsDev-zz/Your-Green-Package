import React from "react";
import aboutUs from "../../assets/images/about_us.png";
import education from "../../assets/images/education.png";
import diversity from "../../assets/images/diversity.png";
import success from "../../assets/images/success.png";
import { useNavigate } from "react-router-dom";
export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <div className="main_container padding_top">
      {/* about us section start */}
      {/* about us section start */}
      <div className="about_package">
        <div className="auto_container">
          <div className="about_packageMain">
            <div className="custom_heading">
              <h3>About Us</h3>
              <h2>About Your Green Package</h2>
            </div>
            <div className="ab_packageSec">
              <div className="ab_packageLeft">
                <span>
                  <img src={aboutUs} alt="" />
                </span>
              </div>
              <div className="ab_packageRight">
                <h3>
                  Your Green Package is a licensed Marijuana Courier and B2B
                  Transporter in Massachusetts
                </h3>
                <p>
                  Your Green Package is a leading Massachusetts-based,
                  minority-owned cannabis delivery service. Your Green Package
                  is currently conducting deliveries in the greater Boston,
                  Northampton, and Franklin area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about us section end */}
      {/* our values section start    */}
      <div className="our_values">
        <div className="auto_container">
          <div className="our_valuesMain">
            <div className="process">
              <div className="auto_container">
                <div className="process_inner">
                  <div className="custom_heading">
                    <h2>Our Values</h2>
                  </div>
                  <div className="process_list">
                    <ul>
                      <li>
                        <div className="process_data">
                          <span>
                            <img src={diversity} alt="icon" />
                          </span>
                          <strong>Diversity</strong>
                          <p>
                            We believe that having a diverse workforce is key to
                            our success. It is important that every employee,
                            customer, and stakeholder feel comfortable to be
                            their authentic selves. 72% of staff made up of
                            Women, POC, Veterans, or LGBTQ+.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="process_data">
                          <span>
                            <img src={education} alt="icon" />
                          </span>
                          <strong>Education</strong>
                          <p>
                            The cannabis industry is brand new and constantly
                            changing. We must be willing to constantly educate
                            and re-educate ourselves, employees, and customers
                            on these changes and innovations.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="process_data">
                          <span>
                            <img src={success} alt="icon" />
                          </span>
                          <strong>Success</strong>
                          <p>
                            We strive for success in every aspect of our
                            business. By providing our employees with right
                            tools, training, and education to elevate themselves
                            so they provide a positive experience to our
                            customers.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our values section end    */}
      {/* our services section start */}
      <div className="our_services">
        <div className="auto_container">
          <div className="serives_inner">
            <div className="custom_heading">
              <h2>Our Services</h2>
            </div>
            <div className="services_list">
              <ul>
                <li>
                  <div className="service_data">
                    <title>Cannabis Consumer Delivery Services</title>
                    <ul>
                      <li>
                        <div class="my_btn">
                          <p
                            href=""
                            onClick={() => navigate("../partners")}
                            class="custom_btn"
                          >
                            Our Partners
                          </p>
                        </div>
                      </li>
                      <li>
                        <div class="my_btn">
                          <p
                            href=""
                            onClick={() => navigate("../faqs")}
                            class="custom_btn"
                          >
                            FAQs
                          </p>
                        </div>
                      </li>
                      {/* <li>
                        <div class="my_btn">
                          <a
                            onClick={() => navigate("../blogs")}
                            class="custom_btn"
                          >
                            Our Blogs
                          </a>
                        </div>
                      </li> */}
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="service_data">
                    <title>
                      Business to Business Cannabis Transport Services
                    </title>
                    <ul>
                      <li>
                        <div class="my_btn">
                          <p
                            onClick={() => navigate("../contact")}
                            class="custom_btn"
                          >
                            Request a Transport
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* our services section end */}
    </div>
  );
}
