function computerPlay() {
  // Generate a random number from 0 to 2
  const randomNum = Math.floor(Math.random() * 3);
  
  // Map the random number to rock, paper, or scissors
  switch (randomNum) {
    case 0:
      return 'Rock';
      case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  // Convert both selections to lowercase to make the function case-insensitive
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  
  // Define all possible outcomes
  const outcomes = {
    rock: {
      rock: 'Tie! Both chose rock',
      paper: 'You Lose! Paper beats Rock',
      scissors: 'You Win! Rock beats Scissors'
    },
    paper: {
      rock: 'You Win! Paper beats Rock',
      paper: 'Tie! Both chose paper',
      scissors: 'You Lose! Scissors beat Paper'
    },
    scissors: {
      rock: 'You Lose! Rock beats Scissors',
      paper: 'You Win! Scissors beat Paper',
      scissors: 'Tie! Both chose scissors'
    }
  };
  
  // Return the appropriate outcome based on the player and computer selections
  if (outcomes[playerSelection][computerSelection]) {
    return outcomes[playerSelection][computerSelection];
  } else {
    return 'Invalid selection! Please choose Rock, Paper, or Scissors.';
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt(`Round ${i}: Choose Rock, Paper, or Scissors`);
    let computerSelection = computerPlay();
    
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(`Round ${i}: ${roundResult}`);
    
    if (roundResult.startsWith("You Win!")) {
      playerScore++;
    } else if (roundResult.startsWith("You Lose!")) {
      computerScore++;
    }
  }
  
  if (playerScore > computerScore) {
    console.log(`You win the game! Final score: ${playerScore} to ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`You lose the game! Final score: ${playerScore} to ${computerScore}`);
  } else {
    console.log(`It's a tie! Final score: ${playerScore} to ${computerScore}`);
  }
}

// Call the game function to start the game
game();
