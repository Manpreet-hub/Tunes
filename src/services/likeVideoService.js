import axios from "axios";
import { toast } from "react-toastify";

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
      toast.success("Added to liked video", {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  } else
    toast.error("Please login first!!", {
      position: "top-right",
      autoClose: 2000,
    });
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
      toast.success("Removed from liked video", {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  } else
    toast.error("Please login first!!", {
      position: "top-right",
      autoClose: 2000,
    });
};
