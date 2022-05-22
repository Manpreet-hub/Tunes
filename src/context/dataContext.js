import { useContext, useState, createContext, useReducer } from "react";
import { dataReducer, initialDataState } from "../reducer/";

const DataContext = createContext();
const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialDataState);
  const values = { dataState, dataDispatch };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export { DataProvider, useData };
