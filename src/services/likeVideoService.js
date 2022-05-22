import axios from "axios";

export const addToLikeVideo = async (dataDispatch, video) => {
  const token = localStorage.getItem("token");
  if (token) {
    const token = localStorage.getItem("token");

    try {
      const {
        data: { likes },
      } = await axios.post(
        "/api/user/likes",
        { video },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dataDispatch({ type: "ADD_TO_LIKE", payload: likes });
    } catch (error) {
      console.log(error);
    }
  } else alert("Please login first");
};

export const removeFromLike = async (dataDispatch, videoId) => {
  const token = localStorage.getItem("token");

  if (token) {
    const token = localStorage.getItem("token");

    try {
      const {
        data: { likes },
      } = await axios.delete(`/api/user/likes/${videoId}`, {
        headers: {
          authorization: token,
        },
      });
      dataDispatch({
        type: "REMOVE_FROM_LIKE",
        payload: likes,
      });
    } catch (error) {
      console.log(error);
    }
  } else alert("Please login first");
};
