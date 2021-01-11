console.log("Vamos a jugar!");

let questionsDataBase = [
    {
        question: "What animal is on México's flag?",
        optA: "Eagle",
        optB: "Cow",
        optC: "Dog",
        correct: "A"
    },
    {
        question: "When does México celebrates Independence Day?",
        optA: "May 5th",
        optB: "September 16th",
        optC: "November 20th",
        correct: "B"
    },
    {
        question: "What is México's official name (in English)",
        optA: "Republic of México",
        optB: "México",
        optC: "Mexican United States",
        correct: "C"
    },
    {
        question: "Which of the following was invented by a Mexican?",
        optA: "Washing machine",
        optB: "Contraceptive Pill",
        optC: "Adhesive tape",
        correct: "B"
    },
    {
        question: "When were the Olympic games celebrated in México?",
        optA: "1976",
        optB: "1988",
        optC: "1968",
        correct: "C"
    },
    {
        question: "Which of the following is one of the main products México exports?",
        optA: "Tomato",
        optB: "Chile",
        optC: "Strawberry",
        correct: "A"
    },
    {
        question: "What was México's name prior to its independence?",
        optA: "México",
        optB: "New Spain",
        optC: "Tenochtitlán",
        correct: "B"
    },
    {
        question: "What is México's estimated population by 2020?",
        optA: "130 million",
        optB: "100 million",
        optC: "115 million",
        correct: "A"
    },
    {
        question: "Which is the only state where Tequila is produced?",
        optA: "Chihuahua",
        optB: "Tlaxcala",
        optC: "Jalisco",
        correct: "C"
    },
    {
        question: "What is México's official name (in English)",
        optA: "Republic of México",
        optB: "México",
        optC: "Mexican United States",
        correct: "C"
    }
]

document.querySelector("#form").style.visibility = "hidden";
document.querySelector("#next").style.visibility = "hidden";
document.querySelector("#exit").style.visibility = "hidden";
document.querySelector("#playAgain").style.visibility = "hidden";
document.querySelector("#score").style.visibility = "hidden";
document.querySelector("#correctAnswer").style.display = "none";

//BOTÓN START
const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", startGame);

//BOTÓN SUBMIT
const submitBtn = document.querySelector("#submitAnsr");
submitBtn.addEventListener("click", checkAnswer);
submitBtn.addEventListener("enter", checkEnter);
//no funciona con ENTER :(

//BOTÓN EXIT
const exitBtn = document.querySelector("#exit");
exitBtn.addEventListener("click", exitGame);

//BOTÓN NEXT
const nextBtn = document.querySelector("#next");
nextBtn.addEventListener("click", nextQuestion);

//BOTÓN PLAY AGAIN
const playAgn = document.querySelector("#playAgain");
playAgn.addEventListener("click", playAgain);

function checkEnter(event) {
    console.log(event);
    if (event.keyCode === 13) {
        checkAnswer(event)
    }
}

let yourScore = 0;
let ignorance = 0;
let i=0;
let finalScore = 0;

function startGame() {
    document.querySelector("#question").innerText = questionsDataBase[i].question;
    document.querySelector("#question").style.visibility= "initial";
    document.querySelector("#answer1").innerText = "A. "+ questionsDataBase[i].optA;
    document.querySelector("#answer1").style.visibility= "initial";
    document.querySelector("#answer2").innerText = "B. "+ questionsDataBase[i].optB;
    document.querySelector("#answer2").style.visibility= "initial";
    document.querySelector("#answer3").innerText = "C. "+ questionsDataBase[i].optC;
    document.querySelector("#answer3").style.visibility= "initial";
    document.querySelector("#form").style.visibility = "initial";
    document.querySelector("#instructions").style.display = "none";
    document.querySelector("#subtitle").style.display = "none";
    document.querySelector("#exit").style.visibility = "initial";
    console.log("i= "+i);
}

