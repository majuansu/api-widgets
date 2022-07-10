import React from "react";
import PhotoItem from "./PhotoItem";

const PhotoList = ({ photos }) => {
  const renderedPhotos = photos.map((photo) => {
    return <PhotoItem key={photo.id} photo={photo} />;
  });

  return <div className="photo-list">{renderedPhotos}</div>;
};

export default PhotoList;
