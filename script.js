const gridSize = 16;

generateGrid();

function generateGrid() {
    const grid = document.querySelector(".grid");
    for (let r = 0; r < gridSize; r++) {
        for (let c = 0; c < gridSize; c++) {
            const tile = document.createElement("div");
            grid.appendChild(tile);
        }
    }
}