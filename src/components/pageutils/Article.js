import "../../styles/article.css";
import React from "react";

const Article = ({ title, src, avt, author, date, link }) => {
  return (
    <div className="article-container">
      <div className="image-container">
        <a href={link} alt="LINK">
          <img className="thumbnail-image" src={src} alt="thumbnail" />
        </a>
        <img className="avatar-image" src={avt} alt="Avatar" />
      </div>
      <a href={link} className="article-title">
        {title}
      </a>
      <div className="profile-container">
        <p className="author-title">{author}</p>
        <p className="publication-date">{date}</p>
      </div>
    </div>
  );
};

export default Article;
