export const getSearchResult = (video, search) => {
  if (search) {
    return video.filter((curVideo) =>
      curVideo.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  return video;
};
