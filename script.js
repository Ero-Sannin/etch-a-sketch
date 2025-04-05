function createGrid(numberOfSquares) {
    let container = document.querySelector(".container");

    for (let i = 1; i <= numberOfSquares; i++) {
        let row = document.createElement("div");
        row.classList.add(`column${i}`);
        for (let j = 1; j <= numberOfSquares; j++) {
            let temp = document.createElement("div");
            temp.classList.add(`box${j}`);
            row.appendChild(temp);
        }
        container.appendChild(row);
    }

}

createGrid(16);