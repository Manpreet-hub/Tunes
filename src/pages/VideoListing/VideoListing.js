import React, { useState, useEffect } from "react";
import { VideoCard } from "../../components/";
import "./videolisting.css";
import axios from "axios";

export const VideoListing = () => {
  const [videoInfo, setVideoInfo] = useState([]);
  const categories = ["All", "Classical", "Folk", "hip-hop", "Cover", "Live"];

  useEffect(() => {
    try {
      (async () => {
        const res = await axios.get("/api/videos");
        setVideoInfo(res.data.videos);
      })();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <div className="video-categories-container">
        {categories.map((category) => (
          <span className="category">{category}</span>
        ))}
      </div>

      <div className="video-listing">
        {videoInfo.map((videoInfo) => (
          <VideoCard videoInfo={videoInfo} />
        ))}
      </div>
    </>
  );
};
