import { Route, Routes } from "react-router-dom";
import {
  Login,
  Signup,
  VideoListing,
  SingleVideo,
  WatchLater,
  History,
  LikedVideos,
  PageNotFound,
} from "../../pages/";
import Mockman from "mockman-js";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../context/";

export const ProtectedRoutes = ({ children }) => {
  const { authState } = useAuth();
  const { isAuthenticated } = authState;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/mockman" element={<Mockman />} />;
        <Route path="/" element={<VideoListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/video/:videoId" element={<SingleVideo />} />
        <Route path="/watchLater" element={<WatchLater />} />
        <Route path="/history" element={<History />} />
        <Route path="/likedVideos" element={<LikedVideos />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<ProtectedRoutes />} />
      </Routes>
    </>
  );
};
