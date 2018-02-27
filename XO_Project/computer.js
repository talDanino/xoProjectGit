var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.prototype.play = function (gameArray) {
        //-----------תור המחשב
        // המחשב יבצע מספר בדיקות
        //אם הוא ינצח
        //אם בתור הבא הוא יפסיד
        //רנדומלי
        var flag = 0;
        gameArray.updateGameArray();
        // אם בתור הבא המחשב יכול לנצח
        var counter = 0;
        for (var i = 0; i < gameArray.gameArray.length; i++) {
            counter = 0;
            for (var j = 0; j < gameArray.gameArray[i].length; j++) {
                if (gameArray.gameArray[i][j] == "o") {
                    counter++;
                }
            }
            if (counter == 2) {
                for (var k = 0; k < gameArray.gameArray[i].length; k++) {
                    if (gameArray.gameArray[i][k] != "x" && gameArray.gameArray[i][k] != "o") {
                        for (var z = 0; z < 3; z++) {
                            for (var f = 0; f < 3; f++) {
                                if (gameArray.gameArray[z][f] == gameArray.gameArray[i][k]) {
                                    gameArray.gameArray[z][f] = "o";
                                    flag = 1;
                                }
                            }
                        }
                        gameArray.updateGameArray();
                        alert("The computer is win! ");
                        document.body.innerHTML = "";
                        break;
                    }
                }
            }
        }
        //אם בתור הבא המחשב עלול להפסיד
        for (var i = 0; i < gameArray.gameArray.length; i++) {
            counter = 0;
            for (var j = 0; j < gameArray.gameArray[i].length; j++) {
                if (gameArray.gameArray[i][j] == "x") {
                    counter++;
                }
            }
            if (counter == 2) {
                for (var k = 0; k < gameArray.gameArray[i].length; k++) {
                    if (gameArray.gameArray[i][k] != "x" && gameArray.gameArray[i][k] != "o") {
                        for (var z = 0; z < 3; z++) {
                            for (var f = 0; f < 3; f++) {
                                if (gameArray.gameArray[z][f] == gameArray.gameArray[i][k]) {
                                    gameArray.gameArray[z][f] = "o";
                                    gameArray.updateGameArray();
                                    flag = 1;
                                }
                            }
                        }
                    }
                }
            }
        }
        //רנדומלי
        if (flag == 0) {
            var randomArr = new Array();
            var index = 0;
            for (var i = 0; i < gameArray.gameArray.length; i++) {
                for (var j = 0; j < gameArray.gameArray[i].length; j++) {
                    if (gameArray.gameArray[i][j] != "x" || gameArray.gameArray[i][j] != "o") {
                        randomArr[index] = gameArray.gameArray[i][j];
                        index++;
                    }
                }
            }
            var randomVal = void 0;
            randomVal = randomArr[Math.round(Math.random() * randomArr.length)];
            for (var i = 0; i < gameArray.gameArray.length; i++) {
                for (var j = 0; j < gameArray.gameArray[i].length; j++) {
                    if (gameArray.gameArray[i][j] == randomVal) {
                        gameArray.gameArray[i][j] = "o";
                    }
                }
            }
        }
    };
    return Computer;
}());
//# sourceMappingURL=computer.js.map