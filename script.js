const stone = document.querySelector(".stone");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const container = document.querySelector(".container");
const containerImages = document.querySelector(".container .images");
const scoreUser = document.querySelector(".score .user p");
const scoreBot = document.querySelector(".score .bot p");
const resetBtn = document.querySelector(".reset");

let para = document.createElement("p");
para.style.margin = "0px";
let botChoiceImg = document.createElement("img");
botChoiceImg.classList.add("choice-img");
let userChoiceImg = document.createElement("img");
userChoiceImg.classList.add("choice-img");

let computerScore = 0;
let humanScore = 0;
let gameOver = false;

function getComputerChoice() {
	let cc = Math.random();
	if (cc < 1 / 3) return "stone";
	else if (cc < 2 / 3) return "paper";
	else return "scissor";
}

function updateUI() {
	container.appendChild(para);
	scoreUser.innerHTML = `Your <br> Score <br> ${humanScore}`;
	scoreBot.innerHTML = `Villager <br> Score <br> ${computerScore}`;
}

function resetGame() {
	computerScore = 0;
	humanScore = 0;
	gameOver = false;
	para.innerText = "";
	updateUI();
}

function checkGameOver() {
	if (computerScore >= 5 || humanScore >= 5) {
		gameOver = true;
		if (computerScore > humanScore) {
			alert("Game Over! Villager Wins!");
			para.innerText = "Game Over! Villager Wins!";
		} else {
			alert("Game Over! You Wins!");
			para.innerText = "Game Over! You Win!";
		}
		container.appendChild(para);
	}
}

function playRound(humanChoice, computerChoice) {
	if (gameOver) return;
	if (humanChoice === computerChoice) {
		para.innerText = `It's a tie! you both chose ${humanChoice}`;
	} else if (
		(humanChoice === "stone" && computerChoice === "scissor") ||
		(humanChoice === "paper" && computerChoice === "stone") ||
		(humanChoice === "scissor" && computerChoice === "paper")
	) {
		humanScore++;
		para.innerText = `Villager chose ${computerChoice} You win`;
	} else {
		computerScore++;
		para.innerText = `Villager chose ${computerChoice} You Lose`;
	}
	updateUI();
	checkGameOver();
}

stone.addEventListener("click", () => {
	humanChoice = "stone";
	playRound(humanChoice, getComputerChoice());
});
paper.addEventListener("click", () => {
	humanChoice = "paper";
	playRound(humanChoice, getComputerChoice());
});
scissor.addEventListener("click", () => {
	humanChoice = "scissor";
	playRound(humanChoice, getComputerChoice());
});

resetBtn.addEventListener("click", resetGame);
