function valCart (){

    let valCart = document.getElementById("val_cart");

    // Création d'un bouton de validation de panier
    let valButtonCont = document.createElement("div");
    let valButton = document.createElement("button");

    // Ajout de l'attribut et filiation du bouton valider panier
    valButtonCont.setAttribute("class", "val_button_cont");
    valButton.setAttribute("id", "display_form");
    valButton.setAttribute("onclick", "displayForm()");

    // Agencement des éléments et filiation du formulaire dans la page panier.html
    valCart.appendChild(valButtonCont);
    valButtonCont.appendChild(valButton);

    valButton.textContent = "Valider le panier";
}

// Récupération des données du tableau
let displayForm = JSON.parse(window.localStorage.getItem("productsList"));
  
// Condition qui affichera ou non le message du panier vide
if(displayForm.length == 0){

  document.getElementById("display_form").style.display = "none";

} else {

  valCart();

}