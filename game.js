document.addEventListener('DOMContentLoaded', function () {
    const h1 = document.getElementById('prompt');
    const buttons = document.querySelectorAll('button');
    console.log(buttons);
    const computerOptions = document.querySelectorAll('button');
    const result = document.getElementById('result');
    const shuffle = document.querySelectorAll('li');

    const BASE_TIME = 100;

    function disableButtons() {
        for (let i = 0; i < 3; i++) {
            buttons[i].disabled = true;
            buttons[i].style.display = "none";
        }
        h1.style.display = "none";
    }

    let counter = 0

   function hideListItems() {
        for (i = 0; i < 3; i++) {
            shuffle[i].classList.remove('active');
        }
   }

    function animation() {
        hideListItems();
        shuffle[counter].classList.add('active');
        if (counter === 2) {
            counter = 0;
        } else {
            counter++;
        }
    } 

    function animateShuffle() {
        for (i = 0; i < 3; i++) {
            // if (i === 0) {
            //     shuffle[i].classList.add('active');
            // }
            setTimeout(animation, (i + 1) * BASE_TIME);
      }
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
            console.log('Computer chose: ', computerChoice);
            document.getElementById('computer-choice').innerHTML = computerChoice;

            disableButtons();
            animateShuffle();
            setTimeout(animateShuffle, (shuffle.length + 1) * BASE_TIME);
            
            function displayComputerChoice() {
                hideListItems();
                document.getElementById(computerChoice).style.display = "grid";
            }

            setTimeout(displayComputerChoice, 10 * BASE_TIME);

            setTimeout(displayResult, (BASE_TIME * 9) + BASE_TIME);

            function winLossResult(userChoice, computerChoice) {
                if (userChoice === computerChoice) {
                    return "It's a tie! Try again";
                }
                if (userChoice === 'Rock') {
                    if (computerChoice === 'Scissors') {
                        return "You won! Rock beats scissors.";
                    } else {
                        return "You lose! Paper beats rock.";
                    }
                } else if (userChoice === 'Paper') {
                    if (computerChoice === 'Rock') {
                        return "You won! Paper beats rock.";
                    } else {
                        return "You lose! Scissors beats paper.";
                    }
                } else if (userChoice === 'Scissors') {
                    if (computerChoice === 'Paper') {
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
