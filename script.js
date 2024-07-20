const GRIDSIZE = 600;
const DEFAULT_SIDE = 16;

let currentSide = DEFAULT_SIDE;

let mouseDown = false;

const grid = document.querySelector(".grid");
const clear = document.querySelector(".clear");
const sizeSlider = document.querySelector(".sizeSlider");
const sizeValue = document.querySelector(".sizeValue");

function createGrid(side) {
    for (let i = 0; i < (side * side); i++) {
        const gridElement = document.createElement("div");
        grid.appendChild(gridElement);
    
        gridElement.classList.add("gridElement");
        gridElement.style.width = `${(GRIDSIZE / side) - 2}px`;
        gridElement.style.height = `${(GRIDSIZE / side) - 2}px`;
    
        gridElement.addEventListener("mousedown",function() {
            mouseDown = true;
        });
        gridElement.addEventListener("mouseover", addColor);  
        gridElement.addEventListener("mouseup",function() {
            mouseDown = false;
        });
        gridElement.addEventListener("click", addColor);  
    }
}

clear.addEventListener("click",function() {
    reloadGrid();
});

sizeSlider.addEventListener("change", function(e) {
    setSize(e.target.value);
    reloadGrid();
})

sizeSlider.addEventListener("mousemove", function(e) {
    setSize(e.target.value);
})

function addColor(e) {
    if(e.type === "mouseover" && mouseDown == true || e.type === "click") {
        e.target.style.backgroundColor = "black";
    } else {
        return;
    }
}

function reloadGrid() {
    grid.innerHTML = null;
    createGrid(currentSide);
}

function setSize(value) {
    currentSide = value;
    sizeValue.textContent = value + " x " + value;
}

createGrid(DEFAULT_SIDE);