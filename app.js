console.log("yes I'm connected!");


//////// dom nodes ////////////
const travel = document.querySelector(".travel");
const beginButton = document.querySelector(".start");
const modal = document.querySelector(".modal");
const firstButton = document.getElementById('first');
const secondButton = document.getElementById('second');
const thirdButton = document.getElementById('third');

////////////////////////////////////// create player class /////////////////////////////////
class Player {
    constructor(time, correct, wrong) {
    this.time = time;
    this.correct = correct;
    this.wrong = wrong;
    }
    updateCurrentStats() {
        currentStatsContainer.innerHTML = `
        <div class="time">
            Timer: <span>${this.time}</span>
        </div>
        <div class="correct">
            Correct: <span>${this.correct}</span>
        </div>
        <div class="wrong">
            Wrong: <span>${this.wrong}</span>
        </div>`
    }

}

/// create a player 2 class to make it two player!!!

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
  ];



// make an array for the randomly made choices 
// const randomChoice = [];
 
let correct = 0;
let wrong = 0;

const randomNum = Math.floor(Math.random() * questions.length);
console.log(randomNum);

// i need to make a variable for randomized answers

// const randomThree = Math.floor(Math.random() * questions[randomNum].answer['']);
// console.log(randomThree);

const shuffleAnswers = Math.floor(Math.random() * questions[randomNum].answer);
console.log(shuffleAnswers);

///////////////////////////////////// functions /////////////////////////////////////////////

// begin game modal:
const toggleModal = () => {
    modal.classList.toggle("open");
}

// updates background image to random image when user clicks "travel"
const travelLocations = () => {
    document.body.style.backgroundImage = `url(${questions[randomNum].image}`;
    modal.remove();
}

firstButton.innerText = `${questions[randomNum].answer[0]}`;
secondButton.innerText = `${questions[randomNum].answer[1]}`;
thirdButton.innerText = `${questions[randomNum].answer[2]}`;

// three functions that display answers on buttons:
const makeComparisonFirst = () => {
    if (firstButton.innerText === questions[randomNum].correctAnswer) {
        alert(`correct!`);
    } else {
        alert(`wrong answer`)
    }
}

const makeComparisonSecond = () => {
    if (secondButton.innerText === questions[randomNum].correctAnswer) {
        alert(`correct!`);
    } else {
        alert(`wrong answer`);
    }
};

const makeComparisonThird = () => {
    if (thirdButton.innerText === questions[randomNum].correctAnswer) {
        alert(`correct!`);
    } else {
        alert(`wrong answer`);
    }
}
//
for (let i = 0; i < questions.length; i++) {
    console.log(questions[i]);
}

// if (userChoice === correctAnswer) {
//     displayResult(`Correct! You are in ${correctAnswer}!`)
//     //// update correct scoreboard with 1 point
//     } else {
//     displayResult(`Wrong! You are actually in ${correctAnswer}. Try again.`)
//     //// update wrong scoreboard with 1 point


///////////////////////////////////// event listeners ///////////////////////////////////
travel.addEventListener("click", travelLocations);
beginButton.addEventListener("click", toggleModal);
firstButton.addEventListener('click', makeComparisonFirst);
secondButton.addEventListener('click', makeComparisonSecond);
thirdButton.addEventListener('click', makeComparisonThird);