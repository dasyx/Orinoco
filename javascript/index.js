//URL de l'API
getAllBears("http://localhost:3000/api/teddies")


getAllBears = () => {
    return new Promise((resolve) => {
      let request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (
          this.readyState == XMLHttpRequest.DONE &&
          this.status >= 200 &&
          this.status < 400
        ) {
          resolve(JSON.parse(this.responseText));
          console.log("Connecté");
        } else {
    }
};
    request.open('GET', "http://localhost:3000/api/teddies" + idTeddyBears);
    request.send();
    });
};

//Récupère tous les oursons
async function getAllBears (url) {
    let response = await fetch(url);
    let teddies = await response.json();
    console.log(teddies);

//Lien avec la page index HTML

let listeProduit = document.getElementById("teddy_list");

/*============================*/

teddies.forEach((teddy) => {
    let produitContenant = document.createElement("section");
    let produitIllustration = document.createElement("div");
    let produitDescription = document.createElement("div");
    let produitPhoto = document.createElement("img");
    let produitNom = document.createElement("h3");
    let produitPrix = document.createElement("p");
    let produitAction = document.createElement("a");

    /*Ajout des attributs au balise index HTML */
    produitContenant.setAttribute("class", "produit");
    produitIllustration.setAttribute("class", "produit_illustration");
    produitPhoto.setAttribute("src", teddy.imageUrl);
    produitPhoto.setAttribute("alt", "photo ours peluches");
    produitDescription.setAttribute("class", "produit_description");
    produitNom.setAttribute("class", "produit_name");
    produitPrix.setAttribute("class", "produit_price");
    produitAction.setAttribute("href", "produit.html?id=" + teddy._id);

    /* Agencement des éléments index HTML */
    listeProduit.appendChild(produitContenant);
    produitContenant.appendChild(produitIllustration);
    produitIllustration.appendChild(produitPhoto);
    produitContenant.appendChild(produitDescription);
    produitDescription.appendChild(produitNom);
    produitDescription.appendChild(produitPrix);
    produitDescription.appendChild(produitAction);

    /* Contenu des balises index HTML */
    produitNom.textContent = teddy.name;
    produitPrix.textContent = teddy.price / 100 + " euros";
    produitAction.textContent = "Ajoutez-moi !";
  });
}

let hover = document.getElementById('teddy_list');
let bearPrint = document.getElementById('select');

hover.addEventListener('mouseover', mouseOver);
hover.addEventListener('mouseout', mouseOut);

function mouseOver(){
  bearPrint.textContent = "Cliquez sur l'ourson pour l'ajouter à votre sélection"
}
function mouseOut(){
  bearPrint.textContent = ""
}