import showcard from "./showcard.js";

const updateUI = (movies) => {
  let cardsWrapper = "";
  const cards = document.querySelector("#searchResult");
  movies.forEach((m) => (cardsWrapper += showcard(m)));
  cards.innerHTML = cardsWrapper;
};

export default updateUI;
