import { Link } from "react-router-dom";
import { useData } from "../../context/";
import { HorizontalVideoCard } from "../../components";
import { addToWatchLater, removeFromWatchLater } from "../../services/";

export const WatchLater = () => {
  const {
    dataState: { watchLater },
    dataDispatch,
  } = useData();

  return (
    <>
      {watchLater.length === 0 ? (
        <div className="page-container">
          <h3> There are no saved videos. Watch videos to see them here!</h3>
          <button class="btn-default btn-primary">
            <Link to="/">Watch Now</Link>
          </button>
        </div>
      ) : (
        <div className="listing-vertical">
          {watchLater.map((video) => {
            return (
              <HorizontalVideoCard
                video={video}
                key={video._id}
                onClick={() => removeFromWatchLater(dataDispatch, video._id)}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
