// Récupération des paramètres de l'URL
const params = new URLSearchParams(window.location.search);
const idTeddy = params.get("id");

getAllBears(url + idTeddy)

.then(function(response){
// Création de l'affichage selon les données du produit
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
})