dataRequest(url)
  .then (teddies => {
    console.log(teddies);
    teddies.forEach((teddy) => {
      displayProduct(teddy);
      
    });
  })
  .catch (error => {console.log(error);});