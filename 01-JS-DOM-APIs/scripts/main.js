function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    return xhr;
  
  } 
function MakeCORSRequest(params ="javascript"){
  let url = `https://api.github.com/search/repositories?q=${params}`;
  const xhr = createCORSRequest('GET',url);
  if (!xhr) {
    throw new Error('CORS not supported');
  }
  xhr.onload = function() {
    var responseText = xhr.responseText;
    console.log(responseText);
    // process the response.
   };
   
   xhr.onerror = function() {
     console.log('There was an error!');
   };
   xhr.send();
}
MakeCORSRequest();