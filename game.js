document.addEventListener('DOMContentLoaded', function () {
    const h1 = document.getElementById('prompt');
    const buttons = document.querySelectorAll('button');
    console.log(buttons);
    const computerOptions = document.querySelectorAll('button');
    const result = document.getElementById('result');

    function disableButtons() {
        for (let i = 0; i < 3; i++) {
            buttons[i].disabled = true;
            buttons[i].style.display = "none";
        }
        h1.style.display = "none";
    }

    function displayResult() {
        result.style.display = "grid";
    }

    for (let i = 0; i < 3; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            let userChoice = button.id
            userChoice = userChoice.toString();
            console.log('You chose: ', userChoice);
            document.getElementById('user-choice').innerHTML = userChoice;

            const randomChoice = Math.floor(Math.random() * computerOptions.length);
            let computerChoice = computerOptions[randomChoice].id;
            computerChoice = computerChoice.toString();
            console.log('Computer chose: ', computerChoice);
            document.getElementById('computer-choice').innerHTML = computerChoice;

            disableButtons();
            displayResult();

            function winLossResult(userChoice, computerChoice) {
                if (userChoice === computerChoice) {
                    return "It's a tie! Try again";
                }
                if (userChoice === 'rock') {
                    if (computerChoice === 'scissors') {
                        return "You won! Rock beats scissors.";
                    } else {
                        return "You lose! Paper beats rock.";
                    }
                } else if (userChoice === 'paper') {
                    if (computerChoice === 'rock') {
                        return "You won! Paper beats rock.";
                    } else {
                        return "You lose! Scissors beats paper.";
                    }
                } else if (userChoice === 'scissors') {
                    if (computerChoice === 'paper') {
                        return "You won! Scissors beats paper.";
                    } else {
                        return "You lose! Rock beats paper.";
                    }
                }
            }

            document.getElementById('win-loss-result').innerHTML = winLossResult(userChoice, computerChoice);
        });
    }
});
