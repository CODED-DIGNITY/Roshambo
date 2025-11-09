const stone = document.querySelector(".stone");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const container = document.querySelector(".container");
const containerImages = document.querySelector(".container .images");
const scoreUser = document.querySelector(".score .user p");
const scoreBot = document.querySelector(".score .bot p");

let para = document.createElement("p");
para.style.margin = "0px";
let botChoiceImg = document.createElement("img");
botChoiceImg.classList.add("choice-img");
let userChoiceImg = document.createElement("img");
userChoiceImg.classList.add("choice-img");

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
	let cc = Math.random();
	if (cc < 0.33) return "stone";
	else if (cc > 0.33 && cc < 0.66) return "paper";
	else if (cc > 0.33) return "scissor";
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		para.innerText = `It's a tie! you both chose ${humanChoice}`;
	} else if (
		(humanChoice === "stone" && computerChoice === "scissor") ||
		(humanChoice === "paper" && computerChoice === "stone") ||
		(humanChoice === "scissor" && computerChoice === "paper")
	) {
		humanScore++;
		para.innerText = `You win ${humanChoice} beats ${computerChoice}`;
	} else {
		computerScore++;
		para.innerText = `You lose ${computerChoice} beats ${humanChoice}`;
	}
	botChoiceImg.src = "assets/" + computerChoice + ".webp";
	userChoiceImg.src = "assets/" + humanChoice + ".webp";
	containerImages.appendChild(userChoiceImg);
	containerImages.appendChild(botChoiceImg);
	container.appendChild(para);
	scoreUser.innerHTML = `Your <br> Score <br> ${humanScore}`;
	scoreBot.innerHTML = `vIllager <br> Score <br> ${computerScore}`;
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

if (computerScore === 5 || humanScore === 5) {
	if (computerScore > humanScore) {
		para.innerText = "Game Over! Villager Wins!";
	} else {
		para.innerText = "Game Over! You Win!";
	}
	container.appendChild(para);
}
