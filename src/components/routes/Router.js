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
  Playlist,
} from "../../pages/";
import Mockman from "mockman-js";
import { Outlet, Navigate } from "react-router-dom";
import { PlaylistCard } from "../../components/";
import { useAuth } from "../../context/";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <Route
          path="/watchLater"
          element={
            <ProtectedRoutes>
              <WatchLater />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoutes>
              <History />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/likedVideos"
          element={
            <ProtectedRoutes>
              <LikedVideos />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/playlist/:playlistId"
          element={
            <ProtectedRoutes>
              <PlaylistCard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/playlist"
          element={
            <ProtectedRoutes>
              <Playlist />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
};
