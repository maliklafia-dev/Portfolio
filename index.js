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

/*récupérer l'émail et l'envoyer*/
/*
document.getElementById("contact").addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le formulaire de se soumettre normalement

  // Récupérer les données du formulaire
  var nom = document.getElementById("nom").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Valider les données
  if (nom.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Veuillez remplir tous les champs du formulaire.");
    return;
  }

  // Envoyer les données au serveur
  var url = ""; // Remplacez par l'URL de votre backend
  var data = {
    nom: nom,
    email: email,
    message: message,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        alert("Votre message a été envoyé avec succès.");
      } else {
        alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
      }
    })
    .catch((error) => {
      console.error("Erreur lors de la requête fetch:", error);
      alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
    });
});
*/

/*afficher l'ensemble de mes projets*/

// Fonction pour effectuer une requête AJAX et afficher les projets
async function fetchAndDisplayProjects() {
  try {
    const response = await fetch("http://127.0.0.1/portfolio/index.php");

    if (!response.ok) {
      throw new Error(
        `La requête a échoué avec le statut : ${response.status}`
      );
    }

    const projects = await response.json();
    displayProjects(projects);
  } catch (error) {
    console.error("Erreur lors de la récupération des projets : ", error);
  }
}

// Fonction pour afficher les projets sur la page
function displayProjects(projects) {
  var projectsContainer = document.getElementById("projects-container");
  console.log(projectsContainer);

  // Effacer le contenu actuel du conteneur
  projectsContainer.innerHTML = "";

  // Parcourir les projets et les ajouter au conteneur
  projects.forEach(function (project) {
    var projectCard = document.createElement("div");
    projectCard.className = "card";

    projectCard.innerHTML =
      '<div id="video_demo"><video width="400" height="200" muted controls src="' +
      project.demo +
      '"></video></div>' +
      '<h4 id="titreProjet">' +
      project.title +
      "</h4>" +
      '<p id="description">' +
      project.description +
      "</p>" +
      '<a href="' +
      project.github_link +
      '" class="btn btn-mesProjets">En savoir plus</a>';

    projectsContainer.appendChild(projectCard);
  });
}

// Appeler la fonction pour afficher les projets au chargement de la page
window.onload = function () {
  fetchAndDisplayProjects();
};
