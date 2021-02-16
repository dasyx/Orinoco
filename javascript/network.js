// URL de l'API
const url = "http://localhost:3000/api/teddies/";

function dataRequest(url){
    return new Promise((resolve) => {
      let request = new XMLHttpRequest();
      request.open('GET', url);
      //console.log(request);
      request.send();
      request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
          resolve(JSON.parse(this.responseText));
          //On résoud la promesse en envoyant la réponse sous la forme de nos objets
          //console.log("fonction OK");
        }
      }
    })
  }