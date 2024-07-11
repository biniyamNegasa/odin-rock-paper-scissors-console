const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanScore = 0;
let computerScore = 0;


const list = document.querySelector("ul");

list.addEventListener('click', function (event) {
        let target = event.target;
        switch (target.id) {
            case 'rock':
                playRound(rock, getComputerChoice());
                break;
            case 'paper':
                playRound(paper, getComputerChoice());
                break;
            case 'scissors':
                playRound(scissors, getComputerChoice());
                break;
        }
    });

function getComputerChoice() {

    let probability = Math.random() * 100;
    if (probability <= 33) {
        return rock;
    }

    if (probability > 66) {
        return paper;
    }

    return scissors;
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}         Computer chose: ${computerChoice}`);
    if (humanChoice == computerChoice) {
        console.log("It's a draw!");
    }

    else if ((humanChoice == rock && computerChoice == scissors) || (humanChoice == scissors && computerChoice == paper) || (humanChoice == paper && computerChoice == rock)) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }
    
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
        
    }
    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);

}