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