class Player implements IPlay {


    public play(gameArray: GameArray): void {

        gameArray.updateGameArray();

        //הכנסת מיקום המהלך של השחקן
        let moveNumer: number;
        moveNumer = Number(prompt("pleas enter input: "));


        //בדיקה אחרונה של האם הקלט שהתקבל באמת קיים במטריצה-אם לא זה אומר שהערך נבחר כבר
        let serch: boolean = false
        

        while (serch == false) {

            let flag: boolean = false;
            while (flag == false) {
                let message: string;
                message = this.checkInput(moveNumer);
                if (message != "") {
                    alert("Error: " + message);
                    moveNumer = Number(prompt("pleas enter input: "));
                    flag = false
                }
                else {
                    flag = true;
                }
            }
            
            //במיקום שהשחקן בחר X השמת
            for (let i: number = 0; i < 3; i++) {
                for (let j: number = 0; j < gameArray.gameArray[i].length; j++) {
                    if (gameArray.gameArray[i][j] == `${moveNumer}`) {
                        gameArray.gameArray[i][j] = "x";
                        serch = true;
                        gameArray.updateGameArray();
                    }
                }
            }

            // אם אין ערך בלוח השווה לקלט מהשחקן
            if (serch == false) {
                alert("the place you chose has alredy been field")
                moveNumer = Number(prompt("pleas enter input: "));
            }
        }
        


        //בדיקה אם השחקן ניצח
        let counter: number = 0;
        for (let i: number = 0; i < gameArray.gameArray.length; i++) {
            for (let j: number = 0; j < gameArray.gameArray[i].length; j++) {
                if (gameArray.gameArray[i][j] == "x") {
                    counter++;
                }
            }
            if (counter == 3) {
                alert("you win!");
                break;
            }
            counter = 0;
        }
    }

    public checkInput(input: number) {

        //בדיקה אם הקלט הוא גדול מ9
        if (input > 9) {
            return "The number you enterd is bigger then 9";
        }

        //בדיקה אם הקלט הוא קטן מ1
        if (input < 1) {
            return "the number you enterd is below 1";
        }

        //בדיקה אם הקלט הוא מספר שלם
        if (input % 1 != 0) {
            return "you didnt enterd an integer number";
        }

        //בדיקה אם הקלט הוא מספר
        if (isNaN(input)) {
            return "you enterd a string not a number";
        }

        else {
            return "";
        }
    }
}