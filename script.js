let createButton = document.querySelector("#createGrid");
createButton.addEventListener("click", ()=>createGrid());
let clearButton=document.querySelector("#clearGrid");
clearButton.addEventListener("click",clearGrid)




function createGrid(message = "enter number of squares(less than 100)") {
    
    let numberOfSquares = Number(prompt(message));

    while(isNaN(numberOfSquares)||numberOfSquares>100){
        numberOfSquares=Number(prompt(message));
    }

    let container = document.querySelector(".container");
    container.innerHTML="";

    for (let i = 1; i <= numberOfSquares; i++) {
        let row = document.createElement("div");
        row.classList.add(`row${i}`);
        row.setAttribute("style","width:100%")
        let height=100/numberOfSquares;
        row.setAttribute("style",`height:${height}%`);
        container.appendChild(row);
        for (let j = 1; j <= numberOfSquares; j++) {
            let column = document.createElement("div");
            column.classList.add(`row${i}`);
            column.classList.add(`column${j}`);
            column.classList.add("box");
            column.addEventListener("mouseenter",changeStyle);
            row.appendChild(column);
        }
    }
    container.style.border = "1px solid black";

}

function changeStyle(event){
    // event.target.setAttribute("style","background-color:red;");
    event.target.style.backgroundColor="red";
}



function clearGrid(){
    // document.querySelector(".box").setAttribute("style","background-color:bisque");
    boxes=document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.style.backgroundColor="bisque";
    });
    
}