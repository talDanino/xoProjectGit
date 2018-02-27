class Computer implements IPlay {

    public play(gameArray: GameArray): void {

        //-----------תור המחשב
        // המחשב יבצע מספר בדיקות
        //אם הוא ינצח
        //אם בתור הבא הוא יפסיד
        //רנדומלי

        let flag: number = 0;

        gameArray.updateGameArray();

        // אם בתור הבא המחשב יכול לנצח
        let counter: number = 0;
        for (let i: number = 0; i < gameArray.gameArray.length; i++) {
            counter = 0;
            for (let j: number = 0; j < gameArray.gameArray[i].length; j++) {
                if (gameArray.gameArray[i][j] == "o") {
                    counter++;
                }
            }

            if (counter == 2) {
                for (let k: number = 0; k < gameArray.gameArray[i].length; k++) {
                    if (gameArray.gameArray[i][k] != "x" && gameArray.gameArray[i][k] != "o") {
                        for (let z: number = 0; z < 3; z++) {
                            for (let f: number = 0; f < 3; f++) {
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
        for (let i: number = 0; i < gameArray.gameArray.length; i++) {
            counter = 0;

            for (let j: number = 0; j < gameArray.gameArray[i].length; j++) {
                if (gameArray.gameArray[i][j] == "x") {
                    counter++;
                }
            }

            if (counter == 2) {
                for (let k: number = 0; k < gameArray.gameArray[i].length; k++) {
                    if (gameArray.gameArray[i][k] != "x" && gameArray.gameArray[i][k] != "o") {

                        for (let z: number = 0; z < 3; z++) {
                            for (let f: number = 0; f < 3; f++) {
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
            let randomArr: Array<string> = new Array<string>();
            let index: number = 0;
            for (let i: number = 0; i < gameArray.gameArray.length; i++) {
                for (let j: number = 0; j < gameArray.gameArray[i].length; j++) {
                    if (gameArray.gameArray[i][j] != "x" || gameArray.gameArray[i][j] != "o") {
                        randomArr[index] = gameArray.gameArray[i][j];
                        index++;
                    }
                }
            }

            let randomVal: string;
            randomVal = randomArr[Math.round(Math.random() * randomArr.length)];

            for (let i: number = 0; i < gameArray.gameArray.length; i++) {
                for (let j: number = 0; j < gameArray.gameArray[i].length; j++) {
                    if (gameArray.gameArray[i][j] == randomVal) {
                        gameArray.gameArray[i][j] = "o";
                    }
                }
            }

        }
    }
    
}