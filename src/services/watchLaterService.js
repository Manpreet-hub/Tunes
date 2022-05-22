import axios from "axios";

export const addToWatchLater = async (dataDispatch, video) => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const {
        data: { watchlater },
      } = await axios.post(
        `/api/user/watchlater`,
        { video },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dataDispatch({ type: "SET_WATCHLATER", payload: watchlater });
    } catch (error) {
      console.log(error);
    }
  } else alert("Please login first!");
};

export const removeFromWatchLater = async (dataDispatch, videoId) => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const {
        data: { watchlater },
      } = await axios.delete(`/api/user/watchlater/${videoId}`, {
        headers: {
          authorization: token,
        },
      });
      dataDispatch({ type: "SET_WATCHLATER", payload: watchlater });
    } catch (error) {
      console.log(error);
    }
  } else alert("Please login first !!");
};
