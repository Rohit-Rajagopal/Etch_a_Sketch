const workspace = document.querySelector('#main');

function createWorkSpace(n) {
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

workspace.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains('cell')) {
        event.target.classList.add('cell-dark')
    }
});

createWorkSpace(16)