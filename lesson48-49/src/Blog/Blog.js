import React, { useState } from "react";
import "./Blog.scss";
import { Link, useNavigate } from "react-router-dom";

export const Blog = () => {
  const [news, setNews] = useState([
    {
      id: 1,
      title: "New Product Launch",
      content: "We are excited to announce the launch of our new product!",
    },
    {
      id: 2,
      title: "Upcoming Event: Workshop",
      content:
        "Join us for an interactive workshop on the latest trends in technology.",
    },
    {
      id: 3,
      title: "Company Milestone Reached",
      content:
        "We are proud to announce that we have reached a major milestone in our company's history.",
    },
  ]);

  const [selectedPost, setSelectedPost] = useState(null);

  const renderNews = () => {
    return news.map((item, index) => (
      <Link
        key={item.id}
        to={`/blog/${item.id}`}
        className="aside__text"
        onClick={() => setSelectedPost(item)}
      >
        {item.title}
      </Link>
    ));
  };

  return (
    <>
      <aside className="aside">
        <div className="aside__article">
          <h3 className="aside__title">Blog name</h3>
          <div className="aside__text-wrapper">{renderNews()}</div>
        </div>
        <div className="aside__article">
          <h3 className="aside__title">News</h3>
          <div className="aside__text-wrapper">{renderNews()}</div>
        </div>
      </aside>

      <SinglePost post={selectedPost} />
    </>
  );
};

export const SinglePost = ({ post }) => {
  const navigate = useNavigate();

  if (!post) {
    return null;
  }

  return (
    <div className="post">
      <div className="post__wrapper">
        <h4 className="post__title">{post.title} </h4>
        <p className="post__text">{post.content}</p>
        <button className="contacts__button" onClick={() => navigate(-2)}>
          Go back
        </button>
      </div>
    </div>
  );
};
