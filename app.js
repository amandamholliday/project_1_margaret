console.log("yes I'm connected!");


//////// dom nodes ////////////
// const modal = document.querySelector(".modal");
// const travel = document.querySelector(".travel");
const beginButton = document.querySelector(".start");
const modal = document.querySelector(".modal");

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
      image: "",
      correctAnswer: "New Zealand",
      answer: ["New Zealand", "California", "Ireland"]
    },
    {
     image: "",
      correctAnswer: "Malasia",
      answer: ["Thailand", "Malasia", "Turkey"]
    },
    {
       image: "images/france1.jpg",
        correctAnswer: "France",
        answer: ["France", "Switzerland", "Belgium"]
    },
    {
       image: "",
        correctAnswer: "Utah",
        answer: ["Idaho", "Arizona", "Utah"]
    },
    {
       image: "",
        correctAnswer: "Tokyo",
        answer: ["Tokyo", "Hong Kong", "Bangkok"]
    },
    {
       image: "",
        correctAnswer: "Australia",
        answer: ["Virgin Islands", "Australia", "New Zealand"]
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
       image: "images/uk.jpg",
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
        image: "22image.jpeg",
        correctAnswer: "new york",
        answer: ["new zealad", "new york", "la"]
    },
    {
        image: "23image.jpeg",
        correctAnswer: "new york",
        answer: ["new zealad", "new york", "la"]
    },
    {
        image: "24image.jpeg",
        correctAnswer: "new york",
        answer: ["new zealad", "new york", "la"]
    },
    {
        image: "25image.jpeg",
        correctAnswer: "new york",
        answer: ["new zealad", "new york", "la"]
    },
    {
        image: "26image.jpeg",
        correctAnswer: "new york",
        answer: ["new zealad", "new york", "la"]
    }
  ]

// make an array for the randomly made choices 
// const randomChoice = [];
 


///////////////////////////////////// functions /////////////////////////////////////////////

// begin game modal:
const toggleModal = () => {
    modal.classList.toggle("open");
}

///////////////////////////////////// event listeners ///////////////////////////////////
// travel.addEventListener("click", toggleModal);
beginButton.addEventListener("click", toggleModal);