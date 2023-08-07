export const getYoutubeVideoId = (youtubeLink: string) => {
  const regex = /^.*(watch\?v=|&v=)([^#&?]*).*/;

  const match = youtubeLink.match(regex);

  if (!match || !match?.[2]) {
    return '';
  }

  return match[2];
};

export const getEmbedFromYoutubeLink = (youtubeLink: string) => {
  const videoId = getYoutubeVideoId(youtubeLink);

  if (!videoId) {
    return '';
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}`;
};
