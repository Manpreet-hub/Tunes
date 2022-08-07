import "./singlevideo.css";
import { useParams } from "react-router-dom";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { VideoCard, PlaylistModal, Loader } from "../../components/";
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
import { toast } from "react-toastify";

export const SingleVideo = () => {
  const { dataState, dataDispatch } = useData();
  const { likes, watchLater, videos } = dataState;
  let { videoId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [video, setVideo] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`/api/video/${videoId}`);
        setVideo(response.data.video);
        setIsLoading(false);
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

  const playlistHandler = () => {
    if (isAuthenticated) setShowModal(!showModal);
    else {
      toast.error("Please login first!!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const relatedVideos = videos.filter(
    (curVideo) =>
      curVideo.category === video.category && curVideo._id !== video._id
  );

  window.scrollTo(0, 0);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="single-video-container">
          <div className="video-section">
            <div className="video-iframe">
              <ReactPlayer
                width="100%"
                height="100%"
                controls
                playing
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
                    <span onClick={() => addToLikeVideo(dataDispatch, video)}>
                      <ThumbUpOutlinedIcon className="icon" />
                      LIKE
                    </span>
                  ) : (
                    <span
                      onClick={() => removeFromLike(dataDispatch, video._id)}
                    >
                      <ThumbUpIcon className="icon" />
                      LIKED
                    </span>
                  )}

                  <span onClick={playlistHandler}>
                    <PlaylistAddIcon className="icon" /> SAVE
                  </span>
                  {!isVideoInWatchLater ? (
                    <span onClick={() => addToWatchLater(dataDispatch, video)}>
                      <WatchLaterOutlinedIcon className="icon" />
                      WATCH LATER
                    </span>
                  ) : (
                    <span
                      onClick={() =>
                        removeFromWatchLater(dataDispatch, video._id)
                      }
                    >
                      <WatchLaterIcon className="icon" />
                      WATCH LATER
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="side-videos">
            {relatedVideos.map((video) => (
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
      )}
    </div>
  );
};
