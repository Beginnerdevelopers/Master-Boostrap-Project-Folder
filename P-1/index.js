function navManu() {
  let navbar = document.querySelector(".navbar-sticky");
  let scrolltopbtn = document.querySelector("#scrollup");
  window.scroll = function () {
    var scroll = document.documentElement.scrollTop;
    if (scroll >= 120) {
      navbar.classList.add("navbar-sticky-moved-on");
    } else {
      navbar.classList.remove("navbar-sticky-moved-on");
    }
    if (scroll >= 250) {
      navbar.classList.add("navbar-sticky-transition");
    //   scrolltopbtn.classList.add("scrollActive");
    } else {
      navbar.classList.remove("navbar-sticky-transition");
    //   scrolltopbtn.classList.remove("scrollActive");
    }
    if (scroll >= 500) {
      navbar.classList.add("navbar-sticky-on ");
    } else {
      navbar.classList.remove("navbar-sticky-on ");
    }
  };
}
navManu();

document.addEventListener("DOMContentLoaded", () => {
  function cuonter(id, start, end, duration) {
    let obj = document.getElementById(id);
    current = start;
    range = end - start;
    increment = end > start ? 1 : -1;
    console.log(increment)
    step = Math.abs(Math.floor(duration / range));
    timer = setInterval(() => {
      current == increment;
      obj.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
  }
  cuonter("count1", 0, 10, 2000);
  cuonter("count2", 100, 20, 1000);
  cuonter("count3", 10, 10, 4000);
  cuonter("count4", 10, 10, 2000);
});
