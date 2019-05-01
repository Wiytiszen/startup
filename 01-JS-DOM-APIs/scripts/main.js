function doSearch(params ="javascript"){
  let url = "https://api.github.com/search/repositories?q="+params;
    fetch(url)
    .then((data)=>data.json())
    .then((json)=>{
      json.items.forEach((element) => {
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

doSearch();