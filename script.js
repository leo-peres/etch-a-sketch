let dim = 16;

let colorMode = 1;

const opacityMatrix = [];

const gridContainer = document.querySelector("#grid-container");

gridContainer.addEventListener("mouseover", (evt) => {
    const targetCell = evt.target;
    if(targetCell.classList.contains("cell")) {
        if(colorMode == 1) {
            targetCell.style.background = "rgb(0, 0, 224)";
            targetCell.style.opacity = 1;
        }
        else if(colorMode == 2) {
            let rValue = Math.floor(Math.random()*256);
            let gValue = Math.floor(Math.random()*256);
            let bValue = Math.floor(Math.random()*256);
            let backgroundColor = `rgb(${rValue}, ${gValue}, ${bValue})`;
            targetCell.style.background = backgroundColor;
            targetCell.style.opacity = 1;            
        }
        else {
            targetCell.style.background = "rgb(0, 0, 0)";
            let row = parseInt(targetCell.getAttribute("row"));
            let col = parseInt(targetCell.getAttribute("col"));
            targetCell.style.opacity = `${opacityMatrix[row][col]}`;
            opacityMatrix[row][col] = Math.min(1, opacityMatrix[row][col] + 0.1);
        }
    }
});

const popupButton = document.querySelector("#popup-button");
popupButton.addEventListener("click", () => {
    let newDim = parseInt(prompt("Type new dimension (max value: 100)"));
    if(newDim !== NaN && newDim >= 1 && newDim <= 100) {
        gridContainer.innerHTML = '';
        dim = newDim;
        createGrid();
    }
});

const blueButton = document.querySelector("#blue-button");
blueButton.addEventListener("click", () => colorMode = 1);

const randomButton = document.querySelector("#random-button");
randomButton.addEventListener("click", () => colorMode = 2);

const darkeningButton = document.querySelector("#darkening-button");
darkeningButton.addEventListener("click", () => {
    colorMode = 3;
    resetOpacityMatrix();
});

function resetOpacityMatrix() {
    for(let i = 0; i < dim; i++) {
        for(let j = 0; j < dim; j++) {
            opacityMatrix[i][j] = 0.1;
        }
    }
}

function createGrid() {

    for(let i = 0; i < dim; i++) {

        const newRowDiv = document.createElement("div");
        newRowDiv.classList.add("row");
        newRowDiv.id = `row-${i+1}`;

        gridContainer.appendChild(newRowDiv);

        for(let j = 0; j < dim; j++) {

            const newCellDiv = document.createElement("div");
            newCellDiv.classList.add("cell");
            newCellDiv.setAttribute("row", i);
            newCellDiv.setAttribute("col", j);

            newRowDiv.appendChild(newCellDiv);

        }

    }

    opacityMatrix.length = dim;
    for(let i = 0; i < dim; i++) {
        opacityMatrix[i] = []
    }
    resetOpacityMatrix();

}


createGrid(dim);
