import { useState } from "react";
import "./videocard.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { Link } from "react-router-dom";

export const VideoCard = ({ videoInfo }) => {
  const [dropdown, setDropDown] = useState(false);
  const { _id, title, views, thumbnail, uploaded } = videoInfo;
  return (
    <div className="video-card">
      <Link to={`/video/${_id}`}>
        <img className="video-img" src={thumbnail} alt="video-thumbnail" />
      </Link>
      <div className="video-heading">
        <div className="video-title">{title}</div>
        <MoreVertIcon onClick={() => setDropDown(!dropdown)} />
        {dropdown && (
          <ul className="list-dropdown">
            <li className="list-dropdown-item">
              <WatchLaterIcon className="dropdown-icon" /> Add to watch later
            </li>
            <li className="list-dropdown-item">
              <PlaylistAddIcon className="dropdown-icon" />
              Add to playlist
            </li>
          </ul>
        )}
      </div>
      <div className="video-footer">
        <div className="video-views p para-md">{views} ·</div>
        <span className="p para-md">{uploaded}</span>
      </div>
    </div>
  );
};
