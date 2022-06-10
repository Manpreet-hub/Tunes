import axios from "axios";

export const getCategories = async (dataDispatch) => {
  try {
    const response = await axios.get("/api/categories");
    dataDispatch({
      type: "GET_CATEGORY",
      payload: response.data.categories,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getVideos = async (dataDispatch) => {
  try {
    const response = await axios.get("/api/videos");
    dataDispatch({ type: "GET_VIDEOS", payload: response.data.videos });
  } catch (err) {
    console.log(err);
  }
};
