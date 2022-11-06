const gridSize = 16;
const trailColor = "blue";

generateGrid();

function generateGrid() {
    const grid = document.querySelector(".grid");
    for (let r = 0; r < gridSize; r++) {
        for (let c = 0; c < gridSize; c++) {
            const tile = document.createElement("div");
            tile.addEventListener("mouseenter", changeTileColor);
            grid.appendChild(tile);
        }
    }
}

function changeTileColor() {
    this.style.backgroundColor = trailColor;
    this.removeEventListener("mouseenter", changeTileColor);
}