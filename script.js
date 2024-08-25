let randomColor = false;

const gridContainer = document.querySelector("#grid-container");

gridContainer.addEventListener("mouseover", (evt) => {
    const targetCell = evt.target;
    if(targetCell.classList.contains("cell")) {
        if(randomColor) {
            let rValue = Math.floor(Math.random()*256);
            let gValue = Math.floor(Math.random()*256);
            let bValue = Math.floor(Math.random()*256);
            let backgroundColor = `rgb(${rValue}, ${gValue}, ${bValue})`;
            targetCell.style.background = backgroundColor;
        }
        else {
            targetCell.style.background = "rgb(0, 0, 224)";
        }
    }
});

const gridArray = new Array(16);
const rowsArray = new Array(16);

const popupButton = document.querySelector("#popup-button");
popupButton.addEventListener("click", () => {
    let newDim = parseInt(prompt("Type new dimension (max value: 100)"));
    if(newDim !== NaN && newDim >= 1 && newDim <= 100) {
        gridContainer.innerHTML = '';
        createGrid(newDim);
    }
});

const blueButton = document.querySelector("#blue-button");
blueButton.addEventListener("click", () => randomColor = false);

const randomButton = document.querySelector("#random-button");
randomButton.addEventListener("click", () => randomColor = true);

function createGrid(dim) {

    for(let i = 0; i < dim; i++) {

        const rowArray = new Array(dim);
        gridArray[i] = rowArray;

        const newRowDiv = document.createElement("div");
        newRowDiv.classList.add("row");
        newRowDiv.id = `row-${i+1}`;
        rowsArray[i] = newRowDiv;

        gridContainer.appendChild(newRowDiv);

        for(let j = 0; j < dim; j++) {

            const newCellDiv = document.createElement("div");
            newCellDiv.classList.add("cell");
            newCellDiv.setAttribute("row", i+1);
            newCellDiv.setAttribute("col", j+1);

            newRowDiv.appendChild(newCellDiv);

            rowArray[j] = newCellDiv;

        }

    }

}


createGrid(16);
