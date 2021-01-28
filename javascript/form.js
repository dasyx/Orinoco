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

    // Intégration des icones font awesome
    let falseLogoFname = document.createElement("i");
    let falseLogoLname = document.createElement("i");
    let falseLogoAddress = document.createElement("i");
    let falseLogoCity = document.createElement("i");
    let falseLogoMail = document.createElement("i");

    // Intégration des différents champs input
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

    let selFormOblig = document.createElement("p");

    // Création du bouton de validation du formulaire
    let selFieldFormValid = document.createElement("fieldset");
    let selFormValid = document.createElement("input");

    // Ajout des attributs pour la section formulaire
    selForm.setAttribute("id", "form_order");
    selForm.setAttribute("name", "formProducts");
    
    selFieldFormName.setAttribute("id", "fieldset_name");

    // Ajout des attributs pour les fonts
    falseLogoFname.setAttribute("class", "fas fa-times-circle");
    falseLogoFname.setAttribute("id", "wrong_input_fname");
    falseLogoLname.setAttribute("class", "fas fa-times-circle");
    falseLogoLname.setAttribute("id", "wrong_input_lname");
    falseLogoAddress.setAttribute("class", "fas fa-times-circle");
    falseLogoAddress.setAttribute("id", "wrong_input_address");
    falseLogoCity.setAttribute("class", "fas fa-times-circle");
    falseLogoCity.setAttribute("id", "wrong_input_city");
    falseLogoMail.setAttribute("class", "fas fa-times-circle");
    falseLogoMail.setAttribute("id", "wrong_input_mail");

    // Ajout des attributs pour les inputs du formulaire
    selFormFirstNameInput.setAttribute("id", "first_name");
    selFormFirstNameInput.setAttribute("type", "text");
    selFormFirstNameInput.setAttribute("name", "username");
    selFormFirstNameInput.setAttribute("placeholder", "Saisissez votre prénom");
    selFormFirstNameInput.setAttribute("required", "");
    selFormFirstNameText.setAttribute("id", "alert_firstname_text");

    selFormLastNameInput.setAttribute("id", "last_name");
    selFormLastNameInput.setAttribute("type", "text");
    selFormLastNameInput.setAttribute("name", "username");
    selFormLastNameInput.setAttribute("placeholder", "Saisissez votre nom de famille");
    selFormLastNameInput.setAttribute("required", "");
    selFormLastNameText.setAttribute("id", "alert_lastname_text");

    selFieldFormAddress.setAttribute("id", "fieldset_address");

    selFormMail.setAttribute("id", "mail");
    selFormMail.setAttribute("type", "email");
    selFormMail.setAttribute("name", "usermail");
    selFormMail.setAttribute("placeholder", "Saisissez votre adresse mail");
    selFormMail.setAttribute("required", "");
    selFormMailText.setAttribute("id", "alert_mail_text");

    selFormAddress.setAttribute("id", "address");
    selFormAddress.setAttribute("type", "text");
    selFormAddress.setAttribute("name", "address");
    selFormAddress.setAttribute("placeholder", "Saisissez votre adresse domicile");
    selFormAddress.setAttribute("required", "");
    selFormAddressText.setAttribute("id", "alert_address_text");

    selFormCity.setAttribute("id", "city");
    selFormCity.setAttribute("type", "text");
    selFormCity.setAttribute("name", "city");
    selFormCity.setAttribute("placeholder", "Saisissez votre ville de résidence");
    selFormCity.setAttribute("required", "");
    selFormCityText.setAttribute("id", "alert_city_text");

    selFormOblig.setAttribute("class", "input_oblig");

    selFieldFormValid.setAttribute("id", "fieldset_valid");
    selFormValid.setAttribute("id", "submit-btn");
    selFormValid.setAttribute("type", "submit");

    // Le formulaire et ses dépendances/filiations
    displayForm.appendChild(selForm);
    selForm.appendChild(selFieldFormName);
    selFieldFormName.appendChild(selLegendName);
    selFieldFormName.appendChild(selFormFirstNameLabel);
    selFieldFormName.appendChild(selFormFirstNameInput);
    selFieldFormName.appendChild(falseLogoFname);
    falseLogoFname.appendChild(selFormFirstNameText);
    selFieldFormName.appendChild(selFormLastNameLabel);
    selFieldFormName.appendChild(selFormLastNameInput);
    selFieldFormName.appendChild(falseLogoLname);
    falseLogoLname.appendChild(selFormLastNameText);
    selForm.appendChild(selFieldFormAddress);
    selFieldFormAddress.appendChild(selLegendAddress);
    selFieldFormAddress.appendChild(selFormAddressLabel);
    selFieldFormAddress.appendChild(selFormAddress);
    selFieldFormAddress.appendChild(falseLogoAddress);
    falseLogoAddress.appendChild(selFormAddressText);
    selFieldFormAddress.appendChild(selFormCityLabel);
    selFieldFormAddress.appendChild(selFormCity);
    selFieldFormAddress.appendChild(falseLogoCity);
    falseLogoCity.appendChild(selFormCityText);
    selFieldFormAddress.appendChild(selFormMailLabel);
    selFieldFormAddress.appendChild(selFormMail);
    selFieldFormAddress.appendChild(falseLogoMail);
    falseLogoMail.appendChild(selFormMailText);
    selFieldFormAddress.appendChild(selFormOblig);
    selForm.appendChild(selFieldFormValid);
    selFieldFormValid.appendChild(selFormValid);

    // Intégration du texte
    selLegendName.textContent = "Qui êtes-vous ?";
    selFormFirstNameLabel.textContent = "Prénom (*):";
    selFormLastNameLabel.textContent = "Nom (*):";
    selLegendAddress.textContent = "Vos coordonnées";
    selFormAddressLabel.textContent = "Adresse (*):";
    selFormCityLabel.textContent = "Ville (*):";
    selFormMailLabel.textContent = "Adresse email (*):";
    selFormOblig.textContent = "(*) Champ obligatoire";

    // Fonction qui vérifie la validité du champ de saisie "first name"
    selFormFirstNameInput.oninput = function firstNameInput(){

      var firstName = document.getElementById("first_name").value;

      var nameRGEX = /^[a-zA-Z]+[a-zA-Z \é\è\-]+[a-zA-Z]$/;
      var firstNameResult = nameRGEX.test(firstName);
      

      if(firstNameResult == false){
        document.getElementById("first_name").className = "error";
        document.getElementById("wrong_input_fname").style.visibility = "visible";
        document.getElementById("alert_firstname_text").textContent = "Champ non valide/à remplir";
        return false;
      }
      if(firstNameResult == true){
        document.getElementById("first_name").className = "valid";
        document.getElementById("wrong_input_fname").style.visibility = "hidden";
        document.getElementById("alert_firstname_text").textContent = "";
        return true;
      }
    }

    // Fonction qui vérifie la validité du champ de saisie "last name"
    selFormLastNameInput.oninput = function lastNameInput() {

      var lastName = document.getElementById("last_name").value;

      var nameRGEX = /^[a-zA-Z]+[a-zA-Z \é\è\-]+[a-zA-Z]$/;
      var lastNameResult = nameRGEX.test(lastName);

      if(lastNameResult == false){
        document.getElementById("last_name").className = "error";
        document.getElementById("wrong_input_lname").style.visibility = "visible";
        document.getElementById("alert_lastname_text").textContent = "Champ non valide/à remplir";
        return false;
      }
      if(lastNameResult == true){
        document.getElementById("last_name").className = "valid";
        document.getElementById("wrong_input_lname").style.visibility = "hidden";
        document.getElementById("alert_lastname_text").textContent = "";
        return true;
      }
    }

    // Fonction qui vérifie la validité du champ de saisie "address"
    selFormAddress.oninput = function addressInput() {

      var addressInput = document.getElementById("address").value;

      var addressRGEX = /^([0-9,a-zA-Z 'àâéèêôùûçÀÂÉÈÔÙÛÇ\s-]{1,50})$/;
      var addressResult = addressRGEX.test(addressInput);

      if(addressResult == false){
        document.getElementById("address").className = "error";
        document.getElementById("wrong_input_address").style.visibility = "visible";
        document.getElementById("alert_address_text").textContent = "Champ non valide/à remplir";
        return false;
      }
      if(addressResult == true){
        document.getElementById("address").className = "valid";
        document.getElementById("wrong_input_address").style.visibility = "hidden";
        document.getElementById("alert_address_text").textContent = "";
        return true;
      }
    }

    // Fonction qui vérifie la validité du champ de saisie "city"
    selFormCity.oninput = function cityInput() {

      var cityInput = document.getElementById("city").value;

      var cityRGEX = /^[A-Za-zÀ-ÿ\.'*`´’,\- "]{1,34}$/;
      var cityResult = cityRGEX.test(cityInput);

      if(cityResult == false){
        document.getElementById("city").className = "error";
        document.getElementById("wrong_input_city").style.visibility = "visible";
        document.getElementById("alert_city_text").textContent = "Champ non valide/à remplir";
        return false;
      }
      if(cityResult == true){
        document.getElementById("city").className = "valid";
        document.getElementById("wrong_input_city").style.visibility = "hidden";
        document.getElementById("alert_city_text").textContent = "";
        return true;
      }
    }

    // Fonction qui vérifie la validité du champ de saisie "email"
    selFormMail.oninput = function mailInput() {

      var mailInput = document.getElementById("mail").value;

      var mailRGEX = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
      var mailResult = mailRGEX.test(mailInput);

      if(mailResult == false){
        document.getElementById("mail").className = "error";
        document.getElementById("wrong_input_mail").style.visibility = "visible";
        document.getElementById("alert_mail_text").textContent = "Champ non valide/à remplir";
        return false;
      }
      if(mailResult == true){
        document.getElementById("mail").className = "valid";
        document.getElementById("wrong_input_mail").style.visibility = "hidden";
        document.getElementById("alert_mail_text").textContent = "";
        return true;
      }
    }
  // Récupèration tous les inputs de la page, qui seront utilisés pour créer l'objet "contact"
  let formInput = document.getElementsByTagName("input");
  let formTxtArea = document.getElementsByTagName("textarea");

    // Récupèration du formulaire et écoute de l'événement "submit" puis envoi de la commande par la fonction "sendOrder"
    selForm.addEventListener("submit", (e) => {
        e.preventDefault();
        //console.log("test");
        sendOrder();
      })

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

      //const sendURL = "http://localhost:3000/api/teddies/order";

      /*let fetchData = {
          method: "POST",
          headers: {
            "Accept" : "application/json",
            "Content-Type": "application/json; charset=UTF-8"},
          body: JSON.stringify(orderData)
      }*/
      
      fetch("http://localhost:3000/api/teddies/order", {
      method: "POST",
      body: JSON.stringify(orderData),
      headers: {"Content-Type": "application/json"}
      })
        .then(response => response.json())
          //console.log(response);
          /*let orderId = res.orderId;
          localStorage.clear(); // Commande pour vider le panier pour les futures commandes
          localStorage.setItem("orderId", orderId); // Stockage de l'Id de la commande
          //localStorage.setItem("totalPrice", totalPrice); // Prix total de la commande
          //window.open("confirmation.html"); // Redirection vers la page de confirmation*/
        .catch(err => console.log(err));
    }
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
