const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanScore = 0;
let computerScore = 0;


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


// console.log(getComputerChoice());


function getHumanChoice() {
    let choice = prompt("Enter a valid choice: ").toLowerCase();

    if (choice != rock && choice != paper && choice != scissors) {
        return getHumanChoice();
    }

    return choice;

}

// console.log(getHumanChoice());



function playRound(humanChoice, computerChoice) {
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


// function playGame() {
//     let humanChoice;
//     let computerChoice;
//     console.log("****************");
//     for (let i = 0; i < 5; i++) {
//         console.log(`Round ${i+1}`);
//         humanChoice = getHumanChoice();
//         computerChoice = getComputerChoice();
//         console.log(`You chose: ${humanChoice}      computer chose: ${computerChoice}`);
//         playRound(humanChoice, computerChoice);
//         console.log("****************");
//     }

//     if (humanScore > computerScore) {
//         console.log(`You have won! Congratulations! Your total score is: ${humanScore}/5.`)
//     }
//     else if (humanScore == computerScore) {
//         console.log(`It's a draw! Your total score is: ${humanScore}/5.`)
//     }

//     else {
//         console.log(`You have lost! Your total score is: ${humanScore}/5.`)
//     }
// }

// playGame();