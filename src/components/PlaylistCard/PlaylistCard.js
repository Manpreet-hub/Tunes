import { useParams, Link } from "react-router-dom";
import { useData } from "../../context/";
import { HorizontalVideoCard } from "../../components";
import { removeVideoFromPlayList } from "../../services";

export const PlaylistCard = () => {
  const { playlistId } = useParams();
  const {
    dataState: { playLists },
    dataDispatch,
  } = useData();

  const videosInPlaylist = playLists.reduce((acc, curEle) => {
    if (curEle._id === playlistId) return [...acc, ...curEle.videos];
    else return [...acc];
  }, []);

  return (
    <>
      {videosInPlaylist.length === 0 ? (
        <div className="page-container">
          <h3>
            Playlist video Page is empty.Watch and add videos in playlist to see
            them here!
          </h3>
          <button class="btn-default btn-primary">
            <Link to="/">Watch Now</Link>
          </button>
        </div>
      ) : (
        <div className="listing-vertical ">
          {videosInPlaylist.map((curVideo) => (
            <HorizontalVideoCard
              video={curVideo}
              onClick={() =>
                removeVideoFromPlayList(dataDispatch, curVideo._id, playlistId)
              }
            />
          ))}
        </div>
      )}
    </>
  );
};
