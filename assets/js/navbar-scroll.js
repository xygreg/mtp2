(function() {
  let navContainer = document.getElementById("nav-container");
  let footer = document.querySelector("footer");
  let lastScrollTop = 0;
  let isHidden = false;

  function updateNavbar() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let isFooterVisible = footer.getBoundingClientRect().top < window.innerHeight;

    if (scrollTop > lastScrollTop && !isHidden && isFooterVisible) {
      navContainer.classList.add("hidden");
      isHidden = true;
    } else if (scrollTop < lastScrollTop && isHidden) {
      navContainer.classList.remove("hidden");
      isHidden = false;
    }

    lastScrollTop = scrollTop;
  }

  window.addEventListener("scroll", updateNavbar);
})();
