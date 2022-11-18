logo.addEventListener("click", tartiflette);
function tartiflette() {
  let elements = document.getElementsByClassName("cacher");
  elements[0].classList.toggle("yang");
  
};
formations.addEventListener("click", ouvrepageformations);
function ouvrepageformations() {
  window.open("4PageFormations.html", "_self");
}
accueil.addEventListener("click", ouvrepagedaccueil);
function ouvrepagedaccueil() {
  window.open("1pageaccueil.html", "_self");
}
divers.addEventListener("click", ouvrepagedivers);
function ouvrepagedivers() {
  window.open("5PageDivers.html", "_self");
}
competences.addEventListener("click", ouvrepagecompetences);
function ouvrepagecompetences() {
  window.open("2PageCompetences.html", "_self");
}
experiences.addEventListener("click", ouvrepageexperiences);
function ouvrepageexperiences() {
  window.open("3PageExperiences.html", "_self");
}
