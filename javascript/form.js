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

    // Création d'une fonction qui rend invisible le bouton une fois cliqué
    // Qui créera dans le même temps l'affichage du header formulaire
    let headerForm = document.getElementById("header_form");

    valButton.addEventListener("click", function () {
      valButton.style.visibility = "hidden";
      headerForm.style.visibility = "visible";
    });

    valButton.onclick = function displayForm(){

    // Création d'un formulaire qui sera rempli par l'utilisateur
    let displayForm = document.getElementById("display_form");
    let selFormDisplay = document.createElement("section");
    let selForm = document.createElement("form");
    let selFormNameText = document.createElement("p");
    let selFormLabelName = document.createElement("label");
        selFormLabelName.htmlFor = "name";
    let selFormName = document.createElement("input");
    let selFormLabelMail = document.createElement("label");
        selFormLabelMail.htmlFor = "mail";
    let selFormMail = document.createElement("input");
    let selFormLabelPhone = document.createElement("label");
        selFormLabelPhone.htmlFor = "phone";
    let selFormPhone = document.createElement("input");
    let selFormDisplayValid = document.createElement("section");
    let selFormValid = document.createElement("input");

    // Ajout des attributs pour la section formulaire
    selFormDisplay.setAttribute("class", "flex_form");
    selForm.setAttribute("id", "check_form");
    selFormNameText.setAttribute("class", "form_name");
    selFormName.setAttribute("id", "name");
    selFormName.setAttribute("type", "text");
    selFormName.setAttribute("name", "username");
    selFormName.setAttribute("required", true);
    selFormMail.setAttribute("id", "mail");
    selFormMail.setAttribute("type", "email");
    selFormMail.setAttribute("name", "usermail");
    selFormMail.setAttribute("required", true);
    selFormPhone.setAttribute("id", "phone");
    selFormPhone.setAttribute("type", "tel");
    selFormPhone.setAttribute("name", "phone");
    selFormPhone.setAttribute("pattern", "[0-5]{,5}[0-9]{2}[0-9]{2}[0-9]{2}");
    selFormPhone.setAttribute("required", true);
    selFormDisplayValid.setAttribute("class", "flex_valid_form");
    selFormValid.setAttribute("id", "submit-btn");
    selFormValid.setAttribute("type", "submit");

    // Le formulaire et ses dépendances
    displayForm.appendChild(selFormDisplay);
    selFormDisplay.appendChild(selForm);
    selForm.appendChild(selFormNameText);
    selForm.appendChild(selFormName);
    selForm.appendChild(selFormMail);
    selForm.appendChild(selFormPhone);
    displayForm.appendChild(selFormDisplayValid);
    selFormDisplayValid.appendChild(selFormValid);

    // Intégration du texte
    selFormNameText.textContent = "Votre nom :";
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