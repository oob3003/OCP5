
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
