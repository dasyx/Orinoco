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
//URL de l'API
const url = "http://localhost:3000/api/teddies";

// Récupération des paramètres de l'URL
const params = new URLSearchParams(window.location.search);
const idTeddy = params.get("id");

getAllBears("http://localhost:3000/api/teddies/" + idTeddy)

.then(function(response){
// Fourni l'affichage selon les données du produit
let choixProduit = document.getElementById("teddy_choice");

let choixCont = document.createElement("section");
let choixImage = document.createElement("div");
let choixText = document.createElement("div");
let choixPhoto = document.createElement("img");
let choixName = document.createElement("h3");
let choixPrice = document.createElement("p");
let choixColor = document.createElement("select");
let choixLink = document.createElement("a");

//Ajout des attributs au balise index HTML 
choixCont.setAttribute("class", "choix");
choixImage.setAttribute("class", "choix_illustration");
choixPhoto.setAttribute("src", response.imageUrl);
choixPhoto.setAttribute("alt", "photo ours peluches");
choixText.setAttribute("class", "choix_description");
choixName.setAttribute("class", "choix_name");
choixPrice.setAttribute("class", "choix_price");
choixLink.setAttribute("href", "panier.html?id=" + response._id);

// Agencement des éléments index HTML
choixProduit.appendChild(choixCont);
choixCont.appendChild(choixImage);
choixImage.appendChild(choixPhoto);
choixCont.appendChild(choixText);
choixText.appendChild(choixName);
choixText.appendChild(choixPrice);
choixText.appendChild(choixColor);
choixText.appendChild(choixLink);

// Contenu des balises index HTML 
choixName.textContent = response.name;
choixPrice.textContent = response.price / 100 + " euros";
choixLink.textContent = "Ajouter au panier";

  for (var i = 0; i < response.colors.length; i++) {
    var option = document.createElement("option");
    option.value = response.colors[i];
    option.text = response.colors[i];
    choixColor.appendChild(option);
  }
})