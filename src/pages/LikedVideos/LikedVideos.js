import { useData } from "../../context/";
import { removeFromLike } from "../../services/";
import { HorizontalVideoCard } from "../../components";
import { Link } from "react-router-dom";

export const LikedVideos = () => {
  const { dataState, dataDispatch } = useData();
  return (
    <>
      {dataState.likes.length === 0 ? (
        <div className="page-container">
          <h3>
            There are no liked videos.Watch and like videos to see them here!
          </h3>
          <button class="btn-default btn-primary">
            <Link to="/">Watch Now</Link>
          </button>
        </div>
      ) : (
        <div className="listing-vertical">
          {dataState.likes.map((video) => {
            return (
              <HorizontalVideoCard
                video={video}
                key={video._id}
                onClick={() => removeFromLike(dataDispatch, video._id)}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
