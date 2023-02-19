const container = document.getElementById("container");
const bnwButton = document.getElementById("bnw");
const gradationButton = document.getElementById("gradation");
const magicButton = document.getElementById("random");

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
function createGrid(cellCountPerSide){
    container.style.gridTemplateColumns = `repeat(${cellCountPerSide}, 1fr)`
    container.style.gridTemplateRows = `repeat(${cellCountPerSide}, 1fr)`
}

// Function that colors the cell in black 
function addColor(){
    this.style.cursor = "pointer";
    this.style.backgroundColor = "black";
}  

// Function that prompt the user to enter an integer between 1 and 100
function getUserInput(){
    let enteredValue = prompt("Enter an integer between 1 and 100", 1);
    if (enteredValue === null || enteredValue === ""){
        return; 
    } else if (!Number.isInteger(+enteredValue)|| isNaN(+enteredValue) || +enteredValue < 1 || +enteredValue > 100){
        alert("The number has to be an integer between 1 and 100");
        getUserInput();
        return; 
    } else if (+enteredValue >= 1 && +enteredValue <= 100){
        return +enteredValue; 
    } else {
        return; 
    }
}

// Function that removes the previous div elements in container
function refreshCanvas(){
    while (container.firstChild) 
        container.removeChild(container.firstChild);
}

// Function that creates div's and grid cells per the user's entry and trace with black 
function activateBNW(){
    refreshCanvas();
    let userEntry = getUserInput(); 
    createGridCell(userEntry);
    createGrid(userEntry);
    const gridItems = document.querySelectorAll(".cell"); 
    gridItems.forEach((item) => {
        item.addEventListener("mouseenter", addColor);
    });
}

// Event listener attached to bnw button 
bnwButton.addEventListener("click", activateBNW);

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

// Function that creates div's and grid cells per the user's entry and trace with random colors
function activateRandom(){
    refreshCanvas();
    let userEntry = getUserInput(); 
    createGridCell(userEntry);
    createGrid(userEntry);
    const gridItems = document.querySelectorAll(".cell"); 
    gridItems.forEach((item) => {
        item.addEventListener("mouseenter", addRandomColor);
    });
}

// Event listener attached to magic button 
magicButton.addEventListener("click", activateRandom);

// Function that keeps adding 10% of black to the first 10 cells then complete black
function activateGradation(){
    refreshCanvas();
    let userEntry = getUserInput(); 
    createGridCell(userEntry);
    createGrid(userEntry);

    const gridItems = document.querySelectorAll(".cell");
    let hexValue = ["#ffffff", "#e6e6e6", "#cccccc", "#b3b3b3", "#999999", "#808080", "#666666", "#4d4d4d", "#333333", "#1a1a1a"] ;
    let counter = 0;
    gridItems.forEach((item) => {
        item.addEventListener("mouseenter", function(){
            this.style.cursor = "pointer";
            if (counter < 10){
                this.style.backgroundColor = hexValue[counter];
                counter++;
            } else {
                this.style.backgroundColor = "#000000";
            }
        });
    });
}

// Event listener attached to gradation button 
gradationButton.addEventListener("click", activateGradation);


