function computerPlay() {
  // Generate a random number from 0 to 2
  const randomNum = Math.floor(Math.random() * 3);
  
  // Map the random number to rock, paper, or scissors
  switch (randomNum) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {  
  // Define all possible outcomes
  const outcomes = {
    rock: {
      rock: 'Tie! Computer chose ✊ Rock',
      paper: 'You Lose! Computer chose 🤚 Paper',
      scissors: 'You Win! Computer chose ✌️ Scissors'
    },
    paper: {
      rock: 'You Win! Computer chose ✊ Rock',
      paper: 'Tie! Computer chose 🤚 Paper',
      scissors: 'You Lose! Computer chose ✌️ Scissors'
    },
    scissors: {
      rock: 'You Lose! Computer chose ✊ Rock',
      paper: 'You Win! Computer chose 🤚 Paper',
      scissors: 'Tie! Computer chose ✌️ Scissors'
    }
  };
  
  // Return the appropriate outcome based on the player and computer selections
  if (outcomes[playerSelection][computerSelection]) {
    return outcomes[playerSelection][computerSelection];
  } 
}

function game() {
  let scores = { player: 0, computer: 0 };

  const rockButton = document.querySelector('[data-selection="rock"]');
  const paperButton = document.querySelector('[data-selection="paper"]');
  const scissorsButton = document.querySelector('[data-selection="scissors"]');

  rockButton.addEventListener('click', function() {
    const roundResult = playRound('rock', computerPlay());
    displayResult(roundResult);
    updateScore(roundResult, scores);
  });

  paperButton.addEventListener('click', function() {
    const roundResult = playRound('paper', computerPlay());
    displayResult(roundResult);
    updateScore(roundResult, scores);
  });

  scissorsButton.addEventListener('click', function() {
    const roundResult = playRound('scissors', computerPlay());
    displayResult(roundResult);
    updateScore(roundResult, scores);
  });
}

function displayResult(result) {
  const resultsDiv = document.querySelector('#results');
  resultsDiv.innerHTML = `<h3>${result}</h3>`;
}

function updateScore(result, scores) {
  const scoreDiv = document.querySelector('#score');
  if (result.startsWith('You Win!')) {
    scores.player++;
  } else if (result.startsWith('You Lose!')) {
    scores.computer++;
  }
  scoreDiv.textContent = `Player: ${scores.player} - Computer: ${scores.computer}`;
  if (scores.player === 5) {
    displayResult('You win the game!');
    disableButtons();
  } else if (scores.computer === 5) {
    displayResult('You lose the game!');
    disableButtons();
  }
}

function disableButtons() {
  const buttons = document.querySelectorAll('.rps');
  buttons.forEach(button => {
    button.disabled = true;
  });
}

// Call the game function to start the game
game();