import React from "react";
import sliderImg from "../../assets/images/dummy.png";
import Slider from "react-slick";
export default function Testimonial() {
  const settings = {
    infinite: true,
    // centerMode: true,
    centerClass: true,
    center: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // initialSlide: 1,    
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="testimonial">
      <div className="auto_container">
        <div className="testimonial_inner">
          <div className="custom_heading">
            <h3>Testimonial</h3>
            <h2>Your Testimonial</h2>
          </div>
          <Slider {...settings}>
            <div>
              <div className="slider_main">
                {/* <figure>
                  <img src={sliderImg} alt="Profile Photo" />
                </figure> */}
                <b>N</b>
                <div className="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
                <strong>Naquan C</strong>
                <p>
                  I used the delivery service and the service was right on time, friendly and professional. It's so convenient I will definitely use again. Product quality was excellent.                
                </p>
              </div>
            </div>
            <div>
              <div className="slider_main">
                {/* <figure>
                  <img src={sliderImg} alt="Profile Photo" />
                </figure> */}
                <b>A</b>
                <div className="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
                <strong>Alyson C</strong>
                <p>
                  Package was delivered quickly and without incident. The deliverer came up three floors to my very apartment door so I didn't even have to go down to the lobby (although I did on accident anyways). The actual handoff was very simple and easy and the product was exactly as expected! I will definitely be using them in the future for my last-minute needs. Great that they operate outside of the city so that I can use it!
                </p>
              </div>
            </div>
            <div>
              <div className="slider_main">
                {/* <figure>
                  <img src={sliderImg} alt="Profile Photo" />
                </figure> */}
                <b>K</b>
                <div className="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
                <strong>Ken K</strong>
                <p>
                As easy as it gets. Secure, professional, on time, tracking app was accurate, and service was informative and friendly. I've used them multiple times now with different delivery people each time, but the service and protocols they used were exactly the same each time. Good attention to detail and clearly experienced.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
