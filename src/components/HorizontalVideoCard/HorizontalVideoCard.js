import "./horizontalVideoCard.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";

export const HorizontalVideoCard = ({ video, onClick }) => {
  const { _id, title, views, thumbnail, uploaded } = video;

  return (
    <div className="horizontal-card">
      <Link to={`/video/${_id}`}>
        <img
          className="img"
          src={thumbnail}
          width="50px"
          height="120px"
          alt="video-thumbnail"
        />
      </Link>
      <div className="video-heading horizontal-container">
        <div className="video-title">{title}</div>
        <div className="icon-section cross-icon ">
          <CancelIcon className="delete-icon " onClick={onClick} />
        </div>
        <div className="horizontal-video-footer">
          <div className=" p para-md">{views} ·</div>
          <span className="p para-md">{uploaded}</span>
        </div>
      </div>
    </div>
  );
};
