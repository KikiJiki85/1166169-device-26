var link = document.querySelector(".modal-map");
var popup = document.querySelector(".modal-bigmap");
var close = document.querySelector(".modal-close");

var writeUsLink = document.querySelector(".writeus");
var writeUsPopup = document.querySelector(".modal-writeus");
var formWriteUs = writeUsPopup.querySelector(".form-writeus");
var userName = writeUsPopup.querySelector("#user-name");
var storageUserName = "";
var userEmail = writeUsPopup.querySelector("#user-email");
var storageUserEmail = "";
var userText = writeUsPopup.querySelector("#user-text");
var closeWriteUs = writeUsPopup.querySelector(".modal-close");
var isStorageSupport = true; // Флаг доступности LocalStorage

// Первое модальное окно показа карты
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

// Нажатие клавиши ESC при открытом модальном окне
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

// Второе модальное окно напишите нам

try {
  storageUserName = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}

try {
  storageUserEmail = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show");
  userName.focus();

  //  if (storageUserName) {
  //    userName = storageUserName;
  //    userEmail.focus();
  //  } else {
  //    userName.focus();
  //  }
  //
  //
  //  if (storageUserEmail) {
  //    userEmail = storageUserEmail;
  //    userText.focus();
  //  } else {
  //    userEmail.focus();
  //  }
});

formWriteUs.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userText.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-error");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});

closeWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
  writeUsPopup.classList.remove("modal-error");
});