function checkAnswer(event) {
    event.preventDefault();
    const answerInput = document.querySelector("#yourAnswer").value;
    const capAnswerInput = answerInput.toUpperCase();
    console.log(capAnswerInput);
    if (capAnswerInput !== "A" && capAnswerInput !== "B" && capAnswerInput !== "C") {
        document.querySelector("#responseMsg").style.visibility = "initial"
        document.querySelector("#responseMsg").innerText = capAnswerInput + " is not a valid option";
        document.querySelector("#yourAnswer").value = "";
    } else {
    document.querySelector("#next").style.visibility = "initial";
    document.querySelector("#responseMsg").innerText = "";
    document.querySelector("#yourAnswer").value = "";
    if (capAnswerInput === questionsDataBase[i].correct) {
        yourScore += 1;
        console.log("yourScore= "+yourScore);
        document.querySelector("#responseMsg").style.visibility = "initial"
        document.querySelector("#responseMsg").innerText = "That is correct!";
        document.querySelector("#form").style.visibility = "hidden";
    } else {
        ignorance += 1;
        console.log(ignorance);
        document.querySelector("#responseMsg").style.visibility = "initial"
        document.querySelector("#responseMsg").innerText = "That is incorrect!";
        document.querySelector("#correctAnswer").style.display = "initial"
        document.querySelector("#correctAnswer").innerText = "The correct answer is " + questionsDataBase[i].correct;
        document.querySelector("#form").style.visibility = "hidden";
        } 
    }
    document.querySelector("#score").style.visibility = "initial";
    document.querySelector("#yourScore").value = yourScore;
    document.querySelector("#ignorance").value = ignorance;
    finalScore = yourScore - ignorance;
    return finalScore;
}

function nextQuestion() {
    i ++;
    if (i < questionsDataBase.length) {
        document.querySelector("#next").style.visibility = "hidden";
        document.querySelector("#responseMsg").style.visibility = "hidden";
        document.querySelector("#correctAnswer").style.display = "none";
        startGame();
    } else {
        document.querySelector("#next").style.visibility = "hidden";
        document.querySelector("#responseMsg").style.visibility = "hidden";
        console.log("GAME OVER");
        exitGame();
        //MOSTRAR REGISTRO DEL SCORE
    }
}

function exitGame() {
    document.querySelector("#form").style.visibility = "hidden";
    document.querySelector("#next").style.visibility = "hidden";
    document.querySelector("#exit").style.visibility = "hidden";
    document.querySelector("#responseMsg").style.visibility = "hidden";
    document.querySelector("#question").style.visibility = "hidden";
    document.querySelector("#answer1").style.visibility = "hidden";
    document.querySelector("#answer2").style.visibility = "hidden";
    document.querySelector("#answer3").style.visibility = "hidden";
    document.querySelector("h1").innerText = "THANK YOU FOR PLAYING";
    document.querySelector("#subtitle").style.display = "initial";
    if (finalScore > 0) {
        document.querySelector("#subtitle").innerText = "You won by " + finalScore+ " points and beat the ignorance!";
    } else if (finalScore < 0) {
        document.querySelector("#subtitle").innerText = "The ignorance beat you by " + (-1 * finalScore) + " points!";
    } else {
        document.querySelector("#subtitle").innerText = "It's a tie!";
    }
    document.querySelector("#playAgain").style.visibility = "initial";
    document.querySelector("#score").style.visibility = "hidden";
    console.log(finalScore);
}

function playAgain() {
    location.reload();
    /*document.querySelector("h1").innerText = "How much do you know about México?";
    document.querySelector("#form").style.visibility = "hidden";
    document.querySelector("#instructions").style.display = "initial";
    document.querySelector("#start").style.display = "initial";
    document.querySelector("#subtitle").style.display = "initial";
    document.querySelector("#exit").style.visibility = "hidden";
    document.querySelector("#playAgain").style.visibility = "hidden";
    document.querySelector("#score").style.visibility = "hidden";
    i=0;*/
}

console.log(questionsDataBase.length);