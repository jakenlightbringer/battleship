const Gameboard = require('./src/gameboard'); // Adjust the path to match your project structure
const Ship = require('./src/ship'); // Import your Ship class or module

describe('Gameboard', () => {
  it('should add ships to the enemy gameboard', () => {
    const enemyGameboard = new Gameboard(10, 10);
    enemyGameboard.placeShip(3, 2, 'battleship');
    enemyGameboard.placeShip(0, 0, 'carrier');

    // You can add more assertions to check if the ships are correctly placed
    expect(enemyGameboard.grid[3][2]).toBeInstanceOf(Ship);
    expect(enemyGameboard.grid[0][0]).toBeInstanceOf(Ship);
  });
});
