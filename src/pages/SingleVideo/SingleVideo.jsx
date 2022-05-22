import "./singlevideo.css";
import { Header } from "../../layouts/";
import { useParams, useNavigate, Link } from "react-router-dom";
import { videos } from "../../backend/db/videos";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { VideoCard } from "../../components/";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { useAuth, useData } from "../../context/";
import { addToLikeVideo, removeFromLike, postHistory } from "../../services/";

export const SingleVideo = () => {
  const { dataState, dataDispatch } = useData();
  const { likes } = dataState;
  const navigate = useNavigate();
  let { videoId } = useParams();

  const [video, setVideo] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${videoId}`);
        setVideo(response.data.video);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [videoId, video]);

  const isVideoLiked = () => {
    return likes.some((likedVideo) => likedVideo._id === video._id);
  };

  const {
    authState: { isAuthenticated },
  } = useAuth();

  return (
    <div className="single-video-container">
      <div className="video-iframe">
        <ReactPlayer
          width="100%"
          height="20%"
          controls
          url={`https://www.youtube.com/embed/${video?._id}`}
          onStart={() => postHistory(dataDispatch, video)}
        />

        <div className="vid-title">{video.title}</div>
        <div className="video-info">
          <div className="flex-row ">
            <p>
              {video.views} · {video.uploaded}
            </p>
          </div>
          <div className="icons">
            {!isVideoLiked() ? (
              <span>
                <ThumbUpOutlinedIcon
                  className="icon"
                  onClick={() => addToLikeVideo(dataDispatch, video)}
                />
                LIKE
              </span>
            ) : (
              <span>
                <ThumbUpOutlinedIcon
                  className="icon"
                  onClick={() => removeFromLike(dataDispatch, video._id)}
                />
                LIKED
              </span>
            )}
            <span>
              <ShareOutlinedIcon className="icon" />
              SHARE
            </span>
            <span>
              <PlaylistAddIcon className="icon" /> SAVE
            </span>
          </div>
        </div>
      </div>
      <div className="side-videos">
        {videos.map((video) => (
          <VideoCard key={video._id} videoInfo={video} />
        ))}
      </div>
    </div>
  );
};
