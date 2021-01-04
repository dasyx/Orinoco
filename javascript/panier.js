let cart = JSON.parse(window.localStorage.getItem("productsList"));

const selCart = document.getElementById("cart"); 

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

  // Agencement des éléments et filiation page panier.html
  // Le produit sélectionné 
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
}