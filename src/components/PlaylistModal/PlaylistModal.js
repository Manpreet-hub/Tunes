import "./playlistModal.css";
import CancelIcon from "@mui/icons-material/Cancel";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useState } from "react";
import {
  addToPlayList,
  addVideoToPlayList,
  removeVideoFromPlayList,
} from "../../services";
import { useData } from "../../context";
import { isVideoInList } from "../../utils/";
import { toast } from "react-toastify";

export const PlaylistModal = ({ video, showModal, setShowModal }) => {
  const [playlistInput, setPlaylistInput] = useState({ title: "" });
  const {
    dataState: { createdPlaylist, playLists },
    dataDispatch,
  } = useData();

  const addPlayLists = () => {
    if (playlistInput.title === "") {
      toast.error("Playlist name shouldn't be empty", {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      setPlaylistInput({ title: "" });
      addToPlayList(dataDispatch, playlistInput);
    }
  };

  return (
    <div className="pop-up">
      <div className="playlist-modal-container ">
        <div className="pop-up-header">
          <h2> PlayLists</h2>
          <div>
            <CancelIcon
              className="cross-icon"
              onClick={() => setShowModal(!showModal)}
            />
          </div>
        </div>

        {playLists.map((playlist) => {
          const isInList = isVideoInList(playlist.videos, video._id);
          return (
            <>
              <span
                className=" flex-row"
                onClick={() => {
                  isInList
                    ? removeVideoFromPlayList(
                        dataDispatch,
                        video._id,
                        playlist._id
                      )
                    : addVideoToPlayList(dataDispatch, video, playlist._id);
                }}
              >
                {isInList ? (
                  <input
                    type="checkbox"
                    checked={isInList}
                    className="playlist-add-icon"
                  />
                ) : (
                  <input
                    type="checkbox"
                    checked={isInList}
                    className="playlist-add-icon"
                  />
                )}

                <p>{playlist.title}</p>
              </span>
            </>
          );
        })}

        <input
          required
          type="text"
          value={playlistInput.title}
          className="input playlist-input"
          placeholder="Enter playlist name"
          onChange={(e) =>
            setPlaylistInput({ ...playlistInput, title: e.target.value })
          }
        />
        <button className="btn-default btn-dark" onClick={addPlayLists}>
          Create Playlist {showModal}
        </button>
      </div>
    </div>
  );
};
