const GRIDSIDE = 600;
let side = 16;
let mouseDown = false;

const grid = document.querySelector(".grid");

for (let i = 0; i < (side * side); i++) {
    const gridElement = document.createElement("div");
    grid.appendChild(gridElement);

    gridElement.classList.add("gridElement");
    gridElement.style.width = `${(GRIDSIDE / side) - 2}px`;
    gridElement.style.height = `${(GRIDSIDE / side) - 2}px`;

    gridElement.addEventListener("mousedown",function() {
        mouseDown = true;
    });
    gridElement.addEventListener("mouseover", addColor);  
    gridElement.addEventListener("mouseup",function() {
        mouseDown = false;
    });
    gridElement.addEventListener("click", addColor);  
}

function addColor(e) {
    if(e.type === "mouseover" && mouseDown == true || e.type === "click") {
        e.target.style.backgroundColor = "black";
    } else {
        return;
    }
}