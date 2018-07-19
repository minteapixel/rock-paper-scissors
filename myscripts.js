var choices = ["rock", "paper", "scissors"];
let outcome = "";

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let round = 0;

// === Buttons' functionality
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = document.querySelector(`button[id="${button.value}"`).value;
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];
        playRound(playerChoice, computerChoice);
        console.log("player: " + playerChoice + ", computer: " + computerChoice);
        updateScore();
    });
});

// === playRound function
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
    	let outcome = "tie";
    	tieScore += 1;
        return document.getElementById('results').textContent = "It's a tie! You both chose: " + playerChoice;
    } else {

    switch(playerChoice) {
        case "paper":
            return (computerChoice === "scissors") ? winOrLose(false, playerChoice, computerChoice) : winOrLose(true, playerChoice, computerChoice);  
        case "rock":
            return (computerChoice === "paper") ? winOrLose(false, playerChoice, computerChoice) : winOrLose(true, playerChoice, computerChoice);
        default:
            return (computerChoice === "rock") ? winOrLose(false, playerChoice, computerChoice) : winOrLose(true, playerChoice, computerChoice);
    	}
	}
	round += 1;
}
    
// === helper functions
function winOrLose(win, playerChoice, computerChoice) {
    if (win) {
    	let outcome = "win";
    	playerScore += 1;
        document.getElementById('results').textContent =  "You win! You chose: " + playerChoice + ", Computer chose: " + computerChoice;
    } else {
    	let outcome = "lose";
    	computerScore += 1;
        document.getElementById('results').textContent =  "You lose! You chose: " + playerChoice + ", Computer chose: " + computerChoice;
    }
}

function updateScore () {
	document.getElementById("tieScore").textContent = tieScore;
	document.getElementById("playerScore").textContent = playerScore;
	document.getElementById("computerScore").textContent = computerScore;
}

// function winner () {
	// if round === 5 {
		// if (playerScore > computerScore) {
		// return 
	// }
// }

function clearScore () {
	document.querySelectorAll("#tieScore, #playerScore, #computerScore").textContent = 0;
}
