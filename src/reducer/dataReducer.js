export const initialDataState = {
  likes: [],
  watchLater: [],
  history: [],
  category: [],
  error: null,
  playLists: [],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_WATCHLATER":
      return { ...state, watchLater: action.payload };
    case "REMOVE_FROM__WATCHLATER":
      return { ...state, watchLater: action.payload };
    case "ADD_TO_LIKE":
      return { ...state, likes: action.payload };
    case "ADD_TO_LIKE":
      return { ...state, likes: action.payload };
    case "REMOVE_FROM_LIKE":
      return { ...state, likes: action.payload };
    case "SET_HISTORY":
      return { ...state, history: action.payload };
    case "ADD_PLAYLIST":
      return { ...state, playLists: action.payload };
    case "DELETE_PLAYLIST":
      return { ...state, playLists: action.payload };
    case "ADD_VIDEO_TO_PLAYLIST":
      return {
        ...state,
        playLists: state.playLists.map((curEle) =>
          curEle._id === action.payload._id
            ? { ...action.payload }
            : { ...curEle }
        ),
      };
    case "REMOVE_VIDEO_FROM_PLAYLIST":
      return {
        ...state,
        playLists: state.playLists.map((playlist) =>
          playlist._id === action.payload._id ? action.payload : playlist
        ),
      };
  }
};
