import React, { useState, useEffect, useRef } from "react";

const PhotoItem = ({ photo }) => {
  const [spans, setSpans] = useState(0);

  const photoRef = useRef();

  // Decide how many row span the photo takes up
  useEffect(() => {
    photoRef.current.addEventListener("load", () => {
      const height = photoRef.current.clientHeight;
      const spans = Math.ceil(height / 15); //  grid-auto-rows: 15px;

      setSpans(spans);
    });
  }, []);

  return (
    <div className="photo-item" style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={photoRef} src={photo.urls.regular} alt={photo.description} />
    </div>
  );
};

export default PhotoItem;
