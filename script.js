const GRIDSIZE = 600;
const DEFAULT_SIDE = 16;
const DEFAULT_COLOR = "black";
const DEFAULT_MODE = "color";

let currentMode = DEFAULT_MODE;
let currentSide = DEFAULT_SIDE;
let currentColor = DEFAULT_COLOR;

let mouseDown = false;

const grid = document.querySelector(".grid");
const clear = document.querySelector(".clear");
const sizeSlider = document.querySelector(".sizeSlider");
const sizeValue = document.querySelector(".sizeValue");
const eraser = document.querySelector(".eraser");
const colorMode = document.querySelector(".colorMode");
const colorPicker = document.querySelector(".colorPicker");
const rainbowMode = document.querySelector(".rainbowMode");

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

eraser.addEventListener("click",function() {
    currentMode = "eraser";
    eraser.classList.add("active");
    colorMode.classList.remove("active");
    rainbowMode.classList.remove("active");
});

colorMode.addEventListener("click",function() {
    currentMode = DEFAULT_MODE;
    colorMode.classList.add("active");
    rainbowMode.classList.remove("active");
    eraser.classList.remove("active");
});

colorPicker.addEventListener("change", function(e) {
    setColor(e.target.value);
})

rainbowMode.addEventListener("click", function(e) {
    currentMode = "rainbow";
    rainbowMode.classList.add("active");
    colorMode.classList.remove("active");
    eraser.classList.remove("active");
})

function addColor(e) {
    if(e.type === "mouseover" && mouseDown === true || e.type === "click") {
        if (currentMode === DEFAULT_MODE) {
            e.target.style.backgroundColor = currentColor;
        } else if (currentMode === "eraser") {
            e.target.style.backgroundColor = "white";
        } else if (currentMode === "rainbow") {
            const randomR = Math.floor(Math.random() * 256);
            const randomG = Math.floor(Math.random() * 256);
            const randomB = Math.floor(Math.random() * 256);
            e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        }
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

function setColor(value) {
    currentColor = value;
}

createGrid(DEFAULT_SIDE);
colorMode.classList.add("active");