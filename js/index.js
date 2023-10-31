let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function showImage(imageId) {
  var imagePopup = document.getElementById(imageId + "-popup");
  if (imagePopup) {
      imagePopup.style.display = "block";
  }
}

function hideImage(imageId) {
  var imagePopup = document.getElementById(imageId + "-popup");
  if (imagePopup) {
      imagePopup.style.display = "none";
  }
}

window.addEventListener('mousemove', function(e){
  var bg = document.getElementById("bg-move");
  var bgX = e.clientX;
  var bgY = e.clientY;

  bg.style.backgroundPositionX = (bgX * 0.02) + '%';
  bg.style.backgroundPositionY = (bgY * 0.02) + '%';
})