let gridLength = 8;
let color = 'rgb(222, 12, 222)';
function paint(e){
    if(e.target.classList.contains("box")){
        e.target.style.backgroundColor = color;
    }
}

function makeGrid(gridLength){
    const container = document.querySelector(".container");
    container.innerHTML = "";

    for(let i = 0; i < gridLength; i++){
        const row = document.createElement("div");
        row.classList.add('row');

        for(let j = 0; j < gridLength; j++){
            const box = document.createElement("div");
            box.classList.add('box');
            row.appendChild(box);
        }

        container.appendChild(row);
    }

    let draw = false;

    container.addEventListener('mousedown', () => {
        draw = true;
    })
    window.addEventListener('mouseup', () => {
        draw = false;
    })

    container.addEventListener('mouseover', (e) =>{
        if(draw){
            paint(e);
        }
    });
}

makeGrid(gridLength);

const customSizeBtn = document.querySelector("#gridLength");
customSizeBtn.addEventListener("click", () => {
    let gridLength = prompt("Enter Grid Length (Max-100 | Min-9):");

    while (gridLength !== null) {
        gridLength = parseInt(gridLength);

        if (!isNaN(gridLength) && gridLength >= 9 && gridLength <= 100) {
            makeGrid(gridLength);
            break; 
        }

        gridLength = prompt("Please enter a valid length (Max-100 | Min-9):");
    }
});

const colorBtn = document.querySelector("#color");
colorBtn.addEventListener("click", () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    color = `rgb(${red},${green},${blue})`;
})
