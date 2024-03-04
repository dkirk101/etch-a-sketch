// https://www.theodinproject.com/lessons/foundations-etch-a-sketch

// Create a 16x16 grid of squares using divs
    // divs must be created using JavaScript
    // put grid squares inside a container div
    // use flexbox to make the grid
    
//Hover effects change color of grid squares
    // event listeners

// Add a button at top to prompt user for squares per side
    // set limit of 100

newSizeBtn = document.querySelector('#newsketch');

newSizeBtn.addEventListener('click', () => {
    squareTotal = prompt('Enter number of squares per side (less than 100)')
        if(squareTotal > 100) {
            alert('Please enter a positive number less than 100');
        }
        else{ 
            createGrid(squareTotal)
        }
    })

clearSketchBtn = document.querySelector('#clearsketch');

clearSketchBtn.addEventListener('click', ()=> removeGrid());

// create a container ("screen") div to house the grid squares - this is hard coded into DOM
    // .gridcontainer

// create "gridsquare" divs, defaulting to 32 squares (32x32) using loop

function createGrid(squareTotal) {

    squareWidth = 1 / squareTotal;

    gridContainer = document.querySelector('.gridContainer');

    for(i = 0; i < squareTotal * (squareTotal); ++i) {

        gridSquare = document.createElement('div');
        gridSquare.setAttribute("class", "gridsquare");
        gridSquare.style.width = `${squareWidth * 100}%`;
        gridSquare.style.height = `${squareWidth * 100}%`
        gridContainer.appendChild(gridSquare);
}
};


// create button and prompt to take user input, store in a variable, and then generate that many square divs

function removeGrid() {
    
    gridContainer = document.querySelector('.gridContainer');

    while (gridContainer.hasChildNodes()) { 
    gridContainer.firstChild.remove();
    }

}
