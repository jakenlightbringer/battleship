import css from "./styles.css";
import Gameboard from "./gameboard";
const playerGameboard = new Gameboard(10, 10);
const enemyGameboard = new Gameboard(10, 10);
const gridContainer = document.getElementById("grid-container");
const playerContainer = document.getElementById("player-container");
const enemyContainer = document.getElementById("enemy-container");

const randomX = Math.floor(Math.random() * 11);
console.log(randomX);
const randomY = Math.floor(Math.random() * 11);
console.log(randomY);

document.addEventListener("DOMContentLoaded", () => {
  playerGameboard.initializeGrid();
  enemyGameboard.initializeGrid(); // Initialize the enemy's grid
  createGridButtons(playerContainer, playerGameboard); // Create buttons for the player's grid
  createGridButtons(enemyContainer, enemyGameboard); // Create buttons for the enemy's grid
  playerGameboard.placeShip(0, 0, "battleship");
  enterPlayerCoords();
  enemyGameboard.placeShip(0, 0, "battleship");
  console.log("working");
});

//need create new random integers for each of the seperate ships. I wonder if this will affect the attack? -> will calling it change the number each call?

function createGridButtons(container, gameboard) {
  for (let i = 0; i < gameboard.xCord; i++) {
    for (let j = 0; j < gameboard.yCord; j++) {
      const button = document.createElement("button");
      if (container == playerContainer) {
        button.classList.add("grid-button");
      } else if (container == enemyContainer) {
        button.classList.add("enemy-button");
      }

      button.dataset.x = i;
      button.dataset.y = j;
      button.textContent = "";
      button.style.height = "50px";
      button.style.width = "50px";

      // Add other button styling...
      if (gameboard === playerGameboard) {
        button.addEventListener("click", () =>
          handleGridButtonClicked(playerGameboard, i, j),
        );
      }
      container.appendChild(button);
    }
  }
}

//get user input to palce the ships for the creation of the enemy gameboard -> make the player locations colored will most likely be easier and more doable is not needed for enemy gamebaord will use random numbers -> could create random function to have it run each time
//create player loop and call  player.enemyAttack for the random attack and have turn swithcing until all ships are sunk.
//need add AI logic to check if all suck -> maybe not AI could be wiothin gameboard? have reset feature?
function enterPlayerCoords() {
  const carrierLocationXString = prompt("Enter Carrier X Coordinates 0-10");
  const carrierLocationYString = prompt('Enter Carrier Y Coordinates 0-10');
  let carrierLocationXInt = parseInt(carrierLocationXString);
  let carrierLocationYInt = parseInt(carrierLocationYString)

  if (
    carrierLocationXInt == null ||
    carrierLocationXInt < 0 ||
    carrierLocationXInt > 10
  ) {
    carrierLocationXInt = 0;
  }
  enemyGameboard.placeShip(carrierLocationXInt, carrierLocationYInt, "carrier");
  for (let i = carrierLocationXInt; i < carrierLocationXInt+5; i++) {
    const button = document.querySelector(
      `.enemy-button[data-x="${i}"][data-y="${carrierLocationYInt}"]`,
    );
    button.style.backgroundColor = "black";
  }
}
function areAllShipsSunk(gameboard) {
  return gameboard.shipsArray.every((ship) => ship.isSunk());
}
function randomAttack() {
  let attackPosition = Math.floor(Math.random() * 11);
  return attackPosition;
}

function handleGridButtonClicked(gameboard, x, y) {
  let isPlayerTurn = true;
  let gameOver = false;

  if (gameOver) {
    return; // Prevent further actions if the game is over
  }

  const result = gameboard.receiveAttack(x, y);
  const button = document.querySelector(
    `.grid-button[data-x="${x}"][data-y="${y}"]`,
  );

  if (result == "hit") {
    button.textContent = "hit";
    button.disabled = true;
    button.style.backgroundColor = "red";
  } else if (result == "miss") {
    button.textContent = "miss";
    button.disabled = true;
  } else if (result == "sunk") {
    button.textContent = "hit";
    button.style.backgroundColor = "red";
  }

  // Check for game over conditions after each turn
  if (areAllShipsSunk(playerGameboard)) {
    alert("All your ships are sunk. You lose");
    gameOver = true;
  } else if (areAllShipsSunk(enemyGameboard)) {
    alert("You win. All enemy ships sunk!");
    gameOver = true;
  }

  if (!gameOver) {
    // Proceed to the next turn
    isPlayerTurn = false;

    if (!isPlayerTurn) {
      // It's the enemy's turn
      const enemyX = randomAttack();
      const enemyY = randomAttack();
      const enemyResult = playerGameboard.receiveAttack(enemyX, enemyY);
      const enemyButton = document.querySelector(
        `.enemy-button[data-x="${enemyX}"][data-y="${enemyY}"]`,
      );

      if (enemyResult == "hit") {
        enemyButton.textContent = "hit";
        enemyButton.disabled = true;
        enemyButton.style.backgroundColor = "";
        enemyButton.style.backgroundColor = "red";
      } else if (enemyResult == "miss") {
        enemyButton.textContent = "miss";
        enemyButton.disabled = true;
      } else if (enemyResult == "sunk") {
        enemyButton.textContent = "hit";
        enemyButton.style.backgroundColor = "red";
      }

      // Check for game over conditions after the enemy's turn
      if (areAllShipsSunk(playerGameboard)) {
        alert("All your ships are sunk. You lose");
        gameOver = true;
      } else if (areAllShipsSunk(enemyGameboard)) {
        alert("You win. All enemy ships sunk!");
        gameOver = true;
      }

      // Switch back to the player's turn
      isPlayerTurn = true;
    }
  }
}
