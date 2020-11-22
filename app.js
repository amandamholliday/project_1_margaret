console.log("yes I'm connected!");

// let currentCountdown = false;

//////// dom nodes ////////////
const travel = document.querySelector(".travel");
const beginButton = document.querySelector(".start");
const modal = document.querySelector(".modal");
const firstButton = document.getElementById('first');
const secondButton = document.getElementById('second');
const thirdButton = document.getElementById('third');
const currentStatsContainer = document.querySelector('.stats');


/////////////////////////////////// global vars /////////////////////////////////////////////


const questions = [
    {
       image: "images/france1.jpg",
        correctAnswer: "France",
        answer: ["France", "Switzerland", "Belgium"]
    },
    {
        image: "images/utah02.jpg",
        correctAnswer: "Utah",
        answer: ["Colorado", "Utah", "Arizona"]
    },
    {
        image: "images/tunisia03.jpg",
        correctAnswer: "Tunisia",
        answer: ["Greece", "Egypt", "Tunisia"]
    },
    {
        image: "images/unitedarab04.jpg",
        correctAnswer: "United Arab Emirates",
        answer: ["United Arab Emirates", "Iran", "Australia"]
    },
    {
        image: "images/portugal04.jpg",
        correctAnswer: "Portugal",
        answer: ["Portugal", "Italy", "Bulgaria"]
    },
    {
        image: "images/greenland05.jpg",
        correctAnswer: "Greenland",
        answer: ["Norway", "Greenland", "Netherlands"]
    },
    {
        image: "images/canada06.jpg",
        correctAnswer: "Canada",
        answer: ["Ireland", "Canada", "Russia"]
    },
    {
        image: "images/estonia07.jpg",
        correctAnswer: "Estonia",
        answer: ["Amsterdam", "Russia", "Estonia"]
    },
    {
        image: "images/ireland08.jpg",
        correctAnswer: "Ireland",
        answer: ["Ireland", "United Kingdom", "Germany"]
    },
    {
        image: "images/rio9.jpg",
        correctAnswer: "Rio de Janeiro",
        answer: ["Belize", "Mexico", "Rio de Janeiro"]
    },
    {
       image: "images/norway10.jpg",
        correctAnswer: "Norway",
        answer: ["Norway", "Denmark", "Scotland"]
    },
    {
       image: "images/mongolia11.jpg",
        correctAnswer: "Mongolia",
        answer: ["Saudi Arabia", "Mongolia", "Chile"]
    },
    {
       image: "images/antarctica12.jpg",
        correctAnswer: "Antarctica",
        answer: ["Iceland", "Greenland", "Antarctica"]
    },
    {
       image: "images/arizona13.jpg",
        correctAnswer: "Arizona",
        answer: ["Philadelphia", "Arizona", "Las Vegas"]
    },
    {
       image: "images/taiwan14.jpg",
        correctAnswer: "Taiwan",
        answer: ["Taiwan", "Japan", "Thailand"]
    },
    {
       image: "images/greenland15.jpg",
        correctAnswer: "Greenland",
        answer: ["Iceland", "Greenland", "Montana"]
    },
    {
       image: "images/montenegro16.jpg",
        correctAnswer: "Montenegro",
        answer: ["Montenegro", "Brazil", "Cuba"]
    },
    {
       image: "images/spain17.jpg",
        correctAnswer: "Spain",
        answer: ["Spain", "Italy", "Portugal"]
    },
    {
       image: "images/california18.jpg",
        correctAnswer: "California",
        answer: ["California", "Washington", "Pennslyvania"]
    },
    {
       image: "images/uk19.jpg",
        correctAnswer: "United Kingdom",
        answer: ["Scotland", "United Kingdom", "Ireland"]
    },
    {
       image: "images/france20.jpg",
        correctAnswer: "France",
        answer: ["Germany", "France", "Turkey"]
    },
    {
       image: "images/ireland21.jpg",
        correctAnswer: "Ireland",
        answer: ["Ireland", "France", "Scotland"]
    },
    {
        image: "images/mexico22.jpg",
        correctAnswer: "Mexico",
        answer: ["Spain", "El Salvador", "Mexico"]
    },
    {
        image: "images/bermuda23.jpg",
        correctAnswer: "Bermuda",
        answer: ["Bermuda", "Columbia", "Florida"]
    },
    {
        image: "images/norway24.jpg",
        correctAnswer: "Norway",
        answer: ["Alaska", "Norway", "Utah"]
    },
    {
        image: "images/italy25.jpg",
        correctAnswer: "Italy",
        answer: ["Italy", "France", "Seattle"]
    },
    {
        image: "images/philly26.jpg",
        correctAnswer: "Philadelphia",
        answer: ["Portland", "Boston", "Philadelphia"]
    },
    {
        image: "images/malta27.jpg",
        correctAnswer: "Malta",
        answer: ["Malta", "Greece", "Libya"]
    },
    {
        image: "images/iceland28.jpg",
        correctAnswer: "Iceland",
        answer: ["Iceland", "Australia", "Colorado"]
    },
    {
        image: "images/france29.jpg",
        correctAnswer: "France",
        answer: ["Sweden", "Denver", "France"]
    },
    {
        image: "images/thailand30.jpg",
        correctAnswer: "Thailand",
        answer: ["Hong Kong", "Thailand", "California"]
    },
    {
        image: "images/atlanta31.jpg",
        correctAnswer: "Atlanta",
        answer: ["Los Angeles", "New York", "Atlanta"]
    },
  ];



