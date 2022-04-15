import React from "react";
// import blogOne from "../../assets/images/blog_one.png";
// import blogTwo from "../../assets/images/blog_two.png";
// import blogThree from "../../assets/images/blog_three.png";
import postlist from "../../posts.json";
import { Link } from "react-router-dom";
// import Markdown from "react-markdown";
import ReactMarkdown from "react-markdown";

export default function BlogHome() {
  const excerptList = postlist.map((post) => {
    return post.content.split(" ").slice(0, 20).join(" ") + "...";
  });
  var Data = postlist.slice(0, 3);

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
              {Data.length &&
                Data.map((post, i) => {
                  return (
                    <li>
                      <div key={i} className="blog_main">
                        <figure>
                          {post.thumbnail && (
                            <img
                              className="thumbnail"
                              // width={80}
                              src={post.thumbnail}
                              alt=""
                            />
                          )}
                          {/* <img src={blogOne} alt="blog" /> */}
                        </figure>
                        <div className="blog_bottom">
                          <strong>
                            <Link
                              className="links"
                              to={`post/${post.id}`}
                              // to={{
                              //   pathname: `post/${post.id}`,
                              //   state: { posts: post.id },
                              // }}
                            >
                              {post.title}
                            </Link>
                            {/* Garden Remedies */}
                          </strong>
                          <small>
                            Published on {post.date} by {post.author}
                          </small>
                          <ReactMarkdown>{excerptList[i]}</ReactMarkdown>

                          {/* <p> */}
                          {/* <ReactMarkdown>{excerptList[i]}</ReactMarkdown> */}
                          {/* {excerptList[i]}
                            <Markdown
                              source={excerptList[i]}
                              escapeHtml={false}
                            /> */}
                          {/* Your Green Package is making Cannabis Deliveries in
                            the Greater Boston, Newton, and Northamptonarea. */}
                          {/* </p> */}
                          {/* <a href={`/post/${post.id}`}> */}
                          <Link
                            className="custom_btn"
                            to={`post/${post.id}`}
                            // to={{
                            //   pathname: `post/${post.id}`,
                            //   state: { posts: post.id },
                            // }}
                          >
                            Read More
                          </Link>
                          {/* </a> */}
                        </div>
                      </div>
                    </li>
                  );
                })}
              {/* <li>
                      <div className="blog_main">
                        <figure>
                          <img src={blogTwo} alt="blog" />
                        </figure>
                        <div className="blog_bottom">
                          <strong>Garden Remedies</strong>
                          <p>
                            Your Green Package is making Cannabis Deliveries in
                            the Greater Boston, Newton, and Northamptonarea.
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
                            Your Green Package is making Cannabis Deliveries in
                            the Greater Boston, Newton, and Northamptonarea.
                          </p>
                          <a href="#" className="custom_btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
