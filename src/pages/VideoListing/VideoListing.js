import { VideoCard } from "../../components/";
import "./videolisting.css";
import { useData } from "../../context";
import { useState } from "react";
import { sortByCategory, getSearchResult } from "../../utils/";

export const VideoListing = () => {
  const {
    dataState: { category, categoriesData, videos, search },
    dataDispatch,
  } = useData();
  const [showAllVideo, setShowAllVideo] = useState(false);

  const sortedVideosByCategory = sortByCategory([...videos], category);
  const finalFiltered = getSearchResult(sortedVideosByCategory, search);
  return (
    <>
      {finalFiltered.length !== 0 && (
        <div className="video-categories-container">
          <span
            className={showAllVideo ? "category category-active" : "category"}
            onClick={() => {
              setShowAllVideo(!showAllVideo);
              dataDispatch({ type: "SET_CATEGORY", payload: "All" });
            }}
          >
            All
          </span>

          {categoriesData.map((catItem) => (
            <span
              className={
                category === catItem.categoryName
                  ? "category category-active"
                  : "category"
              }
              onClick={() => {
                setShowAllVideo(false);
                dataDispatch({
                  type: "SET_CATEGORY",
                  payload: catItem.categoryName,
                });
              }}
            >
              {catItem.categoryName}
            </span>
          ))}
        </div>
      )}

      <div className="video-listing">
        {finalFiltered.map((videoInfo) => (
          <VideoCard videoInfo={videoInfo} />
        ))}
      </div>
    </>
  );
};
