const gridContainer = document.querySelector("#grid-container");

const gridArray = new Array(16);
const rowsArray = new Array(16);

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
