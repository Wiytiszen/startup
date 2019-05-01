
/**
 * exercise 4 Topic 01
 */

const btn = document.querySelector('button');// select button

btn.addEventListener("click",()=>{ // create an click event
  let input = document.querySelector('#search').value; 
  let ul = document.querySelector('#listResult');
  // if <ul> has another search inside, this will be deleted; 
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  if(input){ // check if it has a value
    doSearch(input);
  }
});


function doSearch( params='Javascript'){ // default parameter "Javascript"
  let url = "https://api.github.com/search/repositories?q="+params;
    fetch(url)
    .then((data)=>data.json())
    .then((json)=>{
      json.items.forEach((element) => {
        // create elements
        let ul = document.querySelector('#listResult');
        let li = document.createElement('li');
        let anchor = document.createElement('a');
        anchor.setAttribute("href",element.svn_url);
        let node = document.createTextNode(element.name);
        anchor.appendChild(node);
        li.appendChild(anchor);
        ul.appendChild(li);
      });
    })
    .catch((error)=> console.log("something went wrong"));
}
