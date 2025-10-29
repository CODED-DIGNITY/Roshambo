
let computerScore=0;
let humanScore=0;

function getComputerChoice(){
    let cc = Math.random();
    if(cc<0.33) return "rock";
    else if(cc>0.33 && cc<0.66 ) return "paper";
    else if(cc>0.33) return "sizor";
}

function getHumanChoice(){
    let hc = parseInt(prompt("Enter 1 for rock,2 for paper 3,for sizor"));
    if(hc===1) return "rock";
    if(hc===2) return "paper";
    if(hc===3) return "sizor";
}

function playRound(humanChoice,computerChoice){
    if(humanChoice===computerChoice){
        return "It's a tie!";
    }
    else if(humanChoice==="rock" && computerChoice==="sizor" ||
            humanChoice==="paper" && computerChoice==="rock" ||
            humanChoice==="sizor" && computerChoice==="paper"){
                humanScore++;
                return `You win ${humanChoice} beats ${computerChoice}`;
    }
    else{
        computerScore++;
        return `You lose ${computerChoice} beats ${humanChoice}`;
    }
}

function playGame(){
    while(humanScore<5 && computerScore<5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    }
    if(humanScore===5){
        console.log("Congratulations! You won the game!");
    }
    else{
        console.log("Sorry! The computer won the game!");
    }
}

playGame();