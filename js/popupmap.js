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