document.addEventListener('DOMContentLoaded', function () {
    const h1 = document.getElementById('prompt');
    const buttons = document.querySelectorAll('button');
    console.log(buttons);
    const computerOptions = document.querySelectorAll('button');

    function disableButtons() {
        for (let i = 0; i < 3; i++) {
            buttons[i].disabled = true;
            buttons[i].style.display = "none";
        }
        h1.style.display = "none";
    }

    for (let i = 0; i < 3; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            const userChoice = button.id
            console.log('You chose: ', userChoice);
            document.getElementById('user-choice').innerHTML = userChoice.toString();

            const randomChoice = Math.floor(Math.random() * computerOptions.length);
            const computerChoice = computerOptions[randomChoice].id;
            console.log('Computer chose: ', computerChoice);
            document.getElementById('computer-choice').innerHTML = computerChoice.toString();

            disableButtons();
        });
    }
});
