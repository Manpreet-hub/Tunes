const localStorageData = localStorage.getItem("token");

export const initialAuthState = {
  isAuthenticated: localStorageData ? true : false,
  user: null,
  error: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "INIT_AUTH":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "RESET_AUTH":
      return { ...state, user: null, isAuthenticated: false };
    case "AUTH_FAILURE":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
