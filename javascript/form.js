function valCart (){

    let valCart = document.getElementById("val_cart");

    // Création d'un bouton de validation de panier
    let valButtonCont = document.createElement("div");
    let valButton = document.createElement("button");

    // Ajout de l'attribut et filiation du bouton valider panier
    valButtonCont.setAttribute("class", "val_button_cont");
    valButton.setAttribute("id", "val_button");
    valButton.setAttribute("onclick", "displayForm()");

    // Agencement des éléments et filiation du formulaire dans la page panier.html
    valCart.appendChild(valButtonCont);
    valButtonCont.appendChild(valButton);

    valButton.textContent = "Valider le panier";

    // Création d'une fonction qui rend invisible le bouton valider une fois cliqué
    // Qui créera dans le même temps l'affichage du bandeau header & formulaire
    let headerForm = document.getElementById("header_form");
    let formDisplay = document.getElementById("display_form");

    valButton.addEventListener("click", function () {
      valButton.style.visibility = "hidden";
      headerForm.style.visibility = "visible";
      formDisplay.style.visibility = "visible";
    });

    valButton.onclick = function displayForm(){


    // Création d'un formulaire qui sera rempli par l'utilisateur
    let displayForm = document.getElementById("display_form");
  
    let selForm = document.createElement("form");

    let selFieldFormName = document.createElement("fieldset");
    let selLegendName = document.createElement("legend");

    let selFormFirstNameLabel = document.createElement("label");
        selFormFirstNameLabel.htmlFor = "first_name";
    let selFormFirstNameInput = document.createElement("input");
    let selFormFirstNameText = document.createElement("p");
    let selFormLastNameLabel = document.createElement("label");
        selFormLastNameLabel.htmlFor = "last_name";
    let selFormLastNameInput = document.createElement("input");
    let selFormLastNameText = document.createElement("p");

    let selFieldFormAddress = document.createElement("fieldset");
    let selLegendAddress = document.createElement("legend");

    let selFormMailLabel = document.createElement("label");
        selFormMailLabel.htmlFor = "mail";
    let selFormMail = document.createElement("input");
    let selFormMailText = document.createElement("p");
    let selFormAddressLabel = document.createElement("label");
        selFormAddressLabel.htmlFor = "address";
    let selFormAddress = document.createElement("textarea");
    let selFormAddressText = document.createElement("p");
    let selFormCityLabel = document.createElement("label");
        selFormCityLabel.htmlFor = "city";
    let selFormCity = document.createElement("input");
    let selFormCityText = document.createElement("p");


    let selFieldFormValid = document.createElement("fieldset");
    let selFormValid = document.createElement("input");

    // Ajout des attributs pour la section formulaire

    selForm.setAttribute("id", "form_order");
    selForm.setAttribute("name", "formProducts");
    //selForm.setAttribute("onsubmit", "return check_name(name)");

    selFieldFormName.setAttribute("id", "fieldset_name");

    selFormFirstNameInput.setAttribute("id", "first_name");
    selFormFirstNameInput.setAttribute("type", "text");
    selFormFirstNameInput.setAttribute("name", "username");
    selFormFirstNameInput.setAttribute("placeholder", "Saisissez votre prénom");
    //selFormFirstNameInput.setAttribute("pattern", "/^[a-zA-Z]+[a-zA-Z \é\è\-]+[a-zA-Z]$/");
    //selFormFirstNameInput.setAttribute("required", "");
    //selFormFirstNameInput.setAttribute("min", "2");
    //selFormFirstNameInput.setAttribute("onkeyup", "check_name(name)");
    selFormFirstNameText.setAttribute("id", "alert_firstname_text");

    selFormLastNameInput.setAttribute("id", "last_name");
    selFormLastNameInput.setAttribute("type", "text");
    selFormLastNameInput.setAttribute("name", "username");
    selFormLastNameInput.setAttribute("placeholder", "Saisissez votre nom de famille");
    //selFormLastNameInput.setAttribute("pattern", "/^[a-zA-Z]+[a-zA-Z \é\è\-]+[a-zA-Z]$/");
    selFormLastNameInput.setAttribute("required", "");
    selFormLastNameInput.setAttribute("min", "2");
    selFormLastNameText.setAttribute("id", "alert_lastname_text");

    selFieldFormAddress.setAttribute("id", "fieldset_address");

    selFormMail.setAttribute("id", "mail");
    selFormMail.setAttribute("type", "email");
    selFormMail.setAttribute("name", "usermail");
    selFormMail.setAttribute("placeholder", "Saisissez votre adresse mail");
    selFormMail.setAttribute("required", "");
    //selFormMail.setAttribute("pattern", "^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$");
    selFormMailText.setAttribute("id", "alert_mail_text");

    selFormAddress.setAttribute("id", "address");
    selFormAddress.setAttribute("type", "text");
    selFormAddress.setAttribute("name", "address");
    selFormAddress.setAttribute("placeholder", "Saisissez votre adresse domicile");
    selFormAddress.setAttribute("required", "");
    //selFormAddress.setAttribute("pattern", "^([0-9a-z'àâéèêôùûçÀÂÉÈÔÙÛÇ\s-]{1,50})$");
    selFormAddressText.setAttribute("id", "alert_address_text");

    selFormCity.setAttribute("id", "city");
    selFormCity.setAttribute("type", "text");
    selFormCity.setAttribute("name", "city");
    selFormCity.setAttribute("placeholder", "Saisissez votre ville de résidence");
    selFormCity.setAttribute("required", "");
    //selFormCity.setAttribute("pattern", "^[[:alpha:]]([-' ]?[[:alpha:]])*$");
    selFormCityText.setAttribute("id", "alert_city_text");

    selFieldFormValid.setAttribute("id", "fieldset_valid");
    selFormValid.setAttribute("id", "submit-btn");
    selFormValid.setAttribute("type", "submit");

    // Le formulaire et ses dépendances
    displayForm.appendChild(selForm);
    selForm.appendChild(selFieldFormName);
    selFieldFormName.appendChild(selLegendName);
    selFieldFormName.appendChild(selFormFirstNameLabel);
    selFieldFormName.appendChild(selFormFirstNameInput);
    selFieldFormName.appendChild(selFormLastNameText);
    selFieldFormName.appendChild(selFormLastNameLabel);
    selFieldFormName.appendChild(selFormLastNameInput);
    selForm.appendChild(selFieldFormAddress);
    selFieldFormAddress.appendChild(selLegendAddress);
    selFieldFormAddress.appendChild(selFormAddressLabel);
    selFieldFormAddress.appendChild(selFormAddress);
    selFieldFormAddress.appendChild(selFormCityLabel);
    selFieldFormAddress.appendChild(selFormCity);
    selFieldFormAddress.appendChild(selFormMailLabel);
    selFieldFormAddress.appendChild(selFormMail);
    selForm.appendChild(selFieldFormValid);
    selFieldFormValid.appendChild(selFormValid);

    // Intégration du texte
    selLegendName.textContent = "Qui êtes-vous ?";
    selFormFirstNameLabel.textContent = "Prénom :";
    selFormLastNameLabel.textContent = "Nom :";
    selLegendAddress.textContent = "Vos coordonnées";
    selFormAddressLabel.textContent = "Adresse :";
    selFormCityLabel.textContent = "Ville :";
    selFormMailLabel.textContent = "Adresse email :";

    // Récupèration du formulaire et écoute de l'événement "submit" puis envoi de la commande par la fonction "sendOrder"
    selForm.addEventListener("submit", function(e){
      e.preventDefault();
      //console.log("test");
      check_name();
      sendOrder();
    })

  // Récupèration tous les input de la page, qui seront utilisés pour créer l'objet "contact"
  let formInput = document.getElementsByTagName("input");
  let formTxtArea = document.getElementsByTagName("textarea");

function sendOrder() {
  let contact = {
    firstName : formInput[0].value,
    lastName : formInput[1].value,
    address: formTxtArea[0].value,
    city : formInput[2].value,
    mail : formInput[3].value,
  }
  
  // Récupération des informations du panier dans le localstorage
  let cart = JSON.parse(window.localStorage.getItem("productsList"));

  // Création d'un tableau qui contiendra les produits (avec les id à commander)
  let products = [];
  cart.forEach(function(product){
      products.push(product._id);
  });

  let orderData = {contact, products};
  console.log(orderData);

    }
  }
}
let checkName = document.getElementById("first_name");

function check_name(){
  console.log("test");
  var regex = /^[a-zA-Z]+$/;///^[a-zA-Z]+[a-zA-Z \é\è\-]+[a-zA-Z]$/;
    if(regex.test(checkName) === false){
      alert("Wrong");
      checkName.focus();
      return false;
    }
    if(checkName === " "){
      alert("Name Field cannot be left empty");
      checkName.focus();
      return false;
    }
    return true;
}
// Récupération des données du tableau
let displayForm = JSON.parse(window.localStorage.getItem("productsList"));
  
// Condition qui affichera ou non le bouton de validation de panier
if(displayForm.length == 0){

  document.getElementById("display_form").style.display = "none";

} else {

  valCart();

}
