function createGrid(size){
    let drawingBoard = document.getElementById('drawing-board');
    drawingBoard.style.setProperty('--grid-size', size);
    for(let i=0;i<Math.pow(size,2);i++){
        let gridElement = document.createElement('div');
        gridElement.classList.add('pixel');
        gridElement.classList.add('square');
        drawingBoard.appendChild(gridElement);
    }
}
function draw(e){
    this.classList.toggle('hover');
}
createGrid(500);
const pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel=> pixel.addEventListener('mouseover', draw));