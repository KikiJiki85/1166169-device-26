//  Переменные первого модального окна Карты
var mapLink = document.querySelector(".modal-map");
var mapPopup = document.querySelector(".modal-bigmap");
var mapClose = document.querySelector(".modal-close");

//  Переменные второго модального окна Напишите Нам
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

//  Первое модальное окно карты
mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

//  Нажатие клавиши ESC при открытом модальном окне
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
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

  //    if (storageUserName) {
  //      userName = storageUserName;
  //      userEmail.focus();
  //    } else {
  //      userName.focus();
  //    }
  //  
  //    if (storageUserEmail) {
  //      userEmail = storageUserEmail;
  //      userText.focus();
  //    } else {
  //      userEmail.focus();
  //    }
});

formWriteUs.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userText.value) {
    evt.preventDefault();

    if (!userName.value) {
      userName.classList.add("modal-invalid");
    } else {
      userName.classList.remove("modal-invalid");
    }

    if (!userEmail.value) {
      userEmail.classList.add("modal-invalid");
    } else {
      userEmail.classList.remove("modal-invalid");
    }

    if (!userText.value) {
      userText.classList.add("modal-invalid");
    } else {
      userText.classList.remove("modal-invalid");
    }


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

//  Нажатие клавиши ESC при открытом модальном окне
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUsPopup.classList.contains("modal-show")) {
      writeUsPopup.classList.remove("modal-show");
    }
  }
});
