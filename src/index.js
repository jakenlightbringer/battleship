import css from "./styles.css"
import Gameboard from "./gameboard";
const playerGameboard = new Gameboard(10, 10);
const enemyGameboard = new Gameboard(10, 10);
const gridContainer = document.getElementById('grid-container');
const playerContainer = document.getElementById('player-container');
const enemyContainer = document.getElementById('enemy-container');

const randomX = Math.floor(Math.random() * 11);
console.log(randomX)
const randomY = Math.floor(Math.random() * 11);
console.log(randomY)

document.addEventListener('DOMContentLoaded', () => {
    playerGameboard.initializeGrid();
    enemyGameboard.initializeGrid(); // Initialize the enemy's grid
    createGridButtons(playerContainer, playerGameboard); // Create buttons for the player's grid
    createGridButtons(enemyContainer, enemyGameboard); // Create buttons for the enemy's grid
    playerGameboard.placeShip(randomX, randomY, 'battleship');
    playerGameboard.placeShip(randomX, randomY, 'carrier');
    enemyGameboard.placeShip(0,0, 'battleship')
    console.log('working');
});

//need create new random integers for each of the seperate ships. I wonder if this will affect the attack? -> will calling it change the number each call?


function createGridButtons(container, gameboard) {
    for (let i = 0; i < gameboard.xCord; i++) {
        for (let j = 0; j < gameboard.yCord; j++) {
            const button = document.createElement('button');
            button.classList.add('grid-button');
            button.dataset.x = i;
            button.dataset.y = j;
            button.textContent = "";
            button.style.height = '50px';
            button.style.width = '50px';
            // Add other button styling...
            if (gameboard === playerGameboard) {
                button.addEventListener('click', () => handleGridButtonClicked(playerGameboard, i, j));
            }
            container.appendChild(button);
        }
    }
}

function handleGridButtonClicked(gameboard, x, y) {
   // if (gameboard !== playerGameboard) {
        // Do not allow clicks on the enemy's gameboard
       // return;
    //}

    // Handle grid button clicks for the player's gameboard
    const result = gameboard.receiveAttack(x, y);
    const button = document.querySelector(`.grid-button[data-x="${x}"][data-y="${y}"]`);

    if (result == 'hit') {
        button.textContent = 'hit';
        button.disabled = true;
        button.style.backgroundColor = 'red';
    } else if (result == 'miss') {
        button.textContent = 'miss';
        button.disabled = true;
    } else if (result == 'sunk') {
        button.textContent = 'hit';
        button.style.backgroundColor = 'red';
        button.disabled = true;
    }
}
