let rock = "rock";
let paper = "paper";
let scissors = "scissors";


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


console.log(getComputerChoice());


function getHumanChoice() {
    let choice = prompt("Enter a valid choice: ").toLowerCase();

    if (choice != rock && choice != paper && choice != scissors) {
        return getHumanChoice();
    }

    return choice

}

console.log(getHumanChoice());