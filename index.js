var teddyChoose = document.querySelector('select');
var colorDisplay = document.querySelector('pre');

teddyChoose.onchange = function () {
    var teddy = teddyChoose.value;
    updateDisplay(teddy);
};

function updateDisplay(teddy) {
    /*  teddy = teddy.replace(" ", "_");  */
    teddy = teddy.toLowerCase();
    var url = http //localhost:3000/api/teddies;

    fetch(url).then(function (response) {
        response.text().then(function (text) {
            colorDisplay.textContent = text;
        });
    });
};