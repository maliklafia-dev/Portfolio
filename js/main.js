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
