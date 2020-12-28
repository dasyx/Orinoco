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
function displayProduct(teddy){

    let listeProduit = document.getElementById("teddy_list");

    let prodCont = document.createElement("section");
    let prodImage = document.createElement("div");
    let prodText = document.createElement("div");
    let prodPhoto = document.createElement("img");
    let prodName = document.createElement("h3");
    let prodPrice = document.createElement("p");
    let prodLink = document.createElement("a");

    //Ajout des attributs au balise index HTML 
    prodCont.setAttribute("class", "produit");
    prodImage.setAttribute("class", "produit_illustration");
    prodPhoto.setAttribute("src", teddy.imageUrl);
    prodPhoto.setAttribute("alt", "photo ours peluches");
    prodText.setAttribute("class", "produit_description");
    prodName.setAttribute("class", "produit_name");
    prodPrice.setAttribute("class", "produit_price");
    prodLink.setAttribute("href", "produit.html?id=" + teddy._id);

    // Agencement des éléments index HTML
    listeProduit.appendChild(prodCont);
    prodCont.appendChild(prodImage);
    prodImage.appendChild(prodPhoto);
    prodCont.appendChild(prodText);
    prodText.appendChild(prodName);
    prodText.appendChild(prodPrice);
    prodText.appendChild(prodLink);

    // Contenu des balises index HTML 
    prodName.textContent = teddy.name;
    prodPrice.textContent = teddy.price / 100 + " euros";
    prodLink.textContent = "Choisissez-moi !";
}

function productChoice(response){
    let choixProduit = document.getElementById("teddy_choice");

    let choixCont = document.createElement("section");
    let choixImage = document.createElement("div");
    let choixText = document.createElement("div");
    let choixPhoto = document.createElement("img");
    let choixName = document.createElement("h3");
    let choixPrice = document.createElement("p");
    let choixOpt = document.createElement("div");
    let choixLabel = document.createElement("label");
    choixLabel.htmlFor ="choix_option";
    let choixColor = document.createElement("select");
    let choixAjout = document.createElement("div");
    let choixLink = document.createElement("a");

    // Ajout des attributs à la page produit.html
    choixCont.setAttribute("class", "choix");
    choixImage.setAttribute("class", "choix_illustration");
    choixPhoto.setAttribute("src", response.imageUrl);
    choixPhoto.setAttribute("alt", "photo ours peluches");
    choixText.setAttribute("class", "choix_description");
    choixName.setAttribute("class", "choix_name");
    choixPrice.setAttribute("class", "choix_price");
    choixOpt.setAttribute("class", "choix_couleur");
    choixColor.setAttribute("id", "choix_option");
    choixAjout.setAttribute("class", "choix_ajout_panier");
    choixLink.setAttribute("href", "panier.html?id=" + response._id);

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
}