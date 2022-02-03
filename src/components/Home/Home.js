import React, { useRef } from "react";
import product from "../../assets/images/product.png";
import order from "../../assets/images/order.png";
import delivery from "../../assets/images/delivery.png";
import Testimonial from "../elements/Testimonial";
import Blogs from "../elements/Blogs";
import Banner from "../elements/Banner";
import Partners from "../elements/Partners";
import axios from "axios";
export default function Home() {
  const joinList = useRef(null);
  const executeScroll = () => joinList.current.scrollIntoView();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target[0].value, e.target[1].value);
    const obj = {
      name: e.target[0].value,
      phone: e.target[1].value,
    };
    await axios({
      method: "POST",
      url: "https://formspree.io/f/mleapgkq",
      data: obj,
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="main_container padding_top">
      {/* banner section start */}
      <Banner scroller={executeScroll} />
      {/* banner section end */}
      {/* partner section start */}
      <Partners isHome={true} />
      {/* partner section end */}
      {/* work process section start */}
      <div className="process">
        <div className="auto_container">
          <div className="process_inner">
            <div className="custom_heading">
              <h3>Work Process</h3>
              <h2>How Our Process Work</h2>
            </div>
            <div className="process_list">
              <ul>
                <li>
                  <div className="process_data">
                    <span>
                      <img src={product} alt="icon" />
                    </span>
                    <strong>Select Products Instead</strong>
                    <p>
                      Sign up and make a profile with OrderReady or skip it and
                      log in with your social account - It’s only for one time!
                    </p>
                  </div>
                </li>
                <li>
                  <div className="process_data">
                    <span>
                      <img src={delivery} alt="icon" />
                    </span>
                    <strong>Select Your Delivery Window</strong>
                    <p>
                      Simply Login every time to enjoy a personalized experience
                      like never before.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="process_data">
                    <span>
                      <img src={order} alt="icon" />
                    </span>
                    <strong>Order Now</strong>
                    <p>
                      Whether it’s ordering food, booking events, or finding
                      things that matter to you, OrderReady lets you do all that
                      and more!
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* work process section end */}
      {/* blogs section start */}
      <Blogs />
      {/* blogs section end */}
      {/* testimonials section start */}
      <Testimonial />
      {/* testimonials section end */}
      {/* join list section start */}
      <div ref={joinList} className="join">
        <div className="auto_container">
          <div className="join_inner">
            <div className="join_main">
              <div className="custom_heading">
                <h2>Join The List</h2>
              </div>
              <div className="custom_form">
                <form onSubmit={handleSubmit} action="">
                  <ul>
                    <li>
                      <div className="custom_field">
                        <input
                          name="name"
                          type="text"
                          placeholder="Your Name"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="custom_field">
                        <input
                          type="number"
                          name="phone"
                          placeholder="Your Cellphone Number"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="my_btn">
                        <input
                          type="submit"
                          className="custom_btn"
                          value="Submit"
                          name=""
                          id=""
                        />
                      </div>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* join list section end */}
    </div>
  );
}
