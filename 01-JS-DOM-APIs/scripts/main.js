const button = document.querySelector("button");
button.addEventListener("click",getJoke);

function getJoke(){
  const paragraph = document.querySelector('.joke-section');
  fetch('http://api.icndb.com/jokes/random.')
    .then(data => data.json())
    .then(data =>{
      paragraph.innerHTML = `${data.value.joke}`;
    });
}