import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  //  Set default search term
  const defaultTerm = "cat";
  useEffect(() => {
    searchTerm(defaultTerm);
  }, []);

  // Get results from API
  const searchTerm = async (term) => {
    const res = await youtube.get("/search", {
      params: { q: term },
    });
    setVideos(res.data.items);
  };

  // Set default selected video
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="videos ui container">
      <SearchBar label="Search a video" onSubmit={searchTerm} />

      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>

          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={(video) => setSelectedVideo(video)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
