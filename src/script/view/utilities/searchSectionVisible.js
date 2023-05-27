const searchSectionVisible = () => {
  let inputKeyowrd = document.querySelector(".search-bar");
  const searchSection = document.querySelector("#searchSection");
  searchSection.classList.remove("display-none");
  let seacrhText = document.querySelector(".search-text");
  seacrhText.innerHTML = `search result for "${inputKeyowrd.value}"`;
};

export default searchSectionVisible;
