import { useData } from "../../context/";
import { HorizontalVideoCard } from "../../components";
import { useEffect } from "react";
import { getHistory, deleteHistory, clearAllHistory } from "../../services/";
import "./history.css";
import { Link } from "react-router-dom";

export const History = () => {
  const { dataState, dataDispatch } = useData();
  useEffect(() => {
    getHistory(dataDispatch);
  }, []);

  return (
    <>
      {dataState.history.length === 0 ? (
        <div className="page-container">
          <h3>
            There are no videos in your history. Watch videos to see them here!
          </h3>
          <button class="btn-default btn-primary">
            <Link to="/">Watch Now</Link>
          </button>
        </div>
      ) : (
        <div className="Clear-btn">
          <button
            class="btn-default "
            onClick={() => clearAllHistory(dataDispatch)}
          >
            CLEAR HISTORY
          </button>
        </div>
      )}
      <div className="listing-vertical">
        {dataState.history.map((video) => {
          return (
            <HorizontalVideoCard
              video={video}
              key={video._id}
              onClick={() => deleteHistory(dataDispatch, video._id)}
            />
          );
        })}
      </div>
    </>
  );
};
