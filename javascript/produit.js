// Récupération des paramètres de l'URL
const params = new URLSearchParams(window.location.search);
const idTeddy = params.get("id");

getAllBears(url + idTeddy)

  .then (response => {
  // Création de l'affichage selon les données du produit
      productChoice(response);
})