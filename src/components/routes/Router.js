import { Route, Routes } from "react-router-dom";
import { Login, Signup, VideoListing, SingleVideo } from "../../pages/";
import Mockman from "mockman-js";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/mockman" element={<Mockman />} />;
        <Route path="/" element={<VideoListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/video/:videoId" element={<SingleVideo />} />
      </Routes>
    </>
  );
};
