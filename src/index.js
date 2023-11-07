
import css from "./styles.css"
import Gameboard from "./gameboard";
const gameboard = new Gameboard(10, 10);
const gridContainer = document.getElementById('grid-container');
const playerContainer = document.getElementById('player-container')
const enemyContainer = document.getElementById('enemy-container')

//When creating ships, need to pass in whcih board the ship will be apart of. need firue out how to defferentiate between the two ships -> make player ships colored. 



document.addEventListener('DOMContentLoaded', ()=>{
     gameboard.initializeGrid();
    createGridButtons();
    createEnemyGrid();
    gameboard.placeShip(3, 2, 'battleship')
    gameboard.placeShip(0, 0, 'carrier')
    console.log('working')
})

function createGridButtons(){
    for(let i = 0; i < gameboard.xCord; i++){
        for(let j = 0; j < gameboard.yCord; j++){
            const button = document.createElement('button');
            button.classList.add('grid-button');
            button.dataset.x = i;
            button.dataset.y = j;
            button.textContent = "";
            button.style.height = '50px'
            button.style.width = '50px'
            //need style the buttons and figure out how to place the ships at random locations
            button.addEventListener('click', ()=> handleGridButtonClicked(i, j));
            playerContainer.appendChild(button);
            gridContainer.appendChild(playerContainer)
        }
    }
}
function createEnemyGrid(){
    for(let i = 0; i < gameboard.xCord; i++){
        for(let j = 0; j < gameboard.yCord; j++){
            const button = document.createElement('button');
            button.classList.add('grid-button');
            button.dataset.x = i;
            button.dataset.y = j;
            button.textContent = "";
            button.style.height = '50px'
            button.style.width = '50px'
            //need style the buttons and figure out how to place the ships at random locations
            enemyContainer.appendChild(button);
            gridContainer.appendChild(enemyContainer);
        }
    }
}





function handleGridButtonClicked(x, y){
    const result = gameboard.receiveAttack(x, y);
    const button = document.querySelector(`.grid-button[data-x="${x}"][data-y="${y}"]`);

    if(result == 'hit'){
        button.textContent = 'hit'
        button.disabled = true
        button.style.backgroundColor = 'red'
    }
    else if(result == 'miss'){
        button.textContent = 'miss'
        button.disabled = true
    }
    else if(result == 'sunk'){
        button.textContent = 'hit'
        button.style.backgroundColor = 'red'
        button.disabled = true
    }


}