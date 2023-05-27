const modalClose = () => {
  const modalBox = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  overlay.classList.add("hidden");
  modalBox.classList.add("hidden");
};

export default modalClose;
