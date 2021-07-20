let userPoints = 0;
let computerPoints = 0;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function computerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function round(user, computer) {
    if (userPoints < 5 && computerPoints < 5) {
        if (user === computer) {
            document.getElementById('results').innerHTML = 'Tie';
        } else if (user == 'paper' && computer == 'rock') {
            document.getElementById('results').innerHTML = 'You won!';
            userPoints += 1; 
        } else if (user == 'rock' && computer == 'scissors') {
            document.getElementById('results').innerHTML = 'You won!';
            userPoints += 1;
        } else if (user == 'scissors' && computer == 'paper') {
            document.getElementById('results').innerHTML = 'You won!';
            userPoints += 1;
        } else if (user == 'paper' && computer == 'scissors') {
            document.getElementById('results').innerHTML = 'You lost!';
            computerPoints += 1;
        } else if (user == 'rock' && computer == 'paper') {
            document.getElementById('results').innerHTML = 'You lost!';
            computerPoints += 1;
        } else if (user == 'scissors' && computer == 'rock') {
            document.getElementById('results').innerHTML = 'You lost!';
            computerPoints += 1;
        }
        
        let computerScore = computerPoints.toString();
        document.getElementById('computerScore').innerHTML = computerScore;

        let userScore = userPoints.toString();
        document.getElementById('userScore').innerHTML = userScore;


        if (computerPoints == 5 && userPoints < 5) {
            document.getElementById('gameResults').innerHTML = 'Computer Won! Reload to play again';
        } else if (userPoints == 5 && computerPoints < 5) {
            document.getElementById('gameResults').innerHTML = 'You Won! Reload to play again';
        }
        
        return;

    }
}

rock.addEventListener('click', () => {
    round('rock', computerChoice());
});

paper.addEventListener('click', () => {
    round('paper', computerChoice());
});

scissors.addEventListener('click', () => {
    round('scissors', computerChoice());
});