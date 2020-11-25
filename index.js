var teddieChoose = document.querySelector('select');
var colorDisplay = document.querySelector('pre');

teddieChoose.onchange = function() {
    var teddie = teddieChoose.value;
    updateDisplay(teddie);
  };

  function updateDisplay(teddie) {
/*    teddie = teddie.replace(" ", "");
    teddie = teddie.toLowerCase();  */
    var url = http://localhost:3000/api/teddies;

    fetch(url).then(function(response) {
    response.text().then(function(text) {
      colorDisplay.textContent = text;
    });
  });



  