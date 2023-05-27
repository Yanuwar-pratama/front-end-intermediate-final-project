import showResponseMessage from "../view/utilities/showResponseMessage.js";
import searchSectionVisible from "../view/utilities/searchSectionVisible.js";

const searchMovies = (keyword) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=bf71047ab3f2e940e738052bc1132e84&language=en-US&query=${keyword}&page=1&include_adult=false`
  )
    .then((response) => response.json())
    .then((response) => {
      if (response.total_results > 0) {
        searchSectionVisible();
        return response.results;
      } else {
        showResponseMessage();
      }
    })
    .catch((error) => {
      showResponseMessage(error);
    });
};

export default searchMovies;
