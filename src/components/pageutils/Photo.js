import "../../styles/photo.css";
import React from "react";

class Photo extends React.Component {
  constructor() {
    super();
    this.imgRef = React.createRef();
    this.state = {
      span: 10,
      isLoading: true,
    };
  }

  setSpans = () => {
    const height = this.imgRef.current.clientHeight;
    const span = Math.ceil(height / 10);
    this.setState({ span });
  };

  render() {
    return (
      <div
        style={{
          gridRowEnd: `span ${this.state.span}`,
        }}
      >
        <a href={this.props.src}>
          <img
            onLoad={() => this.setSpans()}
            ref={this.imgRef}
            className="photo-image"
            src={this.props.src}
            alt="url"
          />
        </a>
      </div>
    );
  }
}

export default Photo;
