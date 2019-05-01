// create an object
const config = {
  url: "http://api.icndb.com/jokes/random",
  method: "GET"
}
// select button
const button = document.querySelector("button");
  button.addEventListener("click",()=>
  getInfo(config)
  .then(data => JSON.parse(data))
  .then((json)=> {
    const paragraph = document.querySelector('.joke-section');
      paragraph.innerHTML = json.value.joke;
    })
  .catch((error)=> {
    const section = document.querySelector('.mainSection');
    section.style.backgroundColor="red";
    const paragraph = document.querySelector('.joke-section');
    paragraph.innerHTML = "Ups , something went wrong";
  }
));
// reusable function
// it takes an object as parameter
// returns a promise
function getInfo(obj){
    return new Promise((response,reject)=>{
      var xhttp = new XMLHttpRequest();
      xhttp.open(obj.method,obj.url,true);
      xhttp.send();
      xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
          response(this.response);
        }else if(this.status == 404){
          reject("Error");
        }
    };
  });
}


