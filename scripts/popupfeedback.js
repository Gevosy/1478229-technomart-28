var buttonWriteUs = document.querySelector(".btn-write"); 
var popupWriteUs = document.querySelector(".popup-write-us");
var forma = popupWriteUs.querySelector(".form-write-us");
var closePopup = popupWriteUs.querySelector(".modal-close");
var nameUser = popupWriteUs.querySelector("input[type=text]")
var emailUser= popupWriteUs.querySelector("input[type=email]")
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("nameUser");
} 

catch (err) {
  isStorageSupport = false;
}

buttonWriteUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupWriteUs.classList.add("popup-show");

    if (storage) {
        nameUser.value = storage;
        emailUser.focus();
    }
    
    else {
        nameUser.focus();
    }
});

forma.addEventListener("submit", function (evt) {
  if (!nameUser.value || !emailUser.value) {
    evt.preventDefault();
    popupWriteUs.classList.remove("modal-error");
    popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
    popupWriteUs.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("text", popupWriteUs.value);
    }
});

closePopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("popup-show");
  popupWriteUs.classList.remove("modal-error");
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupWriteUs.classList.contains("popup-show")) {
        evt.preventDefault();
        popupWriteUs.classList.remove("popup-show");
        popupWriteUs.classList.remove("modal-error");
      }
    }
});