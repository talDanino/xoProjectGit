
/////////////////////// Game Array ///////////////////////
let gameArr: GameArray = new GameArray();
gameArr.initGameArr();
gameArr.updateGameArray();
gameArr.printGameBoard();


//////////////////// click button ///////////////////////////

let bntElement: string = '<button onclick="nextTurn()"> Your turn </button>';



function nextTurn(): void {

    //////////////////////// player ///////////////////////
    let player: Player = new Player();
    player.play(gameArr);
    document.body.innerHTML = "";
    let computer: Computer = new Computer();
    computer.play(gameArr);
    gameArr.printGameBoard();
    document.write("<br/>" + bntElement);

}



