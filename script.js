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
    const div = document.querySelector("div.content");
    if ( humanScore == 0 && computerScore == 0) {
        div.replaceChildren();
    }

    const choiceDiv = document.createElement("div");
    const resultDiv = document.createElement("div");
    const totalScoreDiv = document.createElement("div");


    div.appendChild(choiceDiv);
    div.appendChild(resultDiv);
    div.appendChild(totalScoreDiv);
    
    choiceDiv.textContent = `You chose: ${humanChoice}         Computer chose: ${computerChoice}`;
    
    if (humanChoice == computerChoice) {
        resultDiv.textContent = "It's a draw!";
    }
    
    else if ((humanChoice == rock && computerChoice == scissors) || (humanChoice == scissors && computerChoice == paper) || (humanChoice == paper && computerChoice == rock)) {
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
    }
    
    else {
        resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore += 1;
        
    }
    totalScoreDiv.textContent = `Your Score: ${humanScore}/5      Computer Score: ${computerScore}/5`;
    
    if (humanScore == 5 || computerScore == 5) {
        const gameOver = document.createElement("div");
        gameOver.textContent = "Game Over!";
        div.appendChild(gameOver);

        humanScore = 0;
        computerScore = 0;
        
    }

}