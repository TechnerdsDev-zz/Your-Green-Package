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
                <figure>
                  <img src={sliderImg} alt="Profile Photo" />
                </figure>
                <div className="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
                <strong>Rowhan Smith</strong>
                <p>
                  Your Green Package is making Cannabis Deliveries in the
                  Greater Boston, Newton, and Northamptonarea.
                </p>
              </div>
            </div>
            <div>
              <div className="slider_main">
                <figure>
                  <img src={sliderImg} alt="Profile Photo" />
                </figure>
                <div className="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
                <strong>Rowhan Smith</strong>
                <p>
                  Your Green Package is making Cannabis Deliveries in the
                  Greater Boston, Newton, and Northamptonarea.
                </p>
              </div>
            </div>
            <div>
              <div className="slider_main">
                <figure>
                  <img src={sliderImg} alt="Profile Photo" />
                </figure>
                <div className="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
                <strong>Rowhan Smith</strong>
                <p>
                  Your Green Package is making Cannabis Deliveries in the
                  Greater Boston, Newton, and Northamptonarea.
                </p>
              </div>
            </div>
            <div>
              <div className="slider_main">
                <figure>
                  <img src={sliderImg} alt="Profile Photo" />
                </figure>
                <div className="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
                <strong>Rowhan Smith</strong>
                <p>
                  Your Green Package is making Cannabis Deliveries in the
                  Greater Boston, Newton, and Northamptonarea.
                </p>
              </div>
            </div>
            <div>
              <div className="slider_main">
                <figure>
                  <img src={sliderImg} alt="Profile Photo" />
                </figure>
                <div className="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
                <strong>Rowhan Smith</strong>
                <p>
                  Your Green Package is making Cannabis Deliveries in the
                  Greater Boston, Newton, and Northamptonarea.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
