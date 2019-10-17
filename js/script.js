var link = document.querySelector(".modal-map");
var popup = document.querySelector(".modal-bigmap");
var close = document.querySelector(".modal-close");
var writeus = document.querySelector(".modal-writeus");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("hidden");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("hidden");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeus.classList.add("hidden");
});