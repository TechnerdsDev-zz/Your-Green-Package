import React from "react";
import blogOne from "../../assets/images/blog_one.png";
import blogTwo from "../../assets/images/blog_two.png";
import blogThree from "../../assets/images/blog_three.png";
export default function Blogs() {
  return (
    <div className="blogs">
      <div className="auto_container">
        <div className="blogs_inner">
          <div className="custom_heading">
            <h3>Blogs</h3>
            <h2>Our Stories</h2>
          </div>
          <div className="blog_list">
            <ul>
              <li>
                <div className="blog_main">
                  <figure>
                    <img src={blogOne} alt="blog" />
                  </figure>
                  <div className="blog_bottom">
                    <strong>Garden Remedies</strong>
                    <p>
                      Your Green Package is making Cannabis Deliveries in the
                      Greater Boston, Newton, and Northamptonarea.
                    </p>
                    <a href="#" className="custom_btn">
                      Read More
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="blog_main">
                  <figure>
                    <img src={blogTwo} alt="blog" />
                  </figure>
                  <div className="blog_bottom">
                    <strong>Garden Remedies</strong>
                    <p>
                      Your Green Package is making Cannabis Deliveries in the
                      Greater Boston, Newton, and Northamptonarea.
                    </p>
                    <a href="#" className="custom_btn">
                      Read More
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="blog_main">
                  <figure>
                    <img src={blogThree} alt="blog" />
                  </figure>
                  <div className="blog_bottom">
                    <strong>Garden Remedies</strong>
                    <p>
                      Your Green Package is making Cannabis Deliveries in the
                      Greater Boston, Newton, and Northamptonarea.
                    </p>
                    <a href="#" className="custom_btn">
                      Read More
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
