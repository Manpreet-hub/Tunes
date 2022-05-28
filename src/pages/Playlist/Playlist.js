import { useData } from "../../context/";
import { useNavigate } from "react-router";
import "./playlist.css";
import { deletePlayList } from "../../services";
import CancelIcon from "@mui/icons-material/Cancel";

export const Playlist = () => {
  const {
    dataState: { playLists },
    dataDispatch,
  } = useData();
  const navigate = useNavigate();

  return (
    <>
      {playLists.length === 0 ? (
        <div className="page-container">
          <h3>
            Playlist Page is empty. Create a playlist and add videos to see them
            here!
          </h3>
        </div>
      ) : (
        <div className="playlists-container">
          {playLists.map((playlist) => (
            <div className="card ">
              <div className="card-body">
                <h2
                  className="card-title"
                  onClick={() => navigate(`/playlist/${playlist._id}`)}
                >
                  {playlist.title}
                </h2>
                <p>{playlist.videos.length} video</p>
                <div className="playlist-cancel-icon">
                  <CancelIcon
                    onClick={() => deletePlayList(dataDispatch, playlist._id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
