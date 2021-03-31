import "../../styles/photos.css";
import React from "react";

import unsplash from "../../api/unsplash";
import Photo from "../pageutils/Photo";

class Photos extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      photoData: null,
    };
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos = async () => {
    const response = await unsplash.get("/users/oyemayanq/photos", {
      params: {
        username: "oyemayanq",
        per_page: 20,
      },
    });
    this.setState({ photos: response.data });
    this.renderPhotos();
  };

  renderPhotos = () => {
    const photoList = this.state.photos.map((photo, photoIdx) => {
      return <Photo key={photoIdx} src={photo.urls.regular} />;
    });
    this.setState({ photoData: photoList });
  };

  render() {
    if (this.state.isLoading) return null;
    return (
      <div className="photos-component">
        <div className="photo-title-container">
          <h1 className="photo-title">Moments</h1>
        </div>
        <div className="photos-container">{this.state.photoData}</div>
      </div>
    );
  }
}

export default Photos;
