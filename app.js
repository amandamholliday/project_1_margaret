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
        image: "image/rio9.jpg",
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

///////////////////////////////////// functions /////////////////////////////////////////////

// begin game modal:
const toggleModal = () => {
    modal.classList.toggle("open");
}

const travelLocations = () => {
    document.body.style.backgroundImage = `url(${questions[randomNum].image}`;
    modal.remove();
}

firstButton.innerText = `${questions[0].answer[0]}`;
secondButton.innerText = `${questions[0].answer[1]}`;
thirdButton.innerText = `${questions[0].answer[2]}`;

const makeComparisonFirst = () => {
    if (firstButton.innerText === questions[0].correctAnswer) {
        alert(`correct!`);
    } else {
        alert(`wrong!`)
    }
}

const makeComparisonSecond = () => {
    if (secondButton.innerText === questions[0].correctAnswer) {
        alert(`correct!`);
    } else {
        alert(`no you dumb`);
    }
};

const makeComparisonThird = () => {
    if (thirdButton.innerText === questions[0].correctAnswer) {
        alert(`correct!`);
    } else {
        alert(`no you dumb`);
    }
}

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