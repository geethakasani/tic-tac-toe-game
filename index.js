const boxes = document.querySelectorAll('.box');
        const resultContainer = document.getElementById('result');
        const message = document.getElementById('message');
        let currentPlayer = 'X';
boxes.forEach(box => {
    box.textContent = ' '; 
    box.style.color="#FAB201"
});       
        function checkWin() {
            for (let i = 1; i <= 9; i += 3) {
                if (boxes[i - 1].textContent === currentPlayer && boxes[i].textContent === currentPlayer && boxes[i + 1].textContent === currentPlayer) {
                    return true;
                }
            }

            for (let i = 1; i <= 3; i++) {
                if (boxes[i - 1].textContent === currentPlayer && boxes[i + 2].textContent === currentPlayer && boxes[i + 4].textContent === currentPlayer) {
                    return true;
                }
            }

            if (boxes[0].textContent === currentPlayer && boxes[4].textContent === currentPlayer && boxes[8].textContent === currentPlayer) {
                return true;
            }

            if (boxes[2].textContent === currentPlayer && boxes[4].textContent === currentPlayer && boxes[6].textContent === currentPlayer) {
                return true;
            }

            return false;
        }

        function changePlayer() {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }

        function checkResult() {
            if (checkWin()) {
                message.textContent = `Player ${currentPlayer} wins!`;
                displayResult();
            } else if ([...boxes].every(box => box.textContent !== '')) {
                message.textContent = 'It\'s a draw!';
                displayResult();
            } else {
                changePlayer();
            }
        }

        function displayResult() {
            resultContainer.style.visibility = 'visible';
            resultContainer.style.opacity ='1';
        }

        function resetGame() {
            for (let box of boxes) {
                box.textContent = '';
            }
            resultContainer.style.visibility = 'hidden';
            resultContainer.style.opacity = '0';
            currentPlayer = 'X';
        }

        for (let box of boxes) {
            box.addEventListener('click', () => {
                if (box.textContent === '') {
                    box.textContent = currentPlayer;
                    checkResult();
                }
            });
        }

        document.getElementById('button').addEventListener('click', resetGame);

        resetGame();