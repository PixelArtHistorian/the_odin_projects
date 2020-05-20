function computerPlay(){
    return (Math.trunc(Math.random()*10))%3;
}
function playerPlay(){
    let move;
    let moveNum;
    let message = "What's your move? ROCK, PAPER or SCISSORS?";
    while(!validateMove(move)){
        move = prompt(message).toLowerCase();
        if(!validateMove(move)){
            alert("That's not a MOVE!")
        }
    }
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
function validateMove(move){
    if(move === "rock" || move ==="paper" || move ==="scissors"){
        return true;
    }else{
        return false;
    }
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
function playRound(playerMove, cpuMove){
    let result;
    if(playerMove === cpuMove){
        console.log(`${getReadableMove(playerMove)} VS 
                ${getReadableMove(cpuMove)}! That's a draw!`);
        result = 0;
    }else if((cpuMove+1)%3 === playerMove){
        console.log(`${getReadableMove(playerMove)} VS 
                ${getReadableMove(cpuMove)}! That's a WIN!`);
        result = 1;
    }else{
        console.log(`${getReadableMove(playerMove)} VS 
                ${getReadableMove(cpuMove)}! That's a LOSS!`);
        result = 2; 
    }
    return result;
}
function game(){
    let playerScore = 0;
    let cpuScore = 0;
    for(let i = 0; i < 5; i++){
        let roundResult = playRound(playerPlay(), computerPlay())
        if(roundResult === 1){
            playerScore++;
        }else if (roundResult ===2){
            cpuScore++;
        }
        console.log(playerScore);
        console.log(cpuScore);
    }
    if(playerScore === cpuScore){
        console.log("IT'S A DRAW!");
    }else if(playerScore < cpuScore){
        console.log("YOU LOSE!");
    }else{
        console.log("YOU WIN!");
    }
}
game();