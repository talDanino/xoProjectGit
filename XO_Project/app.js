/////////////////////// Game Array ///////////////////////
var gameArr = new GameArray();
gameArr.initGameArr();
gameArr.updateGameArray();
gameArr.printGameBoard();
//////////////////// click button ///////////////////////////
var bntElement = '<button onclick="nextTurn()"> Your turn </button>';
function nextTurn() {
    //////////////////////// player ///////////////////////
    var player = new Player();
    player.play(gameArr);
    document.body.innerHTML = "";
    var computer = new Computer();
    computer.play(gameArr);
    gameArr.printGameBoard();
    document.write("<br/>" + bntElement);
}
//# sourceMappingURL=app.js.map