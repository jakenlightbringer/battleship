const Ship = require('./src/ship')

describe('Ship', () => {
    it('should initialize with the correct name, length, and HP', () => {
      const battleship = new Ship('Battleship', 5);
      expect(battleship.name).toBe('Battleship');
      expect(battleship.length).toBe(5);
      expect(battleship.hp).toBe(5);
    });
  
    it('should decrease HP when hit', () => {
      const battleship = new Ship('Battleship', 5);
      battleship.hit();
      expect(battleship.hp).toBe(4);
    });
  
    it('should return true for isSunk when HP is zero or less', () => {
      const battleship = new Ship('Battleship', 5);
      battleship.hp = 0; // Simulate a sunk ship
      expect(battleship.isSunk()).toBe(true);
    });
  
    it('should return false for isSunk when HP is greater than zero', () => {
      const battleship = new Ship('Battleship', 5);
      battleship.hp = 3; // Simulate a ship with HP remaining
      expect(battleship.isSunk()).toBe(false);
    });
  });