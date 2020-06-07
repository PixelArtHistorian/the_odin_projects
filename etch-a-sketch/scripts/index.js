function createBoard(size){
    let drawingBoard = document.querySelector('.drawing-board');
    drawingBoard.style.setProperty('--grid-size', size);
    for(let i=0;i<Math.pow(size,2);i++){
        let gridElement = document.createElement('div');
        gridElement.classList.add('pixel');
        drawingBoard.appendChild(gridElement);
    }
    let pixels = document.querySelectorAll('.pixel');
    pixelSize = getPixelSize(size);
    pixels.forEach(pixel=>pixel.style.width = `${pixelSize}px`);
    pixels.forEach(pixel=>pixel.style.height = `${pixelSize}px`);
    pixels.forEach(pixel=> pixel.addEventListener('mouseover', draw));
}
function getPixelSize(gridSize){
    boardSize = document.querySelector('.drawing-board')
    return Number(boardSize) / Number(gridSize);
}
function validatePrompt(value){
        var x;
        if (isNaN(value)) {
          return false;
        }
        x = parseFloat(value);
        return (x | 0) === x;
}
function refreshBoard(){
    let drawingBoard = document.querySelector('.drawing-board');
    while(drawingBoard.lastChild){
        drawingBoard.removeChild(drawingBoard.lastChild)
    }
    var size = prompt("Insert the size of the new board", "64");
    if (validatePrompt(size)){
        createBoard(Number(size));
    }else{
        alert("The size of the board must be an integer number")
        refreshBoard();
    }
}
function draw(e){
    var randomColor = "#000000".replace(/0/g,function(){
        return (~~(Math.random()*16)).toString(16);});
    this.classList.add('hover');
    this.style.background = randomColor;
}
const button = document.querySelector('.refresh-button');
button.addEventListener('click', refreshBoard);