////////////////////////////////////// create player class /////////////////////////////////
class Player {
    constructor(time, correct, wrong) {
    this.time = time;
    this.correct = correct;
    this.wrong = wrong;
    }
    updateCurrentStats() {
        currentStatsContainer.innerHTML = `
        <h2>Where am I?</h2>
        <div class="timer">
            Timer: <span>${this.time}</span>
        </div>
        <div class="correct">
            Correct: <span>${this.correct}</span>
        </div>
        <div class="wrong">
            Wrong: <span>${this.wrong}</span>
        </div>`

    }
    gameStart() {
        // currentStatsContainer.appendChild('stats');
        this.updateCurrentStats();
        this.countDown();
        // this.scoreCorrect();
        // this.scoreWrong();
    }
    gameNewRound() {
        // currentStatsContainer.appendChild('stats');
        this.updateCurrentStats();
        this.time = 11;
    }
    scoreCorrect () {
        this.correct++;
        this.updateCurrentStats();

    }
    scoreWrong () {
        this.wrong++
        this.updateCurrentStats();
    }  
    countDown () {
        console.log('countdown running');
        setInterval(()=> {
            // if currentCountdown is false, do this:
            // turn currentCountdown to true
            // if (currentCountdown === false) {
            //     currentCountdown = true;
            //     this.time--;
            // } 
            this.time--;
            this.updateCurrentStats();
            if (this.time < 1) {
                this.time = this.time + 10;
                this.wrong++;
                this.updateCurrentStats();
                beginNewRound();
                console.log('time resetting');
            } 
       }, 1000)
    }
}
// make an end game function1!!!

/// create a player 2 class to make it two player!!!


// make an array for the randomly made choices 
// const randomChoice = [];
const newPlayer = new Player(10, 0, 0);

let time = 10;
let correct = 0;
let wrong = 0;
let randomNum = Math.floor(Math.random() * questions.length);

// i need to make a variable for randomized answers

// const randomThree = Math.floor(Math.random() * questions[randomNum].answer['']);
// console.log(randomThree);

const shuffleAnswers = Math.floor(Math.random() * questions[randomNum].answer);
console.log(shuffleAnswers);

///////////////////////////////////// functions /////////////////////////////////////////////

// begin game modal:
const toggleModal = () => {
    modal.classList.toggle("open");
    beginButton.remove();
}
// for (let i = 0; i < questions.length; i++) {

    // updates background image to random image when user clicks "travel"
    const travelLocations = () => {
        document.body.style.backgroundImage = `url(${questions[randomNum].image}`;
        modal.remove();
        // newPlayer.countDown(); // this was making the timer go cray
    };
    // three functions that display answers on buttons:
    const makeComparisonFirst = () => {
        if (firstButton.innerText === questions[randomNum].correctAnswer) {
            alert(`correct!`);
            newPlayer.scoreCorrect();
        } else {
            alert(`wrong answer`)
            newPlayer.scoreWrong();
        }
        beginNewRound ();
        endGame ();
    };

    const makeComparisonSecond = () => {
        if (secondButton.innerText === questions[randomNum].correctAnswer) {
            alert(`correct!`);
            newPlayer.scoreCorrect();
        } else {
            alert(`wrong answer`);
            newPlayer.scoreWrong();
        }
        beginNewRound ();
        endGame ();
    };

    const makeComparisonThird = () => {
        if (thirdButton.innerText === questions[randomNum].correctAnswer) {
            alert(`correct!`);
            newPlayer.scoreCorrect();
        } else {
            alert(`wrong answer`);
            newPlayer.scoreWrong();
        }   
        beginNewRound ();
        endGame ();
    };

    // if (this.correct === 10) {
    //     // win game screen
    //     // bonus round
    // }
//
// for (let i = 0; i < questions.length; i++) {
//     console.log(questions[i]);
// }

// if (userChoice === correctAnswer) {
//     displayResult(`Correct! You are in ${correctAnswer}!`)
//     //// update correct scoreboard with 1 point
//     } else {
//     displayResult(`Wrong! You are actually in ${correctAnswer}. Try again.`)
//     //// update wrong scoreboard with 1 point

if (newPlayer.correct === 10) {
    alert(`YOU WON!!!!`);
}

function beginGame () {
    randomNum = Math.floor(Math.random() * questions.length);
    firstButton.innerText = `${questions[randomNum].answer[0]}`;
    secondButton.innerText = `${questions[randomNum].answer[1]}`;
    thirdButton.innerText = `${questions[randomNum].answer[2]}`;
    travelLocations ();
    newPlayer.gameStart();
    // currentStatsContainer("open");
}

function beginNewRound () {
    randomNum = Math.floor(Math.random() * questions.length);
    firstButton.innerText = `${questions[randomNum].answer[0]}`;
    secondButton.innerText = `${questions[randomNum].answer[1]}`;
    thirdButton.innerText = `${questions[randomNum].answer[2]}`;
    travelLocations ();
    newPlayer.gameNewRound();
    // currentStatsContainer("open");
}

function endGame () {
    if (newPlayer.correct >= 10) {
        alert(`CONGRATULATIONS! You have won the game!`);
    } else if (newPlayer.wrong >= 5) {
        alert(`You have lost the game. You are stuck in the teleport forever and will probably die. Try again!`)
    }
}
///////////////////////////////////// event listeners ///////////////////////////////////
travel.addEventListener("click", beginGame);
beginButton.addEventListener("click", toggleModal);
firstButton.addEventListener('click', makeComparisonFirst);
secondButton.addEventListener('click', makeComparisonSecond);
thirdButton.addEventListener('click', makeComparisonThird);