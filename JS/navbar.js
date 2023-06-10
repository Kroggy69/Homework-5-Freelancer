var scrolled = function () {
    const nav_bar = document.body.querySelector("header");
    if (!nav_bar) {
      return;
    }
    if (window.scrollY === 0) {
      nav_bar.classList.remove("scrolled");
    } else {
      nav_bar.classList.add("scrolled");
    }
  };
  scrolled();
  document.addEventListener("scroll", scrolled);