const Ship = require("./ship");

class Gameboard {
  constructor(xCord, yCord) {
    this.xCord = xCord; //used for Grid creation of the X
    this.yCord = yCord; // used for Grid creation of the Y
    const battleship = new Ship("battleship", 4);
    const carrier = new Ship("carrier", 5);
    const destoryer = new Ship("destroyer", 3);
    const submarine = new Ship("submarine", 3);
    const patrolboat = new Ship("patrol boat", 2);
    this.shipsArray = [carrier, battleship, destoryer, submarine, patrolboat];
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

  placeShip(x, y, shipType) {
    if (x < 0 || x >= this.xCord || y < 0 || y >= this.yCord) {
      throw new Error("Invalid coordinates for ship placement.");
    }

    const selectedShip = this.shipsArray.find((ship) => ship.name === shipType);
    if (!selectedShip) {
      throw new Error("Invalid Ship Type");
    }

    for (let i = 0; i < selectedShip.length; i++) {
      if (x + i >= this.xCord || this.grid[x + i][y]) {
        throw new Error("Invalid coordinates for ship placement.");
      }
    }

    for (let i = 0; i < selectedShip.length; i++) {
      this.grid[x + i][y] = selectedShip;
    }
  }

  receiveAttack(x, y) {
    if (x < 0 || x > this.xCord || y < 0 || y > this.yCord) {
      throw new Error("Invalid coordinate location go again");
    }
    const attackLocation = this.grid[x][y];
    if (attackLocation == null) {
      this.missedAttacks.push({ x, y });
      return "miss";
    } else if (attackLocation instanceof Ship) {
      attackLocation.hit();
      if (attackLocation.isSunk() == true) {
        return "sunk";
      } else return "hit";
    } //need to implement if all instances of ship are sunk? May need a forEach?
    const allSunk = shipsArray.every((ship) => ship.isSunk());
    if (allSunk) {
      return "all ships sunk";
    }
  }
}
const gameboard = new Gameboard(10, 10);
module.exports = Gameboard;
