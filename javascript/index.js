//URL de l'API
getAllBears("http://localhost:3000/api/teddies")


function getAllBears(url){
    return new Promise((resolve) => {
      let request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status >= 200) {
          resolve(JSON.parse(this.responseText));
          console.log("fonction OK");
    }
};
    request.open('GET', "http://localhost:3000/api/teddies");
    request.send();
    });
};

//Récupère tous les oursons
async function getAllBears (url) {
    let response = await fetch(url);
    let teddies = await response.json();
    console.log(teddies);

//Lien avec la page index.html

let listeProduit = document.getElementById("teddy_list");

/*============================*/

teddies.forEach((teddy) => {
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
    prodLink.textContent = "Ajoutez-moi !";
  });
}