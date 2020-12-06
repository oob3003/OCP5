let url ="http://localhost:3000/api/teddies";

fetch(url)
  .then(function(response) {
    response.json()
    .then(function(data){
      data.forEach(element => {
        console.log(element);
      })
    })
  })


    
/*function requete(images) {
  var portfolio = document.getElementById("portfolio")

  url.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      portfolio.innerHTML = this.response;
    } else if (this.readyState == 4 && this.status == 404) {
      alert('Erreur 404 :/');
    }
  }
};*/























/*var xhr = "XMLHttpRequest";

xhr.onreadystatechange = function() {
    console.log(this);
}; 
xhr.open("GET", "http://localhost:3000/api/teddies", true);
xhr.send(); */




/*   Test si la requête aboutie 
(function() {
    var httpRequest;
    document.getElementById("validationDuChoix").addEventListener('click', makeRequest);
  
    function makeRequest() {
      httpRequest = new XMLHttpRequest();
  
      if (!httpRequest) {
        alert('Abandon :( Impossible de créer une instance de XMLHTTP');
        return false;
      }
      httpRequest.onreadystatechange = alertContents;
      httpRequest.open('GET', 'http://localhost:3000/api/teddies');
      httpRequest.send();
    }
  
    function alertContents() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          alert(httpRequest.responseText);
        } else {
          alert('Il y a eu un problème avec la requête.');
        }
      }
    }
  })();
*/

/*fetch(url).then(function (response) {
    response.json().then(function (teddy) {
        for(let teddy in teddies ) {teddy};
    });
}); */

/* request.onload = function() {
  var teddyChoose = request.response;
  populateHeader(teddyChoose);
  showHeroes(teddyChoose);
}  */

/*function afficher2(image){
    $('#div_display2').html('<img src="' + image + '" >'); // tu avais oublié le "_"
dans le nom de la div
    $('#div_display2').fadeIn(); // Inversion du html et du fadeIn
}*/

/*var teddyChoose = document.querySelector('select');
teddyChoose.onchange = function () {
    var teddy = teddyChoose.value;
    updateDisplay(teddy);
};*/

