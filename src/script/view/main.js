import getPopular from "../data/getPopular.js";
import getTopRated from "../data/getTopRated.js";
import updateUI from "./render/updateUI.js";
import searchMovies from "../data/getSearchMovie.js";
import getMovieDetail from "../data/getMovieDetail.js";
import udpateMovieDetail from "./render/updateMovieDetail.js";
import clearSearch from "./utilities/clearSearch.js";

const main = () => {
  getPopular();
  getTopRated();

  const searchButton = document.querySelector("#searchBtn");
  searchButton.addEventListener("click", async function (e) {
    e.preventDefault();
    let inputKeyowrd = document.querySelector(".search-bar");
    const movies = await searchMovies(inputKeyowrd.value);
    updateUI(movies);
  });

  document.addEventListener("click", async function (e) {
    if (e.target.classList.contains("detail-btn")) {
      const movieId = e.target.value;
      const movieDetail = await getMovieDetail(movieId);
      udpateMovieDetail(movieDetail);
    }
  });

  const clearButton = document.querySelector("#clearButton");
  clearButton.addEventListener("click", clearSearch);
};

export default main;
