let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getCompChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function convertChoice(choice) {
  if (choice === 'rock') return 'Rock';
  if (choice === 'paper') return 'Paper';
  return 'Scissors';
}

function win(userChoice, compChoice) {
  const userSub = 'USER'.fontsize(3).sub();
  const compSub = 'COMP'.fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertChoice(userChoice)}${userSub} beats ${convertChoice(compChoice)}${compSub}. You win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, compChoice) {
  const userSub = 'USER'.fontsize(3).sub();
  const compSub = 'COMP'.fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertChoice(userChoice)}${userSub} loses to ${convertChoice(compChoice)}${compSub}. You lost!`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, compChoice) {
  const userSub = 'USER'.fontsize(3).sub();
  const compSub = 'COMP'.fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  result_p.innerHTML = `${convertChoice(userChoice)}${userSub} equals ${convertChoice(compChoice)}${compSub}. It's a draw!`;
  userChoice_div.classList.add('grey-glow');
  setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);
}

function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + '_' + compChoice) {
    case 'rock_scissors':
    case 'paper_rock':
    case 'scissors_paper':
      win(userChoice, compChoice);
      break;
    case 'scissors_rock':
    case 'rock_paper':
    case 'paper_scissors':
      lose(userChoice, compChoice);
      break;
    case 'rock_rock':
    case 'paper_paper':
    case 'scissors_scissors':
      draw(userChoice, compChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', () => game('rock'));
  paper_div.addEventListener('click', () => game('paper'));
  scissors_div.addEventListener('click', () => game('scissors'));
}

main();