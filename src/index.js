
import Gameboard from "./gameboard";
const gameboard = new Gameboard(10, 10);
const gridContainer = document.getElementById('grid-container');

document.addEventListener('DOMContentLoaded', ()=>{
    gameboard.initializeGrid();
    console.log('working')
})
