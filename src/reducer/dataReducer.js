export const initialDataState = {
  likes: [],
  watchLater: [],
  history: [],
  category: "All",
  categoriesData: [],
  error: null,
  playLists: [],
  videos: [],
  search:""
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
      case "SEARCH_QUERY":
        return {...state,search:action.payload}
    case "REMOVE_VIDEO_FROM_PLAYLIST":
      return {
        ...state,
        playLists: state.playLists.map((playlist) =>
          playlist._id === action.payload._id ? action.payload : playlist
        ),
      };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "GET_CATEGORY":
      return { ...state, categoriesData: action.payload };
    case "GET_VIDEOS":
      return { ...state, videos: action.payload };
  }
};
