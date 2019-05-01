// Function that create and complete a table
// with a matrix as parameter
function createTable(mtr){
  const matrix = document.querySelector("#matrix");
  let table = document.createElement('table');
  mtr.forEach((element) => {
      row =document.createElement('tr');
      element.forEach((item) =>{
      let data = document.createElement('td');
      let node = document.createTextNode(item);
      console.log(node);
      data.appendChild(node);
      row.appendChild(data);
    });
    table.appendChild(row);

    matrix.appendChild(table);
  });
}
// create a matrix 3x3
const mtrx = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

createTable(mtrx);