import axios from "axios";
import { toast } from "react-toastify";

const addToPlayList = async (dataDispatch, playlist) => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const {
        data: { playlists },
      } = await axios.post(
        `/api/user/playlists`,
        { playlist },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dataDispatch({ type: "ADD_PLAYLIST", payload: playlists });
      toast.success("Playlist Created", {
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

const deletePlayList = async (dataDispatch, playlistId) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: token,
      },
    });
    dataDispatch({ type: "DELETE_PLAYLIST", payload: data.playlists });
    toast.success("Playlist Deleted", {
      position: "top-right",
      autoClose: 2000,
    });
  } catch (error) {
    toast.error("Something went wrong", {
      position: "top-right",
      autoClose: 2000,
    });
  }
};

const addVideoToPlayList = async (dataDispatch, video, playlistId) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.post(
      `/api/user/playlists/${playlistId}`,
      {
        video,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    toast.success("Video Added to Playlist", {
      position: "top-right",
      autoClose: 2000,
    });
    dataDispatch({ type: "ADD_VIDEO_TO_PLAYLIST", payload: data.playlist });
  } catch (error) {
    toast.error("Something went wrong", {
      position: "top-right",
      autoClose: 2000,
    });
  }
};

const removeVideoFromPlayList = async (dataDispatch, videoId, playlistId) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      { headers: { authorization: token } }
    );
    dataDispatch({
      type: "REMOVE_VIDEO_FROM_PLAYLIST",
      payload: response.data.playlist,
    });
    toast.success("Removed Video from Playlist", {
      position: "top-right",
      autoClose: 2000,
    });
  } catch (error) {
    toast.error("Something went wrong", {
      position: "top-right",
      autoClose: 2000,
    });
  }
};

export {
  addToPlayList,
  deletePlayList,
  addVideoToPlayList,
  removeVideoFromPlayList,
};
