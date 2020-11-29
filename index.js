let url = "http://localhost:3000/api/teddies";

fetch(url).then(function (response) {
    response.json().then(function (teddy) {
        for(let teddy in teddies ) {teddy};
    });
});
/* request.onload = function() {
  var teddyChoose = request.response;
  populateHeader(teddyChoose);
  showHeroes(teddyChoose);
}  */
function afficher2(image){
    $('#div_display2').html('<img src="' + image + '" >'); // tu avais oublié le "_"
dans le nom de la div
    $('#div_display2').fadeIn(); // Inversion du html et du fadeIn
}

var teddyChoose = document.querySelector('select');

teddyChoose.onchange = function () {
    var teddy = teddyChoose.value;
    updateDisplay(teddy);
};

/*function updateDisplay(teddy) {
    teddy = teddy.replace("_", " ");  
    teddy = teddy.toLowerCase();
    
    
};*/