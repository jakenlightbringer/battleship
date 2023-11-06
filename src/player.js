import Gameboard from "./gameboard";

function player(){
    let board = Gameboard;
    let playerTurn = true;
    let enemyTurn = false;

    let attack  = (player, pos1, pos2) =>{
        return player.board.recieveAttack(pos1, pos2)
    }
    function enemyAttack(){
        xAttackPos = Math.floor(Math.random() * 11);
        yAttackPos = Math.floor(Math.random() * 11);
        return xAttackPos, yAttackPos
    }

}