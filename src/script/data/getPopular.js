import showcard from "../view/render/showcard.js";

const getPopular = () => {
  fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=bf71047ab3f2e940e738052bc1132e84&language=en-US&page=1"
  )
    .then((response) => response.json())
    .then((response) => {
      const movies = response.results;
      let cardsWrapper = "";
      const cards = document.querySelector("#popularMovies");
      movies.forEach((m) => (cardsWrapper += showcard(m)));
      cards.innerHTML = cardsWrapper;
    });
};

export default getPopular;
