var GameArray = /** @class */ (function () {
    function GameArray() {
        this.gameArray = new Array(8);
        for (var i = 0; i < this.gameArray.length; i++) {
            this.gameArray[i] = new Array(3);
        }
    }
    ////////////////////////// function section ///////////////////////////
    GameArray.prototype.initGameArr = function () {
        this.gameArray[0][0] = "1";
        this.gameArray[0][1] = "2";
        this.gameArray[0][2] = "3";
        this.gameArray[1][0] = "4";
        this.gameArray[1][1] = "5";
        this.gameArray[1][2] = "6";
        this.gameArray[2][0] = "7";
        this.gameArray[2][1] = "8";
        this.gameArray[2][2] = "9";
    };
    GameArray.prototype.updateGameArray = function () {
        this.gameArray[3][0] = this.gameArray[0][0];
        this.gameArray[3][1] = this.gameArray[1][0];
        this.gameArray[3][2] = this.gameArray[2][0];
        this.gameArray[4][0] = this.gameArray[0][1];
        this.gameArray[4][1] = this.gameArray[1][1];
        this.gameArray[4][2] = this.gameArray[2][1];
        this.gameArray[5][0] = this.gameArray[0][2];
        this.gameArray[5][1] = this.gameArray[1][2];
        this.gameArray[5][2] = this.gameArray[2][2];
        this.gameArray[6][0] = this.gameArray[0][0];
        this.gameArray[6][1] = this.gameArray[1][1];
        this.gameArray[6][2] = this.gameArray[2][2];
        this.gameArray[7][0] = this.gameArray[0][2];
        this.gameArray[7][1] = this.gameArray[1][1];
        this.gameArray[7][2] = this.gameArray[2][0];
    };
    //הדפסה של ה3 תאים הראשונים מהמטריצה
    GameArray.prototype.printGameBoard = function () {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < this.gameArray[i].length; j++) {
                document.write(this.gameArray[i][j] + "&nbsp" + "|" + "&nbsp");
            }
            document.write("<br/>----------<br/>");
        }
    };
    return GameArray;
}());
//# sourceMappingURL=gameArray.js.map