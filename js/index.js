const modal = document.querySelector("#modal");
const connect = document.querySelector("#connect");
const closeModal = document.querySelector("#close-button");

connect.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

document.addEventListener("click", (event) => {
  if (modal.open && event.target !== connect && event.target !== closeModal) {
    const rect = modal.getBoundingClientRect(); // получаем размеры и координаты модального окна
    const isInModal =
      rect.top <= event.clientY &&
      event.clientY <= rect.bottom &&
      rect.left <= event.clientX &&
      event.clientX <= rect.right; // определяем, находится ли клик внутри области модального окна

    if (!isInModal) {
      modal.close();
    }
  }
});
