
Ship Class
    Ship Object
        -> Have length == HP 
        include if sunk or not
        Carrier - 5 HP
        BattleShip - 4HP
        Destoryer - 3 HP
        Sub - 3 HP
        Patrol Boat - 2 HP
    hit function
        check if ship is hit
    isSunk function
        calculates whether ship is sunk based on length and num of hits
GameBoard Class
    place ships at specific at specific coordinates by calling ship constructor
        in constructor needs ship name/location(coordinates?) -> may need x and y coordinates
    recieveAttack function that takes pair of coordinates
        Can determine if ship is hit or not and records if it is hit
        display misses/hits
    Player Class
        Game meant to be played vs AI 
        take turns attacking gameboard
    Main Game Loop DOM manipulation
        -> Now create user interface (buttons), game boards etc. 
    Game Loop 
        new game
            Players//Gameboard//Populatie gameboard with PREDETERMINED coordinates -> implement system to place ships later
        Render HTML using gameboard facotry
        attacks -> let user click gameboard -> make the board button 
            Side by side view of both the active gameboard and the player own game board? maybe show active ship location? 
        Should not need more functions/objects all is provided
            Check if gmaeloop is done and present win.loss screeen 

        Implement drag/drop or typed coordinates
        AI improvement by having it hit adjacent spots if hit 
        2 player option and pass device screen so they cant see boards


Need to do -> 
Get user input for placing ships need to place 5 ships -> could create array after each **successful** input ensure the user has correct coordinates -> once complete remove the ship from array
    Once all ships have been removed from the array -> can progress to game start -> see if can add coloring so player knows where ship is
For player v enemy logic add a while true swither to swap between the two gamemodes -> swap between player and enemy turns

