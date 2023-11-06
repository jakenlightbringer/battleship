const Gameboard = require('./src/gameboard');
const Ship = require('./src/ship');

describe('Gameboard', () => {
  it('Should place battleship on gameboard', () => {
    const gameboard = new Gameboard(20, 20);
    gameboard.placeShip(3, 4); // Place the battleship at (3, 4)

    // Check that the battleship property is an instance of Ship
    expect(gameboard.battleship).toBeInstanceOf(Ship);
    // Check that the battleship has the correct name and length
    expect(gameboard.battleship.name).toBe('Battleship');
    expect(gameboard.battleship.length).toBe(5);

    // Check that the grid reflects the placement of the battleship
    // You may need to implement a method to inspect the grid's state
    // and determine if the battleship is correctly placed on it.
    // This would depend on your specific implementation.
  });
});
