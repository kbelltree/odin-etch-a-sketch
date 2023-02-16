const container = document.getElementById("container");
const resetButton = document.getElementById("reset");
const bnwButton = document.getElementById("bnw");
 
// Function that creates the number of div's per the user's entry 
function createGridCell(divCountToSquare){
    const fragment = document.createDocumentFragment();
    let doubled = divCountToSquare ** 2; 
    for (let i = 0; i < doubled; i++){
        let cell = document.createElement("div")
        cell.className = "cell";
        fragment.append(cell);
    }
  container.append(fragment);
}
// Function that creates grid per the user's entry 
function createGrid(cellCountPerSide) {
    // container.style.gridTemplateColumns = "repeat(16, 1fr)";
    // container.style.gridTemplateRows = "repeat(16, 1fr)";
    container.style.gridTemplateColumns = `repeat(${cellCountPerSide}, 1fr)`
    container.style.gridTemplateRows = `repeat(${cellCountPerSide}, 1fr)`
}

// Function that colors the cell on hover
function addColor() {
    this.style.cursor = "pointer";
    this.style.backgroundColor = "black";
}  

// Function that prompt the user to enter an integer between 1 and 100
function getUserInput() {
    let enteredValue = prompt("Enter an integer between 1 and 100", 1);
    if (enteredValue === null || enteredValue === "") {
        return; 
    } else if (!Number.isInteger(+enteredValue)|| isNaN(+enteredValue) || +enteredValue < 1 || +enteredValue > 100){
        alert("The number has to be an integer between 1 and 100.");
        getUserInput();
        return; 
    } else if (+enteredValue >= 1 && +enteredValue <= 100){
        return +enteredValue; 
    } else {
        return; 
    }
}

// Function that creates div's and grid cells per the user's entry
function setUpGrid(){
    refreshCanvas();
    let userEntry = getUserInput(); 
    createGridCell(userEntry);
    createGrid(userEntry);
    const gridItems = document.querySelectorAll(".cell"); 
    gridItems.forEach(function(item){
        // item.addEventListener("mouseenter", addColor);
        item.addEventListener("mouseenter", addRandomColor);
    })
}

// Function that removes the previous div elements in container
function refreshCanvas(){
    while (container.firstChild) 
        container.removeChild(container.firstChild);
}

// Event listener attached to reset button 
resetButton.addEventListener("click", setUpGrid);

// BONUS Feature: Random color trace 
// Function that returns random numbers 
function createRandomInteger(maxNumber){
    return Math.floor(Math.random()*(maxNumber + 1));
}

// Function that randomly produces RGB colors
function addRandomColor(){
    let red = createRandomInteger(255);
    let green = createRandomInteger(255);
    let blue = createRandomInteger(255);
    this.style.cursor = "pointer";
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
