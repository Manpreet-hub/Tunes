import { useState } from "react";
import "./videocard.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { Link } from "react-router-dom";
import { addToWatchLater, removeFromWatchLater } from "../../services";
import { useData, useAuth } from "../../context";
import { isVideoInList } from "../../utils";
import { PlaylistModal } from "../../components/";
import { toast } from "react-toastify";

export const VideoCard = ({ videoInfo }) => {
  const [dropdown, setDropDown] = useState(false);
  const { _id, title, views, thumbnail, uploaded } = videoInfo;
  const [showModal, setShowModal] = useState(false);
  const {
    dataState: { watchLater },
    dataDispatch,
  } = useData();
  const {
    authState: { isAuthenticated },
  } = useAuth();
  const isVideoInWatchLater = isVideoInList(watchLater, videoInfo._id);

  const playlistHandler = () => {
    if (isAuthenticated) setShowModal(!showModal);
    else {
      toast.error("Please login first!!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

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
            {isVideoInWatchLater ? (
              <li
                className="list-dropdown-item"
                onClick={() =>
                  removeFromWatchLater(dataDispatch, videoInfo._id)
                }
              >
                <WatchLaterIcon className="dropdown-icon" />
                Remove From watch later
              </li>
            ) : (
              <li
                className="list-dropdown-item"
                onClick={() => addToWatchLater(dataDispatch, videoInfo)}
              >
                <WatchLaterIcon className="dropdown-icon" />
                Add to watch later
              </li>
            )}

            <li className="list-dropdown-item" onClick={playlistHandler}>
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
      {showModal && (
        <PlaylistModal
          video={videoInfo}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};
