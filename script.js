const trailColor = "black";

const grid = document.querySelector(".grid");

generateGrid(16);

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", newGrid);

function generateGrid(gridSize) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    for (let r = 0; r < gridSize; r++) {
        for (let c = 0; c < gridSize; c++) {
            const tile = document.createElement("div");
            tile.addEventListener("mouseenter", colorTile);
            grid.appendChild(tile);
        }
    }
}

function colorTile() {
    this.style.backgroundColor = trailColor;
    this.removeEventListener("mouseenter", colorTile);
}

function newGrid() {
    grid.replaceChildren();
    let p = prompt("Enter new grid size");
    if (+p) {
        if (+p > 100) p = 100;
        generateGrid(+p);
    }
}