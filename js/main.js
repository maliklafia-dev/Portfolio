/* Current year configuration */
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();

year.setAttribute("dateTime", thisYear);
year.textContent = thisYear;

/*----------------------------------*/
/* navbar responsive config */
hamburgerButton = document.querySelector(".header__nav-toggler");
navUl = document.querySelector(".header__ul");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("active");
  navUl.classList.toggle("active");
});

/* hide menu when users click on link */
const links = document.querySelectorAll("ul li");
console.log(links);

links.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerButton.classList.toggle("active");
    navUl.classList.remove("active");
  });
});

/*------------------------------------------- */
//scroll reveal elements animation
window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal"); //elements to reveal

  for (var i = 0; i < reveals.length; i++) {
    //number of elements to reveal
    var windowHeight = window.innerHeight; //take the height of current element
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

/*------------------------------------------- */
//images hero reveal animation
