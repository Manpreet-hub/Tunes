export const initialDataState = {
  likes: [],
  watchLater: [],
  history: [],
  playList: [],
  category: [],
  error: null,
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
  }
};
