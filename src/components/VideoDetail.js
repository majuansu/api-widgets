import React from "react";

const VideoDetail = ({ video }) => {
  // when not receive API response
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoScr = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail ">
      <div className="ui embed">
        <iframe src={videoScr} title="YouTube video player"></iframe>
      </div>
      <div className="ui segment">
        <div className="ui header">{video.snippet.title}</div>
        <p className="content">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
