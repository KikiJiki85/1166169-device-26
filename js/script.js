var link = document.querySelector(".modal-map");
var popup = document.querySelector(".modal-bigmap");
var close = document.querySelector(".modal-close");
var link2 = document.querySelector(".writeus");
var popup2 = document.querySelector(".modal-writeus");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("hidden");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("hidden");
});

link2.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup2.classList.remove("hidden"); 
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup2.classList.add("hidden");
});

