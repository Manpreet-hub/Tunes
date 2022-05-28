import "./singlevideo.css";
import { Header } from "../../layouts/";
import { useParams, useNavigate, Link } from "react-router-dom";
import { videos } from "../../backend/db/videos";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { VideoCard, PlaylistModal } from "../../components/";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { useAuth, useData } from "../../context/";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import {
  addToLikeVideo,
  removeFromLike,
  postHistory,
  addToWatchLater,
  removeFromWatchLater,
} from "../../services/";
import { isVideoInList } from "../../utils/";

export const SingleVideo = () => {
  const { dataState, dataDispatch } = useData();
  const { likes, watchLater } = dataState;
  const navigate = useNavigate();
  let { videoId } = useParams();
  const [showModal, setShowModal] = useState(false);

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
  }, [videoId]);

  const isVideoLiked = isVideoInList(likes, video._id);
  const isVideoInWatchLater = isVideoInList(watchLater, video._id);
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
            {!isVideoLiked ? (
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

            <span onClick={() => setShowModal(!showModal)}>
              <PlaylistAddIcon className="icon" /> SAVE
            </span>
            {!isVideoInWatchLater ? (
              <span onClick={() => addToWatchLater(dataDispatch, video)}>
                <WatchLaterOutlinedIcon className="icon" />
                WATCH LATER
              </span>
            ) : (
              <span
                onClick={() => removeFromWatchLater(dataDispatch, video._id)}
              >
                <WatchLaterIcon className="icon" />
                WATCH LATER
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="side-videos">
        {videos.map((video) => (
          <VideoCard key={video._id} videoInfo={video} />
        ))}
      </div>

      {showModal && (
        <PlaylistModal
          video={video}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};
