var buttonWriteUs = document.querySelector(".btn-write"); 
var popupWriteUs = document.querySelector(".popup-write-us");
var formWriteUs = popupWriteUs.querySelector("form");
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

formWriteUs.addEventListener("submit", function (evt) {

  if (!nameUser.value || !emailUser.value) {

    evt.preventDefault();
    popupWriteUs.classList.remove("modal-error");
    popupWriteUs.offsetWidth = formWriteUs.offsetWidth;
    popupWriteUs.classList.add("modal-error");

  } 
  
  else {
    if (isStorageSupport) {
      localStorage.setItem("text", nameUser.value);
    }
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
      }
    }
});

var linkMap = document.querySelector(".modal-map");
var openMap = document.querySelector(".popup-map");
var closeMap = openMap.querySelector(".modal-close");

linkMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    openMap.classList.add("popup-show");
});

closeMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    openMap.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (openMap.classList.contains("popup-show")) {
        evt.preventDefault();
        openMap.classList.remove("popup-show");
      }
    }
});

var addCart = document.querySelectorAll(".btn-buy");
var openCart = document.querySelector(".add-cart-popup");
var closeCart = openCart.querySelector(".modal-close");
var closeCart1 = openCart.querySelector(".modal-close");
var continueShopping = openCart.querySelector(".btn-back")

addCart.forEach(function (entry) { 
    entry.addEventListener("click", function (evt)
    {
        evt.preventDefault();
        openCart.classList.add("popup-show");
    });
});

continueShopping.addEventListener("click", function(evt) {
    openCart.classList.remove("popup-show");
});

closeCart.addEventListener("click", function(evt) {
    openCart.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (openCart.classList.contains("popup-show")) {
        evt.preventDefault();
        openCart.classList.remove("popup-show");
      }
    }
});