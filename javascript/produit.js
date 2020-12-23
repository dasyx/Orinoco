function getAllBears(url) { // Fonction pour récupérer les données du back en asynchrone
  return new Promise((resolve, reject) => { // La fonction renvoie une promesse pour éviter les callback
      let request = new XMLHttpRequest(); // On crée un nouvel objet XMLHttpRequest
      request.open("GET", url); // On initialise la requête en précisant le type et l'url cible
      request.send(); // On envoie la requête
      request.onreadystatechange = function() { // A chaque changement d'état de la propriété onreadystatechange
          if (this.readyState === 4) { // Si l'état vaut 4 (=DONE) la requête est terminée
              if (this.status === 200) { // On check aussi le status: si il est = 200 -> la requête est un succès
                  resolve(JSON.parse(this.responseText)); // On resolve donc la promesse en envoyant la réponse, donc nos objets
              } else {
                  reject(request); // Sinon on la rejette et on passe en argument la requête pour éventuellement récupérer les codes erreurs
              }
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
choixText.appendChild(choixLink);

// Contenu des balises index HTML 
choixName.textContent = response.name;
choixPrice.textContent = response.price / 100 + " euros";
choixLink.textContent = "Ajoutez-moi !";
})