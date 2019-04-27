function showing(){
  document.querySelector(".hidden").className="show";
}
function showAlert(){
  alert("hey!, you just clicked a button");
}

const button = document.querySelector("button");
button.addEventListener("click",showAlert);
