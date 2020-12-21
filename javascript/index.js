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
          console.log("fonction OK");
        } else {
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

    // Une instruction pour vérifier quelle image pour quel article 
    if(teddy.name === "Norbert"){
      prodPhoto.setAttribute("src", "./images/teddy_1.webp");
    } else if(teddy.name === "Arnold"){
      prodPhoto.setAttribute("src", "./images/teddy_2.webp");
    } else if(teddy.name === "Lenny and Carl"){
      prodPhoto.setAttribute("src", "./images/teddy_3.webp");
    } else if(teddy.name === "Gustav"){
      prodPhoto.setAttribute("src", "./images/teddy_4.webp");
    } else if(teddy.name === "Garfunkel"){
      prodPhoto.setAttribute("src", "./images/teddy_5.webp");
    }
  });
}
// Ecoute d'événement au passage de la souris sur le titre h1
let hover = document.getElementById('hover');
let bearPrint = document.getElementById('select');

hover.addEventListener('mouseover', mouseOver);
hover.addEventListener('mouseout', mouseOut);

function mouseOver(){
  bearPrint.textContent = "Cliquez sur l'ourson pour l'ajouter à votre sélection"
}
function mouseOut(){
  bearPrint.textContent = ""
}

//Lien avec la page presentation.html

let listeProduit = document.getElementById("teddy_choice");

/*==================================*/
