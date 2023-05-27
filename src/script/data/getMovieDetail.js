const getMovieDetail = (movieId) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=bf71047ab3f2e940e738052bc1132e84&language=en-US`
  )
    .then((response) => response.json())
    .then((m) => m);
};

export default getMovieDetail;
