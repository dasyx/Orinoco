// Récupération des paramètres de l'URL
const params = new URLSearchParams(window.location.search);
const idTeddy = params.get("id");

getAllBears(url + idTeddy)

  .then (choice => {
  // Création de l'affichage selon les données du produit mis au panier
      addToCart(choice);
})