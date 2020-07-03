var addCartMain = document.querySelectorAll(".btn-buy");
var openCartMain = document.querySelector(".add-cart-popup");
var closeCartMain = openCart.querySelector(".modal-close");
var continueShoppingMain = openCart.querySelector(".btn-back")

addCartMain.forEach(function (entry) { 
    entry.addEventListener("click", function (evt)
    {
        evt.preventDefault();
        openCartMain.classList.add("popup-show");
    });
});

continueShoppingMain.addEventListener("click", function(evt) {
    openCartMain.classList.remove("popup-show");
});

closeCartMain.addEventListener("click", function(evt) {
    openCartMain.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (openCartMain.classList.contains("popup-show")) {
        evt.preventDefault();
        openCartMain.classList.remove("popup-show");
      }
    }
});