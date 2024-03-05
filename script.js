// https://www.theodinproject.com/lessons/foundations-etch-a-sketch

// Create a 16x16 grid of squares using divs
    // divs must be created using JavaScript
    // put grid squares inside a container div
    // use flexbox to make the grid
    
//Hover effects change color of grid squares
    // event listeners

newSizeBtn = document.querySelector('#newsketch');
newSizeBtn.addEventListener('click', () => {
    
    removeGrid();

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

function removeGrid() {
    
    gridContainer = document.querySelector('.gridContainer');

    while (gridContainer.hasChildNodes()) { 
    gridContainer.firstChild.remove();
    }

}

createGrid(16);

gridSquare = document.querySelector('.gridContainer');
gridSquare.addEventListener('mouseover', (event) => {
    
let target = event.target;
target.style.background = '#ccc';

});