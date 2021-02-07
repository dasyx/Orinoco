function displayConfirmMsg() {
    // Récupération des données du tableau
    let displayValConfirm = (window.localStorage.getItem("orderId"));
    let confirmMsg = document.getElementById("confirm_msg");
    let confirmMsgLowRes = document.getElementById("confirm_msg_lowRes");
  
    // Condition qui affichera ou non le message de confirmation de commande
    // En fonction de la quantité dans le localStorage et de la résolution d'affichage
  if(displayValConfirm.length == 0){

    document.getElementById("confirm_msg").style.display = "none";
    document.getElementById("confirm_msg_lowRes").style.display = "none";

  } if (confirmMsg.style.display = "none" && displayValConfirm.length > 0) {

    displayConfirm_lowRes();

  } if (confirmMsgLowRes.style.display = "none" && displayValConfirm.length > 0) {

    displayConfirm();
    localStorage.clear(); //Commande pour vider le localStorage pour les futures commandes
  }
}
displayConfirmMsg();

function displayConfirm_lowRes() {
    // Récupération des éléments du localStorage pour les afficher dans le DOM
    let valOrder = document.getElementById("confirm_msg_lowRes");
    let orderId = localStorage.getItem("orderId");
    let totalAmount = localStorage.getItem("totalAmount");
    console.log(orderId);

    // Création du corps de message dans le DOM
    let valOrderCont = document.createElement("div");
    let valOrderText = document.createElement("p");
    let valOrderId = document.createElement("p");
    let valOrderId_1 = document.createElement("p");
    let valOrderId_2 = document.createElement("p");
    let valOrderAmount = document.createElement("p");
    let valOrderAmount_1 = document.createElement("p");
    let valOrderAmount_2 = document.createElement("p");

    // Création du bouton de retour à la page principale
    let homeButton = document.createElement("button");

    // Création des attributs des éléments du DOM
    valOrderCont.setAttribute("id", "msg_body");
    valOrderText.setAttribute("class", "text_value");
    valOrderId.setAttribute("class", "id_value");
    valOrderId_1.setAttribute("class", "id_value1");
    valOrderId_2.setAttribute("class", "id_value2");
    valOrderAmount.setAttribute("class", "amount_value");
    valOrderAmount_1.setAttribute("class", "amount_value1");
    valOrderAmount_2.setAttribute("class", "amount_value2");

    homeButton.setAttribute("id", "home_button");
    homeButton.setAttribute("class", "button_style");
    homeButton.setAttribute("onclick", "backHome()");

    valOrder.appendChild(valOrderCont);
    valOrderCont.appendChild(valOrderText);
    valOrderCont.appendChild(valOrderId);
    valOrderCont.appendChild(valOrderId_1);
    valOrderCont.appendChild(valOrderId_2);
    valOrderCont.appendChild(valOrderAmount);
    valOrderCont.appendChild(valOrderAmount_1);
    valOrderCont.appendChild(valOrderAmount_2);

    valOrder.appendChild(homeButton);


    valOrderText.textContent = "Merci cher client !";
    valOrderId.textContent = "Votre commande ";
    valOrderId_1.textContent = orderId;
    valOrderId_2.textContent = "sera traitée d'ici peu";
    valOrderAmount.textContent = "Le montant total";
    valOrderAmount_1.textContent = "de la commande est de";
    valOrderAmount_2.textContent = totalAmount;

    homeButton.textContent = "Passer une nouvelle commande";
}
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
// Lancement de la fonction de retour à la page d'accueil au clic
function backHome(){
    window.open("index.html", "_self");
}