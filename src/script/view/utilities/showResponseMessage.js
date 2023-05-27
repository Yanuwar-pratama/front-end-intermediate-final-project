const showResponseMessage = (error = "Movie Not Found") => {
  const searchSection = document.querySelector("#searchSection");
  searchSection.classList.remove("display-none");
  const searchResult = document.querySelector("#searchResult");
  searchResult.innerHTML = "";
  let seacrhText = document.querySelector(".search-text");
  seacrhText.innerHTML = error;
};

export default showResponseMessage;
