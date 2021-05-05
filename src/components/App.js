import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../components/apis/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setselectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("jungle keep moving");
  }, []);

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    setselectedVideo(response.data.items[0]);
  };

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setselectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
