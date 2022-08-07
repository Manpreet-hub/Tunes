import axios from "axios";

const getHistory = async (dataDispatch) => {
  const token = localStorage.getItem("token");

  try {
    const {
      data: { history },
    } = await axios.get(`/api/user/history`, {
      headers: {
        authorization: token,
      },
    });
    dataDispatch({ type: "SET_HISTORY", payload: history });
  } catch (error) {}
};

const postHistory = async (dataDispatch, video) => {
  const token = localStorage.getItem("token");

  try {
    const {
      data: { history },
    } = await axios.post(
      `/api/user/history`,
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dataDispatch({ type: "SET_HISTORY", payload: history });
  } catch (error) {}
};

const deleteHistory = async (dataDispatch, videoId) => {
  const token = localStorage.getItem("token");

  try {
    const {
      data: { history },
    } = await axios.delete(`/api/user/history/${videoId}`, {
      headers: { authorization: token },
    });

    dataDispatch({ type: "SET_HISTORY", payload: history });
  } catch (error) {}
};

const clearAllHistory = async (dataDispatch) => {
  const token = localStorage.getItem("token");

  try {
    const {
      data: { history },
    } = await axios.delete(`/api/user/history/all`, {
      headers: { authorization: token },
    });
    dataDispatch({ type: "SET_HISTORY", payload: history });
  } catch (error) {}
};

export { getHistory, postHistory, deleteHistory, clearAllHistory };
