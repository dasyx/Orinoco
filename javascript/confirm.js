function displayConfirm () {

    // Récupération des éléments du localStorage pour les afficher dans le DOM
    let valOrder = document.getElementById("confirm_msg");
    let orderId = localStorage.getItem("orderId");
    let totalAmount = localStorage.getItem("totalAmount");

    // Création du corps de message dans le DOM
    let valOrderCont = document.createElement("div");
    let valOrderText = document.createElement("p");
    let valOrderId = document.createElement("p");
    let valOrderAmount = document.createElement("p");

    // Création du bouton de retour à la page principale
    let homeButton = document.createElement("button");

    // Création des attributs des éléments du DOM
    valOrderCont.setAttribute("id", "msg_body");
    valOrderText.setAttribute("class", "text_value");
    valOrderId.setAttribute("class", "id_value");
    valOrderAmount.setAttribute("class", "amount_value");
    homeButton.setAttribute("id", "home_button");
    homeButton.setAttribute("class", "button_style");
    homeButton.setAttribute("onclick", "backHome()");

    valOrder.appendChild(valOrderCont);
    valOrderCont.appendChild(valOrderText);
    valOrderCont.appendChild(valOrderId);
    valOrderCont.appendChild(valOrderAmount);
    valOrder.appendChild(homeButton);


    valOrderText.textContent = "Merci cher client !";
    valOrderId.textContent = "Votre commande "  + orderId + " sera traitée d'ici peu";
    valOrderAmount.textContent = "Le montant total de la commande est de " + totalAmount;
    homeButton.textContent = "Passer une nouvelle commande";
}

function backHome(){
  window.open("index.html", "_self");
}

// Récupération des données du tableau
let displayValConfirm = (window.localStorage.getItem("orderId"));
  
// Condition qui affichera ou non le bouton de validation de panier
if(displayValConfirm.length == 0){

  document.getElementById("confirm_msg").style.display = "none";

} else {

  displayConfirm();
  localStorage.clear(); 
}