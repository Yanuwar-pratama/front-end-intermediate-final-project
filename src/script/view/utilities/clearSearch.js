const clearSearch = () => {
  const input = document.querySelector(".search-bar");
  const searchSection = document.querySelector("#searchSection");
  const searchResult = document.querySelector("#searchResult");
  input.value = "";
  searchResult.innerHTML = "";
  searchSection.classList.add("display-none");
};

export default clearSearch;
