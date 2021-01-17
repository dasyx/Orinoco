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
    let selFormLastNameLabel = document.createElement("label");
        selFormLastNameLabel.htmlFor = "last_name";
    let selFormLastNameInput = document.createElement("input");
    let selFormLastNameText = document.createElement("p");

    let selFieldFormAdress = document.createElement("fieldset");
    let selLegendAdress = document.createElement("legend");

    let selFormMailLabel = document.createElement("label");
        selFormMailLabel.htmlFor = "mail";
    let selFormMail = document.createElement("input");
    let selFormAdressLabel = document.createElement("label");
        selFormAdressLabel.htmlFor = "adress";
    let selFormAdress = document.createElement("textarea");
    let selFormCityLabel = document.createElement("label");
        selFormCityLabel.htmlFor = "city";
    let selFormCity = document.createElement("input");


    let selFieldFormValid = document.createElement("fieldset");
    let selFormValid = document.createElement("input");

    // Ajout des attributs pour la section formulaire

    selForm.setAttribute("id", "check_form");

    selFieldFormName.setAttribute("id", "fieldset_name");

    selFormFirstNameInput.setAttribute("id", "name");
    selFormFirstNameInput.setAttribute("type", "text");
    selFormFirstNameInput.setAttribute("name", "username");
    selFormFirstNameInput.setAttribute("placeholder", "Saisissez votre prénom");
    selFormFirstNameInput.setAttribute("required", "");
    selFormLastNameText.setAttribute("id", "alert_name_text");

    selFormLastNameInput.setAttribute("id", "name");
    selFormLastNameInput.setAttribute("type", "text");
    selFormLastNameInput.setAttribute("name", "username");
    selFormLastNameInput.setAttribute("placeholder", "Saisissez votre nom de famille");
    selFormLastNameInput.setAttribute("required", "");

    selFieldFormAdress.setAttribute("id", "fieldset_adress");

    selFormMail.setAttribute("id", "mail");
    selFormMail.setAttribute("type", "email");
    selFormMail.setAttribute("name", "usermail");
    selFormMail.setAttribute("placeholder", "Saisissez votre adresse mail");
    selFormMail.setAttribute("required", "");

    selFormAdress.setAttribute("id", "adress");
    selFormAdress.setAttribute("type", "textarea");
    selFormAdress.setAttribute("name", "adress");
    selFormAdress.setAttribute("placeholder", "Saisissez votre adresse domicile");
    selFormAdress.setAttribute("required", "");

    selFormCity.setAttribute("id", "city");
    selFormCity.setAttribute("type", "text");
    selFormCity.setAttribute("name", "city");
    selFormCity.setAttribute("placeholder", "Saisissez votre ville de résidence");
    selFormCity.setAttribute("required", "");

    selFieldFormValid.setAttribute("id", "fieldset_valid");
    selFormValid.setAttribute("id", "submit-btn");
    selFormValid.setAttribute("type", "submit");
    //selFormValid.setAttribute("onclick", "formValid()");


    // Le formulaire et ses dépendances
    displayForm.appendChild(selForm);
    selForm.appendChild(selFieldFormName);
    selFieldFormName.appendChild(selLegendName);
    selFieldFormName.appendChild(selFormFirstNameLabel);
    selFieldFormName.appendChild(selFormFirstNameInput);
    selFieldFormName.appendChild(selFormLastNameText);
    selFieldFormName.appendChild(selFormLastNameLabel);
    selFieldFormName.appendChild(selFormLastNameInput);
    selForm.appendChild(selFieldFormAdress);
    selFieldFormAdress.appendChild(selLegendAdress);
    selFieldFormAdress.appendChild(selFormAdressLabel);
    selFieldFormAdress.appendChild(selFormAdress);
    selFieldFormAdress.appendChild(selFormCityLabel);
    selFieldFormAdress.appendChild(selFormCity);
    selFieldFormAdress.appendChild(selFormMailLabel);
    selFieldFormAdress.appendChild(selFormMail);
    selForm.appendChild(selFieldFormValid);
    selFieldFormValid.appendChild(selFormValid);

    // Intégration du texte
    selLegendName.textContent = "Qui êtes-vous ?";
    selFormFirstNameLabel.textContent = "Prénom :";
    selFormLastNameLabel.textContent = "Nom :";
    selLegendAdress.textContent = "Vos coordonnées";
    selFormAdressLabel.textContent = "Adresse :";
    selFormCityLabel.textContent = "Ville :";
    selFormMailLabel.textContent = "Adresse email :";

  }
}
// Récupération des données du tableau
let displayForm = JSON.parse(window.localStorage.getItem("productsList"));
  
// Condition qui affichera ou non le bouton de validation de panier
if(displayForm.length == 0){

  document.getElementById("display_form").style.display = "none";

} else {

  valCart();

}