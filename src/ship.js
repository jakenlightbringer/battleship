class Ship{
    constructor(name, length){
        this.name = name;
        this.length = length;
        this.hp = length;
        this.sunk = false;
    }

    hit(){
        this.hp--;
    }
    isSunk(){
        if(this.hp <= 0){
            return this.sunk = true;
        }
        else{
            return this.sunk = false;
        }
    }
}


//battleship.hit()

module.exports = Ship