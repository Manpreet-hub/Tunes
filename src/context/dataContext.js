import { useContext, useEffect, createContext, useReducer } from "react";
import { dataReducer, initialDataState } from "../reducer/";
import { getCategories, getVideos } from "../services";

const DataContext = createContext();
const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialDataState);
  const values = { dataState, dataDispatch };
  useEffect(() => {
    getCategories(dataDispatch);
    getVideos(dataDispatch);
  }, []);

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export { DataProvider, useData };
