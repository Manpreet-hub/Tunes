export const sortByCategory = (videoData, category) => {
  if (category === "All") return videoData;
  else return videoData.filter((video) => video.category === category);
};
