window.addEventListener("scroll", function() {
  var scrollTop = window.scrollY;
  var footerOffsetTop = document.querySelector("footer").offsetTop;
  var navbar = document.querySelector(".navbar");

  if (scrollTop + window.innerHeight > footerOffsetTop) {
    navbar.classList.remove("fixed-top");
  } else {
    navbar.classList.add("fixed-top");
  }
});
