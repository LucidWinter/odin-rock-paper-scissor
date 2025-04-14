let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);

    if(randomNum == 0){
        return 'rock';
    } else if(randomNum == 1){
        return 'paper';
    } else{
        return 'scissors';
    }
}

function getHumanChoice(){
    return prompt('Please enter rock, paper or scissor').toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return `You tied! You both chose ${humanChoice}`
    } else if(humanChoice === 'rock' && computerChoice === 'scissors' ||
              humanChoice === 'paper' && computerChoice === 'rock' ||
              humanChoice === 'scissors' && computerChoice === 'paper'){
                humanScore++;
                return `You won! ${humanChoice} beats ${computerChoice}`;
    } else{
        computerScore++;
        return `You lost! ${computerChoice} beats ${humanChoice}`;
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
    }

    console.log(`Human Score:${humanScore} \nComputer Score:${computerScore}`);
}

playGame();