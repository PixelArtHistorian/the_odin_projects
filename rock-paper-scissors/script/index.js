function getCpuMove(){
    return (Math.trunc(Math.random()*10))%3;
}
function getPlayerMove(move){
    let moveNum;
    switch(move){
        case "rock":
            moveNum = 0
            break;
        case "paper":
            moveNum = 1
            break;
        case "scissors":
            moveNum = 2
            break;
    }
    return moveNum;   
}
function getReadableMove(move){
    let readableMove;
    switch(move){
       case 0:
            readableMove = "Rock";
            break;
        case 1:
            readableMove = "Paper";
            break;
        case 2:
            readableMove = "Scissors";
            break; 
    }
    return readableMove;
}
function logScore(result, playerMove, cpuMove){
    let scoreBoard = document.querySelector('.scoreboard');
    let header = document.querySelector('.scoreHeader');
    let roundResult = document.createElement('p');
    switch(result){
        case 0:
             log = `${getReadableMove(playerMove)} VS 
             ${getReadableMove(cpuMove)}! That's a draw!`;
             break;
         case 1:
            log = `${getReadableMove(playerMove)} VS 
            ${getReadableMove(cpuMove)}! That's a WIN!`;
            playerScore+=1;
            break;
         case 2:
            log = `${getReadableMove(playerMove)} VS 
            ${getReadableMove(cpuMove)}! That's a LOSS!`;
            cpuScore+=1;
            break;
     }
     header.textContent = `PLAYER:${playerScore} CPU:${cpuScore}`;
     roundResult.textContent = log;
     scoreBoard.appendChild(roundResult);
}

function checkWinner(){
    if(playerScore == 5 || cpuScore ==5){
        let scoreboard = document.querySelector('.scoreboard');
        let matchResult = document.createElement('p');
        if(playerScore ==5){
            matchResult.textContent = "YOU WIN! Press a button to play again!"
            matchResult.style.color = 'gold'
        }else{
            matchResult.textContent = "YOU LOSE! Press a button to play again!"
            matchResult.style.color = 'red';
        }
        scoreboard.appendChild(matchResult);
        return true;
    }else{
        return false;
    }
}
function resetGame(){
    playerScore = 0;
    cpuScore = 0;
    let scoreBoard = document.querySelector('.scoreboard');
    let field = document.querySelector('.field');
    let header =  document.querySelector('.scoreHeader');
    let roundContainer = document.querySelector('.round-container')
    while (scoreBoard.lastChild) {
        scoreBoard.removeChild(scoreBoard.lastChild);
    }
    while(field.lastChild){
        field.removeChild(field.lastChild);
    }
    scoreBoard.appendChild(header);
    field.append(roundContainer);
    console.log(scoreBoard);
}
function getMoveImg(moveIndex){ 
    let imgPath;
    switch(moveIndex){
        case 0:
            imgPath = "../graphics/Rock.png";
            break;
         case 1:
            imgPath = "../graphics/Paper.png";
            break;
         case 2:
            imgPath = "../graphics/Scissors.png";
            break; 
     }
     return imgPath;
}
function setPlayerMove(playerMove){
    let playerImg = document.getElementById('player-img');
    playerImg.setAttribute('src', getMoveImg(playerMove));
}

function setCpuMove(cpuMove){
    let cpuImg = document.getElementById('cpu-img');
    cpuImg.setAttribute('src', getMoveImg(cpuMove));
}

function playRound(e){
    let result;
    if(checkWinner()){
        resetGame();
    }
    playerMove = getPlayerMove(this.dataset.control);
    setPlayerMove(playerMove);
    cpuMove = getCpuMove();
    setCpuMove(cpuMove);
    if(playerMove === cpuMove){
        result = 0;
    }else if((cpuMove+1)%3 === playerMove){
        result = 1;
    }else{
        result = 2; 
    }
    logScore(result, playerMove, cpuMove);
    checkWinner();
}

let playerScore = 0;
let cpuScore = 0;
const controls = document.querySelectorAll('.control');
console.log(controls);
controls.forEach(control => control.addEventListener('click',playRound));