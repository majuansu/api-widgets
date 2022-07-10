import React from "react";

const PhotoItem = ({ photo }) => {
  return (
    <div className="photo-item">
      <img src={photo.urls.regular} alt={photo.description} />
    </div>
  );
};

export default PhotoItem;
