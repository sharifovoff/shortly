document.querySelector(".burger-btn").addEventListener("click", burger);

function burger() {
  document.querySelector(".mobil-menu").classList.toggle("active");
  document.querySelector(".burger-btn").classList.toggle("open");
}
