const modalOpen = () => {
  const modalBox = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  overlay.classList.remove("hidden");
  modalBox.classList.remove("hidden");
};

export default modalOpen;
