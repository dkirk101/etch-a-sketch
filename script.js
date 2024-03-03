// https://www.theodinproject.com/lessons/foundations-etch-a-sketch

// Create a 16x16 grid of squares using divs
    // divs must be created using JavaScript
    // put grid squares inside a container div
    // use flexbox to make the grid
    
//Hover effects change color of grid squares
    // event listeners

// Add a button at top to prompt user for squares per side
    // set limit of 100

// create a container ("screen") div to house the grid squares - this is hard coded into DOM
    // .gridcontainer

// create "gridsquare" divs, defaulting to 32 squares (32x32) using loop

function createGrid() {

    const squareTotal = 32;

    gridContainer = document.querySelector('.gridContainer');

    for(i = 0; i < squareTotal; i++) {
        gridSquare = document.createElement('div');
        gridSquare.setAttribute("class", "gridsqaure");
        gridContainer.appendChild(gridSquare);
        gridSquare.textContent = i;         // REMOVE FOR FINAL PRODUCT
}
};


// create button and prompt to take user input, store in a variable, and then generate that many square divs

function removeGrid () {
    
    gridContainer = document.querySelectorAll('.gridContainer');
    gridContainer.forEach(item => {item.remove();});

}