import { useContext, useState, createContext, useReducer } from "react";
import { authReducer, initialAuthState } from "../reducer/";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  const values = { authState, authDispatch };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { useAuth, AuthProvider };
