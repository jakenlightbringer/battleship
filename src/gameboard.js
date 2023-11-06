const Ship = require('./ship');

class Gameboard {
  constructor(xCord, yCord) {
    this.xCord = xCord; //used for Grid creation of the X 
    this.yCord = yCord; // used for Grid creation of the Y 
    this.battleship = new Ship('Battleship', 5);
    this.grid = []; 
    this.initializeGrid();
    this.missedAttacks = [];
  }

  initializeGrid() {
    for (let i = 0; i < this.xCord; i++) {
      this.grid[i] = [];
      for (let j = 0; j < this.yCord; j++) {
        this.grid[i][j] = null;
      }
    }
  }

  placeShip(x, y) {
    if (x < 0 || x >= this.xCord || y < 0 || y >= this.yCord) {
      throw new Error('Invalid coordinates for ship placement.');
    }

    
    for (let i = 0; i < this.battleship.length; i++) {
      if (x + i >= this.xCord || this.grid[x + i][y]) {
        throw new Error('Invalid coordinates for ship placement.');
      }
    }

    
    for (let i = 0; i < this.battleship.length; i++) {
      this.grid[x + i][y] = this.battleship;
    }
  }

  receiveAttack(x, y) {
    if(x < 0 || x > this.xCord || y < 0 || y > this.yCord){
        throw new Error('Invalid coordinate location go again')
    }
    const attackLocation = this.grid[x][y]
    if(attackLocation == null){
        this.missedAttacks.push({x, y})
        return 'miss'
    }
    else if(attackLocation instanceof Ship){
        attackLocation.hit()
        return attackLocation.isSunk()
    }//need to implement if all instances of ship are sunk? May need a forEach? 
  }
}
const gameboard = new Gameboard(20, 20)
module.exports = Gameboard;
