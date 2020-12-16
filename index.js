let url ="http://localhost:3000/api/teddies";

fetch(url)
  .then(function(response) {
    response.json()
    .then(function(data){
      parseTeddies(data)
    })
  })
.then(response => {})
.catch(error => alert("Erreur : " + error));

function parseTeddies(teddies) {
  let teddyDisplayerElement = document.getElementById('teddyDisplayer')
  let htmlToCreate = ''

  for(let index = 0; index < teddies.length; index++) {
    let teddy = teddies[index]
    htmlToCreate += '<div>'
    htmlToCreate += teddy.name + ' '
    htmlToCreate += teddy.description + ' '
    htmlToCreate += '</div>'
  }

  teddyDisplayerElement.innerHTML = htmlToCreate
}  

/*  
let index = 0;
const teddy1 = 0 ;
const teddiesList = [0,1,2,3,4,];
  
for (let i = 0; i < teddiesList.length; i++) {
    if (teddy1 === teddiesList[i]) {
        index = i;
    }
}
*/
/* créer une requête pour que la div .photo-teddy1 permette l'affichage de la photo du 1er ourson */
/*
document.querySelector('#btnAfficher').addEventListener('click', function() {
	document.querySelector('.photo-teddy1').innerHTML='emplacement photo';
})
*/


/*
document.querySelector('#btnAfficher').addEventListener('click', function() {
	document.querySelector('#infosTeddies').innerHTML='toujours pas ça!';
})
*/

/*
for(var i=1;i<7;i++) {
	document.querySelector('#couleur'+i).addEventListener('click', function() {
		document.querySelector('#page').style.backgroundColor=this.style.backgroundColor;
	})
}
/*
function TeddiesList (element) {
  let name = document.createPortfolio("article");
  name.innerHTML = element.name;
};


let teddy = {
  colors : [''],
  description : '',
  imageUrl : '',
  name : '',
  price :  
};

let teddyColors = teddy.colors;
let teddyDescription = teddy.description;


document.querySelector('#portfolio').innerText = 
name : ${teddy.name}
price : ${teddy.price} €


/* let elt = document.getElementByClassName('portfolio__photos');
const articles = document.getElementsByTagName('article');
const thirdArticle = articles[0];
elt.innerHTML = "<ul><li><article>Norbert</article></li></ul>";
*/  
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

