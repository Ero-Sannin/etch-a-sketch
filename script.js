// function createGrid(numberOfSquares) {
//     let container = document.querySelector(".container");

//     for (let i = 1; i <= numberOfSquares; i++) {
//         let row = document.createElement("div");
//         row.classList.add(`column${i}`);
//         for (let j = 1; j <= numberOfSquares; j++) {
//             let temp = document.createElement("div");
//             temp.classList.add(`box${j}`);
//             row.appendChild(temp);
//         }
//         container.appendChild(row);
//     }

// }

// createGrid(16);
let button = document.querySelector("button");
button.addEventListener("click", ()=>createGrid());



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
            row.appendChild(column);
        }
    }
    container.style.border = "1px solid black";

}