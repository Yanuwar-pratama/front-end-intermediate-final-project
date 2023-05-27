import showMovieDetail from "./showDetailCard.js";
import modalOpen from "../utilities/modalOpen.js";
import modalClose from "../utilities/modalClose.js";

const udpateMovieDetail = (m) => {
  let detailMovie = showMovieDetail(m);
  const modalBox = document.querySelector(".modal");
  modalOpen();
  modalBox.innerHTML = detailMovie;
  const closeButton = document.querySelector(".close-btn");
  let overlayLayer = document.querySelector(".overlay");
  closeButton.addEventListener("click", modalClose);
  overlayLayer.addEventListener("click", modalClose);
};

export default udpateMovieDetail;
