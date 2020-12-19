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
    console.log(getAllBears);

//Lien avec la page index HTML

let listeProduit = document.getElementById("teddy_list");

/*============================*/

teddies.forEach((teddy) => {
    let produitContenant = document.createElement("section");
    let produitIllustration = document.createElement("div");
    let produitElement = document.createElement("div");
    let produitPhoto = document.createElement("img");
    let produitNom = document.createElement("h3");
    let produitPrix = document.createElement("p");
    let produitAction = document.createElement("a");

    /*Ajout des attributs au balise index HTML */
    produitContenant.setAttribute("class", "produit_contenant");
    produitIllustration.setAttribute("class", "produit_illustration");
    produitPhoto.setAttribute("src", teddy.imageUrl);
    produitPhoto.setAttribute("alt", "Photo de l'ours en peluche");
    produitElement.setAttribute("class", "produit_element");
    produitNom.setAttribute("class", "produit_nom");
    produitPrix.setAttribute("class", "produit_prix");
    produitAction.setAttribute("href", "produit.html?id=" + teddy._id);

    /* Agencement des éléments index HTML */
    listeProduit.appendChild(produitContenant);
    produitContenant.appendChild(produitIllustration);
    produitIllustration.appendChild(produitPhoto);
    produitContenant.appendChild(produitElement);
    produitElement.appendChild(produitNom);
    produitElement.appendChild(produitPrix);
    produitElement.appendChild(produitAction);

    /* Contenu des balises index HTML */
    produitNom.textContent = teddy.name;
    produitPrix.textContent = teddy.price / 100 + " euros";
    produitAction.textContent = "En savoir plus";
  });
}

let idTeddyBears = "";
async function detailTeddies() {
  idTeddyBears = location.search.substring(4);
  const detailTeddies = await getAllTeddies()
}