getAllBears(url + idTeddy)

  .then (choice => {
  // Création de l'affichage selon les données du produit mis au panier
      addToCart(choice);
})