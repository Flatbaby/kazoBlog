/*var a1 = "lorem10";

var data = [
    [a1, "B", "C"],
    ["D", "E", "F"],
    ["G"]
  ];
  
var grid = document.getElementById("grid");
grid.style.cssText = `grid-template-columns:repeat(${data[0].length}, minmax(0, 1fr))`;
for (let i of data[0]) {
    let cell = document.createElement("div");
    cell.innerHTML = i;
    cell.className = "head";
    grid.appendChild(cell);
    cell.setAttribute('class','grid-item')
  }
   
  // (C4) FOLLOWING ROWS - CELLS
  for (let i=1; i<data.length; i++) {
    for (let j of data[i]) {
      let cell = document.createElement("div");
      cell.innerHTML = j;
      cell.className = "cell";
      grid.appendChild(cell);
      cell.setAttribute('class','grid-item')
    }

  } */