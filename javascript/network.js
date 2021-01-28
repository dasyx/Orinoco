// URL de l'API
const url = "http://localhost:3000/api/teddies/";

function dataRequest(url){
    return new Promise((resolve) => {
      let request = new XMLHttpRequest();
      request.open('GET', url);
      request.send();
      request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status >= 200) {
          resolve(JSON.parse(this.responseText));
          console.log("fonction OK");
        }
      }
    })
  }