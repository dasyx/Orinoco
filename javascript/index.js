getAllBears(url)
  .then (teddies => {
   
    teddies.forEach((teddy) => {
      displayProduct(teddy);
    });
  })
  .catch (error => {console.log(error);});