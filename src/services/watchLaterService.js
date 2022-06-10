import axios from "axios";
import { toast } from "react-toastify";

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
      toast.success("Added to watch later", {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  } else
    toast.error("Please login first!!", {
      position: "top-right",
      autoClose: 2000,
    });
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
      toast.success("Removed from watch later", {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  } else
    toast.error("Please login first!!", {
      position: "top-right",
      autoClose: 2000,
    });
};
