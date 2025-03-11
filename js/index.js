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

const scrollDownLink = document.getElementById('scroll-down-link');

scrollDownLink.addEventListener('click', function (e) {
    e.preventDefault();

    const content = document.getElementById('content');
    const contentTop = content.getBoundingClientRect().top + window.scrollY;
    const destination = contentTop + window.innerHeight;

    window.scrollTo({
        top: destination,
        behavior: 'smooth'
    });
});
