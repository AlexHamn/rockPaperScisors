function computerPlay() {
  let value = Math.floor(Math.random() * 3 + 1);
  if (value == 1) {
    return "rock";
  } else if (value == 2) {
    return "paper";
  } else if (value == 3) {
    return "scisor";
  }
}

function playerSelection(playerInput) {
  let outText = playerInput.toLowerCase();
  if (outText == "rock" || outText == "paper" || outText == "scisor") {
    return outText;
  } else {
    console.log("USER ERROR-MISSPELLED INPUT");
  }
}

let winner = "none";

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "paper") ||
    (playerSelection == "scisor" && computerSelection == "scisor")
  ) {
    return "Tie, " + playerSelection + " can't beat " + computerSelection;
  } else if (
    (playerSelection == "rock" && computerSelection == "scisor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scisor" && computerSelection == "paper")
  ) {
    winner = "player";
    return "You win! " + playerSelection + " beats " + computerSelection + "!";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scisor") ||
    (playerSelection == "scisor" && computerSelection == "rock")
  ) {
    winner = "computer";
    return (
      "You loose :c " +
      playerSelection +
      " does not beat " +
      computerSelection +
      "."
    );
  }
}

let playerInput;
let playrSelection;

function game() {
  let playerScore = 0;
  let computerScore = 0;

  //for (i = 0; i < 5; i++) {
  playerInput = prompt("What is your move?", "rock");
  playrSelection = playerSelection(playerInput);
  playRound(playrSelection, computerPlay());
  if (winner == "computer") {
    computerScore++;
  } else if (winner == "player") {
    playerScore++;
  }
  console.log(winner);

  playerInput = prompt("What is your move?", "rock");
  playrSelection = playerSelection(playerInput);
  playRound(playrSelection, computerPlay());
  if (winner == "computer") {
    computerScore++;
  } else if (winner == "player") {
    playerScore++;
  }
  console.log(winner);

  playerInput = prompt("What is your move?", "rock");
  playrSelection = playerSelection(playerInput);
  playRound(playrSelection, computerPlay());
  if (winner == "computer") {
    computerScore++;
  } else if (winner == "player") {
    playerScore++;
  }
  console.log(winner);

  playerInput = prompt("What is your move?", "rock");
  playrSelection = playerSelection(playerInput);
  playRound(playrSelection, computerPlay());
  if (winner == "computer") {
    computerScore++;
  } else if (winner == "player") {
    playerScore++;
  }
  console.log(winner);

  playerInput = prompt("What is your move?", "rock");
  playrSelection = playerSelection(playerInput);
  playRound(playrSelection, computerPlay());
  if (winner == "computer") {
    computerScore++;
  } else if (winner == "player") {
    playerScore++;
  }
  console.log(winner);

  if (playerScore >= 3) {
    console.log("Congrats! You win!");
  } else if (computerScore >= 3) {
    console.log("Computes wins");
  } else {
    console.log("No One Wins xD");
  }
}

//const playerInput = "ROCk";
//const playrSelection = playerSelection(playerInput);

//console.log(playrSelection);
//console.log(playRound(playrSelection, computerPlay()));
//console.log(winner);
console.log(game());
