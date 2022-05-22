export const isVideoInList = (videos, videoId) => {
  return videos.some((video) => video._id === videoId);
};
