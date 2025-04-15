let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const results = document.querySelector("#results");
const score = document.querySelector("#score");

//user chooses their option for the round
rock.addEventListener("click", (e) => playRound(e));
paper.addEventListener("click", (e) => playRound(e));
scissor.addEventListener("click", (e) => playRound(e));

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);

    if(randomNum == 0){
        return 'rock';
    } else if(randomNum == 1){
        return 'paper';
    } else{
        return 'scissor';
    }
}

function playRound(e){
    let humanChoice = e.target.id;
    let computerChoice = getComputerChoice();

    if(humanChoice === computerChoice){
        results.textContent = `You tied! You both chose ${humanChoice}`;
        score.textContent = `Human:${humanScore} Computer:${computerScore}`;
    } else if(humanChoice === 'rock' && computerChoice === 'scissor' ||
              humanChoice === 'paper' && computerChoice === 'rock' ||
              humanChoice === 'scissor' && computerChoice === 'paper'){
                humanScore++;
                results.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
                score.textContent = `Human:${humanScore} Computer:${computerScore}`;
    } else{
        computerScore++;
        results.textContent = `You lost! ${computerChoice} beats ${humanChoice}`;
        score.textContent = `Human:${humanScore} Computer:${computerScore}`;
    }

    if(humanScore == 5){
        score.textContent = `You win!`
        reset();
    }

    if(computerScore == 5){
        score.textContent = `You lost`
        reset();
    }
}

function reset(){
    humanScore = 0;
    computerScore = 0;
}