import axios from "axios";

const addToPlayList = async (dataDispatch, playlist) => {
  const token = localStorage.getItem("token");
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
  } catch (error) {
    console.log(error);
  }
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
  } catch (error) {
    console.log(error);
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
    alert("added video");
    dataDispatch({ type: "ADD_VIDEO_TO_PLAYLIST", payload: data.playlist });
  } catch (error) {
    console.log(error);
  }
};

const removeVideoFromPlayList = async (dataDispatch, videoId, playlistId) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      { headers: { authorization: token } }
    );
    alert("removed video");
    dataDispatch({
      type: "REMOVE_VIDEO_FROM_PLAYLIST",
      payload: response.data.playlist,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export {
  addToPlayList,
  deletePlayList,
  addVideoToPlayList,
  removeVideoFromPlayList,
};
