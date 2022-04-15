import React from "react";

import postlist from "../../posts.json";
import { Link } from "react-router-dom";

import ReactMarkdown from "react-markdown";

export default function Blogs() {
  const excerptList = postlist.map((post) => {
    return post.content.split(" ").slice(0, 20).join(" ") + "...";
  });

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
              {postlist.length &&
                postlist.map((post, i) => {
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
                        </figure>
                        <div className="blog_bottom">
                          <strong>
                            <Link className="links" to={`post/${post.id}`}>
                              {post.title}
                            </Link>
                            {/* Garden Remedies */}
                          </strong>
                          <small>
                            Published on {post.date} by {post.author}
                          </small>
                          <ReactMarkdown>{excerptList[i]}</ReactMarkdown>

                          <Link className="custom_btn" to={`/post/${post.id}`}>
                            Read More
                          </Link>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
