const container = document.getElementById("container");
// create 256 div's in DOM (for 16 x 16 square grid)
function createGridCell(){
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 256; i++) {
        let cell = document.createElement("div")
        cell.className = "cell";
        fragment.append(cell);
    }
  container.append(fragment);
}
// create a function that creates 16 x 16 square grid in a container
function createGrid() {
    // container.style.width = "100%";
    container.style.gridTemplateColumns = "repeat(16, 1fr)";
    container.style.gridTemplateRows = "repeat(16, 1fr)";
}
createGridCell();
createGrid();