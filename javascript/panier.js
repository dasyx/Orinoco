function displayCart (){
// Récupération des données du localStorage
let cart = JSON.parse(window.localStorage.getItem("productsList"));
console.log(cart); 

let selCart = document.getElementById("cart");

// Boucle qui va créer un item par article dans le panier 
for(let i in cart){

  let selDisplay = document.createElement("section");
  let selImage = document.createElement("div");
  let selPhoto = document.createElement("img");
  let selText = document.createElement("div");
  let selName = document.createElement("h3");
  let selPrice = document.createElement("p");

  // Création d'un bouton de modif de quantité
  let selQtyCont = document.createElement("div");
  let selQtyPlus = document.createElement("button");
  let selQtyMin = document.createElement("button");
  let selQtyInput = document.createElement("input");

  // Création d'un bouton de vidage de panier
  let selQtyDelCont = document.createElement("div");
  let selQtyDel = document.createElement("button");

  // Ajout des attributs de la selection produit à la page panier.html
  selDisplay.setAttribute("class", "select");
  selImage.setAttribute("class", "select_illustration");
  selPhoto.setAttribute("src", cart[i].imageUrl);
  selPhoto.setAttribute("alt", "photo ours peluches");
  selText.setAttribute("class", "select_description");
  selName.setAttribute("class", "select_name");
  selPrice.setAttribute("class", "select_price");

  // Ajout des attributs du bouton de modif de quantité
  selQtyCont.setAttribute("class", "btnQty_container");
  selQtyPlus.setAttribute("id", "increase");
  selQtyMin.setAttribute("id", "decrease");
  selQtyInput.setAttribute("id", "input");

  // Ajout de l'attribut du bouton vidage panier
  selQtyDelCont.setAttribute("class","empty_cart-container");
  selQtyDel.setAttribute("id", "empty_cart");
  selQtyDel.setAttribute("onclick", "delItemCart()");

  // Agencement des éléments et filiation page panier.html
  selCart.appendChild(selDisplay);
  selDisplay.appendChild(selImage);
  selImage.appendChild(selPhoto);
  selDisplay.appendChild(selText);
  selText.appendChild(selName);
  selText.appendChild(selPrice);
  selDisplay.appendChild(selQtyCont);
  selQtyCont.appendChild(selQtyMin);
  selQtyCont.appendChild(selQtyInput);
  selQtyCont.appendChild(selQtyPlus);
  selDisplay.appendChild(selQtyDelCont);
  selQtyDelCont.appendChild(selQtyDel);

  // Contenu des balises en fonction de l'input / article
  selName.textContent = cart[i].name;
  selPrice.textContent = cart[i].price / 100 + " euros";
  selQtyPlus.textContent = "+";
  selQtyMin.textContent = "-";
  selQtyDel.textContent = "Supprimer";
  selQtyDel.onclick = function delItemCart(){
    let removeElt = localStorage.getItem("productsList");
    // Récupération du tableau articles
    removeElt = JSON.parse(removeElt);
    // Suppression de l'article
    removeElt.splice(cart[i],1);
    // Réecriture du tableau
    removeElt = JSON.stringify(removeElt);
    // Renvoi des données au localStorage 
    localStorage.setItem("productsList", removeElt);
    // Actualise la page dynamiquement
    location.reload(); 
  }
}}

// Récupération des données du tableau
let msgCart = JSON.parse(window.localStorage.getItem("productsList"));

// Condition qui affichera ou non le message du panier vide
if(msgCart.length == 0){
  document.getElementById("msg_cart").innerHTML = "Votre panier est vide !";
} else {
  displayCart();
  let affCart = document.getElementById("msg_cart_cont");
  affCart.remove();
}


