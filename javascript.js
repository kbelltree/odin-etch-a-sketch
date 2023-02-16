const container = document.getElementById("container");
const resetButton = document.getElementById("reset");
const bnwButton = document.getElementById("bnw");
 
// Part 1. create 256 div's in DOM (for 16 x 16 square grid)
// Part 2. create the number of div's per the prompt entry 
function createGridCell(divCountToSquare){
    const fragment = document.createDocumentFragment();
    // for (let i = 0; i < 256; i++) {
    let doubled = divCountToSquare ** 2; 
    for (let i = 0; i < doubled; i++){
        let cell = document.createElement("div")
        cell.className = "cell";
        fragment.append(cell);
    }
  container.append(fragment);
}
// Part 1. Function that creates 16 x 16 square grid in a container
// Part 2. Function that creates grid per the prompt entry 
function createGrid(cellCountPerSide) {
    // container.style.gridTemplateColumns = "repeat(16, 1fr)";
    // container.style.gridTemplateRows = "repeat(16, 1fr)";
    container.style.gridTemplateColumns = `repeat(${cellCountPerSide}, 1fr)`
    container.style.gridTemplateRows = `repeat(${cellCountPerSide}, 1fr)`
}
// createGridCell();
// createGrid();

// Function that colors the cell on hover
function addColor() {
    // DOM style.backgroundColor 
    this.style.cursor = "pointer";
    this.style.backgroundColor = "black";
}  

// Function that prompt the user to enter an integer between 1 and 100
function getUserInput() {
    let enteredValue = prompt("Enter an integer between 1 and 100", 1);
    if (enteredValue === null || enteredValue === "") {
        console.log(enteredValue + " falsy"); 
        return; 
    } else if (!Number.isInteger(+enteredValue)|| isNaN(+enteredValue) || +enteredValue < 1 || +enteredValue > 100){
        console.log(enteredValue + " also falsy");
        alert("The number has to be an integer between 1 and 100.");
        getUserInput();
        return; 
    } else if (+enteredValue >= 1 && +enteredValue <= 100){
        console.log(enteredValue + " truthy");
        return +enteredValue; 
    } else {
        return; 
    }
}

// getUserInput();

// Function that creates div's and grid cells per the user's entry
function setUpGrid(){
    refreshCanvas();
    let userEntry = getUserInput(); 
    createGridCell(userEntry);
    createGrid(userEntry);
    const gridItems = document.querySelectorAll(".cell"); 
    gridItems.forEach(function(item){
        item.addEventListener("mouseenter", addColor);
    })
}

// Function that removes the previous div elements in container
function refreshCanvas(){
    while (container.firstChild) 
        container.removeChild(container.firstChild);
}

// Event listener attached to reset button 
resetButton.addEventListener("click", setUpGrid);

