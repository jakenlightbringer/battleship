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
    playerGameboard.placeShip(0, 0, 'battleship');
    enterPlayerCoords();
    enemyGameboard.placeShip(0,0, 'battleship')
    console.log('working');
});

//need create new random integers for each of the seperate ships. I wonder if this will affect the attack? -> will calling it change the number each call?


function createGridButtons(container, gameboard) {
    for (let i = 0; i < gameboard.xCord; i++) {
        for (let j = 0; j < gameboard.yCord; j++) {
            const button = document.createElement('button');
            if(container == playerContainer){
                button.classList.add('grid-button');
            }
            else if(container == enemyContainer){
                button.classList.add('enemy-button')
            }
            
            
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

//get user input to palce the ships for the creation of the enemy gameboard -> make the player locations colored will most likely be easier and more doable is not needed for enemy gamebaord will use random numbers -> could create random function to have it run each time
//create player loop and call  player.enemyAttack for the random attack and have turn swithcing until all ships are sunk.
//need add AI logic to check if all suck -> maybe not AI could be wiothin gameboard? have reset feature? 
function enterPlayerCoords() {
    const carrierLocationXString = prompt("Enter Carrier X Coordinates 0-10")
    let carrierLocationInt = parseInt(carrierLocationXString)

        if(carrierLocationInt == null || carrierLocationInt < 0 || carrierLocationInt > 10){
            carrierLocationInt = 0
        }
        enemyGameboard.placeShip(carrierLocationInt, 2, 'carrier')
        for (let i = carrierLocationInt; i < carrierLocationInt + 5; i++) {
            const button = document.querySelector(`.enemy-button[data-x="${i}"][data-y="2"]`);
            button.style.backgroundColor = 'black';
        }
}
function areAllShipsSunk(gameboard){
    return gameboard.shipsArray.every(ship => ship.isSunk());
}
function randomAttack(){
    let attackPosition = Math.floor(Math.random() * 11);
    return attackPosition
}


function handleGridButtonClicked(gameboard, x, y) {
   let isPlayerturn = true;
   let gameOver = false
    const result = gameboard.receiveAttack(x, y);
    const button = document.querySelector(`.grid-button[data-x="${x}"][data-y="${y}"]`);

    while(gameOver === false){
        if(areAllShipsSunk(playerGameboard)){
            alert("All your ships are sunk. You lose")
            gameOver = true
        }
        else if(areAllShipsSunk(enemyGameboard)){
            alert('You win. All enemy ships sunk!')
            gameOver = true
        }
        else if(isPlayerturn){
            if (result == 'hit') {
                button.textContent = 'hit';
                button.disabled = true;
                button.style.backgroundColor = 'red';
                isPlayerturn = false
            } else if (result == 'miss') {
                button.textContent = 'miss';
                button.disabled = true;
                isPlayerturn = false
            } else if (result == 'sunk') {
                button.textContent = 'hit';
                button.style.backgroundColor = 'red';
                button.disabled = true;
                isPlayerturn = false
            }
            else{
               const enemyX = randomAttack()
               const enemyY = randomAttack()

               let enemyResult = enemyGameboard.receiveAttack(enemyX, enemyY)
               const enemyButton = document.querySelector(`.enemy-button[data-x="${enemyX}"][data-y="${enemyY}"]`);


               if (enemyResult == 'hit') {
                enemyButton.textContent = 'hit';
                enemyButton.disabled = true;
                enemyButton.style.backgroundColor = 'red';
                isPlayerturn = true
            } else if (enemyResult == 'miss') {
                enemyButton.textContent = 'miss';
                enemyButton.disabled = true;
                isPlayerturn = true
            } else if (enemyResult == 'sunk') {
                enemyButton.textContent = 'hit';
                enemyButton.style.backgroundColor = 'red';
                enemyButton.disabled = true;
                isPlayerturn = true
            }



            }
        
        }
    }
    
}





  
