const workspace = document.querySelector('#main');
const resetButton = document.querySelector('#reset');

function createWorkSpace(n) {
    workspace.innerHTML = ''
    for (let i = 0; i < n; i++) {
        let row_div = document.createElement('div');
        row_div.setAttribute('class', 'row-div');
        for (let j = 0; j < n; j++) {
            let cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            row_div.appendChild(cell);
        }
        workspace.appendChild(row_div);
    }
}

function newGrid() {
    let n = prompt("Enter the length of the grid: ");
    createWorkSpace(n);
}

workspace.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains('cell')) {
        opacity = parseFloat(event.target.style.opacity) || 0;
        event.target.style.opacity = opacity + 0.1;
        event.target.style.backgroundColor = "black";
        // event.target.style.backgroundColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
    }
});

resetButton.addEventListener("click", newGrid);

createWorkSpace(16)