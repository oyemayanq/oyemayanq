import "../../styles/articles.css";
import React from "react";

import medium from "../../api/medium";
import Article from "../pageutils/Article";

class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: {
        title: "",
        name: "",
        avatar: "",
        profileurl: "",
      },
      items: [],
    };
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles = async () => {
    const response = await medium.get();
    const avatar = response.data.feed.image;
    const profileurl = response.data.feed.link;
    const res = response.data.items;
    const title = response.data.feed.title;
    this.setState({
      profile: { title, profileurl: profileurl, avatar: avatar },
      items: res,
    });
  };

  renderArticles = () => {
    return this.state.items.map((item, itemIdx) => {
      return (
        <Article
          key={itemIdx}
          title={item.title}
          src={item.thumbnail}
          avt={this.state.profile.avatar}
          author={item.author}
          date={item.pubDate}
          link={item.link}
        />
      );
    });
  };

  render() {
    //console.log(this.state.items);
    return (
      <div className="articles-container">
        <h2 className="articles-title">Articles</h2>
        <div className="articles-list">{this.renderArticles()}</div>
      </div>
    );
  }
}

export default Articles;
