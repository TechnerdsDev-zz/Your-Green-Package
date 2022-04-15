import React from "react";
// import { Redirect } from "react-router-dom";
// import Markdown from "react-markdown";
// import Layout from "../components/layout"
import postlist from "../posts.json";
import "./pages.css";
import { useParams } from "react-router-dom";
import blogDetail from "../assets/images/blog_detail.png";
// import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Post = () => {
  const { id } = useParams();
  console.log(id);

  const fetchedPost = {};

  postlist.forEach((post, i) => {
    if (post.id == id) {
      fetchedPost.title = post.title ? post.title : "No title given";
      fetchedPost.date = post.date ? post.date : "No date given";
      fetchedPost.author = post.author ? post.author : "No author given";
      fetchedPost.content = post.content ? post.content : "No content given";
      fetchedPost.thumbnail = post.thumbnail;
    }
  });

  return (
    <div className="main_container padding_top">
      <div className="blog_detail">
        <div className="auto_containerInner">
          <div className="blog_detailInner">
            <div className="post blog_main">
              <figure>
                <img className="thumbnail" src={fetchedPost.thumbnail} alt="" />
              </figure>
              <div className="blog_bottom">
                <span>{fetchedPost.title}</span>
                <small>
                  Published on {fetchedPost.date} by {fetchedPost.author}
                </small>

                <ReactMarkdown>{fetchedPost.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
