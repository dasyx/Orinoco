function displayConfirm () {

    let valOrder = document.getElementById("confirm_msg");
    let orderId = localStorage.getItem("orderId");
    let totalAmount = localStorage.getItem("totalAmount");

    // Création du corps de message dans le DOM
    let valOrderCont = document.createElement("div");
    let valOrderText = document.createElement("p");
    let valOrderId = document.createElement("p");
    let valOrderAmount = document.createElement("p");

    valOrderCont.setAttribute("id", "msg_body");
    valOrderText.setAttribute("class", "text_value");
    valOrderId.setAttribute("class", "id_value");
    valOrderAmount.setAttribute("class", "amount_value");

    valOrder.appendChild(valOrderCont);
    valOrderCont.appendChild(valOrderText);
    valOrderCont.appendChild(valOrderId);
    valOrderCont.appendChild(valOrderAmount);

    valOrderText.textContent = "Merci cher client !";
    valOrderId.textContent = "Votre commande " + orderId + "  sera traitée d'ici peu";
    valOrderAmount.textContent = "Le montant total de la commande est de   " + totalAmount;

}

// Récupération des données du tableau
let displayValConfirm = (window.localStorage.getItem("orderId"));
  
// Condition qui affichera ou non le bouton de validation de panier
if(displayValConfirm.length == 0){

  document.getElementById("confirm_msg").style.display = "none";

} else {

  displayConfirm();

}