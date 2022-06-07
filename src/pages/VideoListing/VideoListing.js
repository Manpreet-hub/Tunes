import { VideoCard } from "../../components/";
import "./videolisting.css";
import { useData } from "../../context";
import { sortByCategory } from "../../utils/";

export const VideoListing = () => {
  const {
    dataState: { category, categoriesData, videos },
    dataDispatch,
  } = useData();

  const sortedVideos = sortByCategory([...videos], category);

  return (
    <>
      <div className="video-categories-container">
        <span
          className="category"
          onClick={() => dataDispatch({ type: "SET_CATEGORY", payload: "All" })}
        >
          All
        </span>

        {categoriesData.map((catItem) => (
          <span
            className="category"
            onClick={() =>
              dataDispatch({
                type: "SET_CATEGORY",
                payload: catItem.categoryName,
              })
            }
          >
            {catItem.categoryName}
          </span>
        ))}
      </div>

      <div className="video-listing">
        {sortedVideos.map((videoInfo) => (
          <VideoCard videoInfo={videoInfo} />
        ))}
      </div>
    </>
  );
};
