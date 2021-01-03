// URL de l'API
const url = "http://localhost:3000/api/teddies/";

function getAllBears(url){
    return new Promise((resolve) => {
      let request = new XMLHttpRequest();
      request.open('GET', url);
      request.send();
      request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status >= 200) {
          resolve(JSON.parse(this.responseText));
          console.log("fonction OK");
        }
      }
    })
  }
// Création de la fonction qui affichera tous les oursons sous forme de liste sur la page index.html
function displayProduct(teddy){

    let listeProduit = document.getElementById("teddy_list");

    let prodCont = document.createElement("section");
    let prodImage = document.createElement("div");
    let prodText = document.createElement("div");
    let prodPhoto = document.createElement("img");
    let prodName = document.createElement("h3");
    let prodPrice = document.createElement("p");
    let prodLink = document.createElement("a");

    // Ajout des attributs aux balises de la page index.html
    prodCont.setAttribute("class", "produit");
    prodImage.setAttribute("class", "produit_illustration");
    prodPhoto.setAttribute("src", teddy.imageUrl);
    prodPhoto.setAttribute("alt", "photo ours peluches");
    prodText.setAttribute("class", "produit_description");
    prodName.setAttribute("class", "produit_name");
    prodPrice.setAttribute("class", "produit_price");
    prodLink.setAttribute("href", "produit.html?id=" + teddy._id);

    // Agencement des éléments de la page index.html
    listeProduit.appendChild(prodCont);
    prodCont.appendChild(prodImage);
    prodImage.appendChild(prodPhoto);
    prodCont.appendChild(prodText);
    prodText.appendChild(prodName);
    prodText.appendChild(prodPrice);
    prodText.appendChild(prodLink);

    // Contenu des balises de la page index.html 
    prodName.textContent = teddy.name;
    prodPrice.textContent = teddy.price / 100 + " euros";
    prodLink.textContent = "Choisissez-moi !";
}
    // Création de la fonction qui affichera chaque ourson individuellement sur la page produit.html
function productChoice(response){
    let choixProduit = document.getElementById("teddy_choice");

    let choixCont = document.createElement("section");
    let choixImage = document.createElement("div");
    let choixText = document.createElement("div");
    let choixPhoto = document.createElement("img");
    let choixName = document.createElement("h3");
    let choixPrice = document.createElement("p");
    let choixOpt = document.createElement("div");
    let choixLabel = document.createElement("label");
        choixLabel.htmlFor = "choix_option";
    let choixColor = document.createElement("select");
    let choixAjout = document.createElement("div");
    let choixLink = document.createElement("button");

    // Ajout des attributs à la page produit.html
    choixCont.setAttribute("class", "choix");
    choixImage.setAttribute("class", "choix_illustration");
    choixPhoto.setAttribute("src", response.imageUrl);
    choixPhoto.setAttribute("alt", "photo ours peluches");
    choixText.setAttribute("class", "choix_description");
    choixName.setAttribute("class", "choix_name");
    choixPrice.setAttribute("class", "choix_price");
    choixOpt.setAttribute("class", "choix_couleur");
    choixColor.setAttribute("id", "choix_option");
    choixAjout.setAttribute("class", "choix_ajout_panier");

    // Agencement des éléments à la page produit.html
    choixProduit.appendChild(choixCont);
    choixCont.appendChild(choixImage);
    choixImage.appendChild(choixPhoto);
    choixCont.appendChild(choixText);
    choixText.appendChild(choixName);
    choixText.appendChild(choixPrice);
    choixCont.appendChild(choixOpt);
    choixOpt.appendChild(choixLabel);
    choixOpt.appendChild(choixColor);
    choixCont.appendChild(choixAjout);
    choixAjout.appendChild(choixLink);

    // Contenu des balises en fonction de chaque article
    choixName.textContent = response.name;
    choixPrice.textContent = response.price / 100 + " euros";
    choixLabel.textContent = "Choisissez ma couleur :";
    choixLink.textContent = "Ajouter au panier";

    // Création d'une boucle for qui itère le résultat de la fonction qui récupère l'url de l'api  
    for (var i = 0; i < response.colors.length; i++) {
      // Création de chaque élément option en fonction du produit affiché
        var option = document.createElement("option");
        option.value = response.colors[i];
        option.text = response.colors[i];
        choixColor.appendChild(option);
    }
    // Assigne valeur à envoyer à localStorage
    const product = {
        id: response._id,
        name: response.name,
        price: response.price,
        imageUrl: response.imageUrl,
        quantity: 1,
  }
    // Envoie valeur à localStorage après un clique
    choixLink.addEventListener("click", () => {
    // récupérer panier localstorage
    let panier = JSON.parse(localStorage.getItem("panier"));
    if (panier === null) {
      panier = {};
    }
    // ajouter le produit au panier
    if (panier[product.id] !== undefined) {
      panier[product.id].quantity += 1;
    } else {
      panier[product.id] = product;
    }
    // update panier localstorage
    localStorage.setItem("panier", JSON.stringify(panier));
    choixLink.classList.add("invisible");
    choixAjout.textContent = "Le produit a été ajouté au panier !";
  });
};

 // Création de la fonction qui affiche le produit sélectionné au panier
 function displayCart(response){
  let selCart = document.getElementById("cart");

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
  selPhoto.setAttribute("src", response.imageUrl);
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
  selName.textContent = response.name;
  selPrice.textContent = response.price / 100 + " euros";
  selQtyPlus.textContent = "+";
  selQtyMin.textContent = "-";
  selQtyDel.textContent = "Supprimer";
}