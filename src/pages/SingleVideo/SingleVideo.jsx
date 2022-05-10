import "./singlevideo.css";
import { Header } from "../../layouts/";
import { useParams, useNavigate, Link } from "react-router-dom";
import { videos } from "../../backend/db/videos";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { VideoCard } from "../../components/";

export const SingleVideo = () => {
  let { videoId } = useParams();
  const video = videos.find((product) => product._id === videoId);
  console.log(video);
  const { _id, title, views, uploaded } = video;
  return (
    <>
      <div className="single-video-container">
        <div className="video-iframe">
          <iframe
            title={title}
            src={`https://www.youtube.com/embed/${video?._id}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="vid-title">{title}</div>
          <div className="video-info">
            <div className="flex-row ">
              <p>
                {views} · {uploaded}
              </p>
            </div>
            <div className="icons">
              <span>
                <ThumbUpOutlinedIcon className="icon" />
                LIKE
              </span>
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
    </>
  );
};
