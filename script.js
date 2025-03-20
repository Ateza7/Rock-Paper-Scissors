let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
	let random_number = Math.random();
	if (random_number < 0.33) {
		return "Rock";
	} if (0.33 < random_number && random_number < 0.66) {
		return "Paper";
	} if (0.66 <= random_number && random_number < 0.99) {
		return "Scissors";
	} else {
		return "Scissors";
	}
}

function getHumanChoice() {
	let humanChoice = prompt("Enter 'Rock', 'Paper' or 'Scissors'")
	return humanChoice.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		console.log("Tie! no one wins!")
	} else if (humanChoice === "Rock" && computerChoice === "Paper") {
		console.log("You lose! Paper beats Rock!")
	}
}

console.log(getHumanChoice())
console.log(getComputerChoice())