let createButton = document.querySelector("#createGrid");
createButton.addEventListener("click", () => createGrid());
let clearButton = document.querySelector("#clearGrid");
clearButton.addEventListener("click", clearGrid);





function createGrid(message = "enter number of squares(less than 100)") {

    let numberOfSquares = Number(prompt(message));

    while (isNaN(numberOfSquares) || numberOfSquares > 100) {
        numberOfSquares = Number(prompt(message));
    }

    let container = document.querySelector(".container");
    container.innerHTML = "";

    for (let i = 1; i <= numberOfSquares; i++) {
        let row = document.createElement("div");
        row.classList.add(`row${i}`);
        row.setAttribute("style", "width:100%")
        let height = 100 / numberOfSquares;
        row.setAttribute("style", `height:${height}%`);
        container.appendChild(row);
        for (let j = 1; j <= numberOfSquares; j++) {
            let column = document.createElement("div");
            column.classList.add(`row${i}`);
            column.classList.add(`column${j}`);
            column.classList.add("box");
            column.setAttribute("id", "10");
            column.addEventListener("mouseenter", changeStyle);
            row.appendChild(column);
        }
    }
    container.style.border = "1px solid black";

}



function changeStyle(event) {

    opacity = Number(event.target.id) / 100;
    event.target.style.background = generateRandomColor() + `,${opacity})`;

    if (opacity < 1) {
        opacity = (opacity * 100) + 10;
        event.target.id = String(opacity);
    }
}



function clearGrid() {
    boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.style.backgroundColor = "white";
        box.style.border = "1px solid black";
        box.style.opacity = "1";
    });

}

function random() {
    return (Math.floor(Math.random() * 256));
}

function generateRandomColor() {
    return `rgba(${random()},${random()},${random()}`;
}