const Gameboard = require('./src/gameboard'); 

const Ship = require('./src/ship');

describe('Gameboard', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard(10, 10); // Create a new gameboard instance before each test
  });

  describe('placeShip', () => {
    it('should place a ship on the grid', () => {
      const x = 2
      const y = 3
      gameboard.placeShip(x, y, 'carrier')

      expect(gameboard.grid[x][y]).toBe(gameboard.battleship)
    });

    it('should throw an error for invalid coordinates', () => {
      const x = -1
      const y = 11
      
      const placeShipWithInvalidCoordinates = () =>{
        gameboard.receiveAttack(x, y, 'battleship')
      };

      expect(placeShipWithInvalidCoordinates).toThrow("Invalid coordinates for ship placement.")
    });
  });

  describe('receiveAttack', () => {
    it('should handle a hit', () => {
      const x = 2
      const y = 3

      gameboard.placeShip(x, y, 'battleship');

      const result = gameboard.receiveAttack(x, y);

      expect(result).toBe('hit')
      
    });

    it('should handle a miss', () => {
      const attackX = 3
      const attackY = 1

      const x = 5
      const y = 5

      gameboard.placeShip(x, y, 'battleship')

      const result = gameboard.receiveAttack(attackX, attackY)
      expect(result).toBe('miss')
    });

    it('should handle a hit and sunk ship', () => {
      // Write a test case to ensure that receiveAttack handles a hit and a sunk ship correctly
      const x = 2
      const y = 3

      gameboard.placeShip(x, y, 'battleship');
      gameboard.receiveAttack(x, y); // Hit 1
      gameboard.receiveAttack(x, y); // Hit 2
      gameboard.receiveAttack(x, y); // Hit 3
      gameboard.receiveAttack(x, y); // Hit 4
      const result = gameboard.receiveAttack(x, y); // Hit 5 and the ship sinks

  // Check if the result correctly handles a hit and a sunk ship
  expect(result).toBe('sunk');
      
    });

    it('should handle all ships being sunk', () => {
      gameboard.placeShip(2, 3, 'battleship');
      gameboard.placeShip(4, 5, 'carrier');
      gameboard.placeShip(6, 7, 'destroyer');
      gameboard.placeShip(8, 9, 'submarine');
      gameboard.placeShip(1, 1, 'patrol boat');

      for(let i = 0; i < 5; i++){
        gameboard.receiveAttack(4, 5)
      }
      for(let i = 0; i < 4; i++){
        gameboard.receiveAttack(2, 3)
      }
      for(let i = 0; i < 3; i++){
        gameboard.receiveAttack(6, 7)
        gameboard.receiveAttack(8, 9)
      }
      for(let i = 0; i < 2; i++){
         gameboard.receiveAttack(1, 1) 
      }

      const result = gameboard.receiveAttack(2, 3)
      expect(result).toBe('all ships sunk');
     


    });

    it('should throw an error for invalid coordinates', () => {
      // Write a test case to ensure that receiveAttack throws an error for invalid coordinates
      // You can use expect().toThrow to check if the method throws an error
    });
  });
});