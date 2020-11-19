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
      image: "https://i.imgur.com/7GjJ8ua.png",
      correctAnswer: "New Zealand",
      answer: ["New Zealand", "California", "Ireland"]
    },
    {
      image: "https://www.mapcrunch.com/imghd/876714_f3e6a50b.jpg",
      correctAnswer: "Malasia",
      answer: ["Thailand", "Malasia", "Turkey"]
    },
    {
        image: "https://www.mapcrunch.com/imghd/828328_9653d921.jpg",
        correctAnswer: "France",
        answer: ["France", "Switzerland", "Belgium"]
    },
    {
        image: "https://www.mapcrunch.com/imghd/876610_e2e7cc56.jpg",
        correctAnswer: "Utah",
        answer: ["Idaho", "Arizona", "Utah"]
    },
    {
        image: "https://www.mapcrunch.com/imghd/876572_a80dd3d3.jpg",
        correctAnswer: "Tokyo",
        answer: ["Tokyo", "Hong Kong", "Bangkok"]
    },
    {
        image: "https://www.mapcrunch.com/imghd/828280_b5a4ed40.jpg",
        correctAnswer: "Australia",
        answer: ["Virgin Islands", "Australia", "New Zealand"]
    },
    {
       // image: "https://www.mapcrunch.com/imghd/828111_c187231c.jpg",
        correctAnswer: "Rio de Janeiro",
        answer: ["Belize", "Mexico", "Rio de Janeiro"]
    },
    {
      //  image: "https://www.mapcrunch.com/imghd/828060_bbc9e41f.jpg",
        correctAnswer: "Norway",
        answer: ["Norway", "Denmark", "Scotland"]
    },
    {
       // image: "https://www.mapcrunch.com/imghd/828055_234d6055.jpg",
        correctAnswer: "Mongolia",
        answer: ["Saudi Arabia", "Mongolia", "Chile"]
    },
    {
       // image: "https://www.mapcrunch.com/imghd/873775_df57445f.jpg",
        correctAnswer: "Antarctica",
        answer: ["Iceland", "Greenland", "Antarctica"]
    },
    {
       // image: "https://www.mapcrunch.com/imghd/873195_1e64fb32.jpg",
        correctAnswer: "Arizona",
        answer: ["Philadelphia", "Arizona", "Las Vegas"]
    },
    {
       // image: "https://www.mapcrunch.com/imghd/873079_b809927c.jpg",
        correctAnswer: "Taiwan",
        answer: ["Taiwan", "Japan", "Thailand"]
    },
    {
     //   image: "https://www.mapcrunch.com/imghd/873089_f355ceac.jpg",
        correctAnswer: "new york",
        answer: ["new zealad", "new york", "la"]
    },
    {
     //   image: "https://www.mapcrunch.com/imghd/873089_f355ceac.jpg",
        correctAnswer: "Greenland",
        answer: ["Iceland", "Greenland", "Montana"]
    },
    {
      //  image: "https://www.mapcrunch.com/imghd/872796_9264ceaa.jpg",
        correctAnswer: "Montenegro",
        answer: ["Montenegro", "Brazil", "Cuba"]
    },
    {
      //  image: "https://www.mapcrunch.com/imghd/872740_62e485a3.jpg",
        correctAnswer: "Spain",
        answer: ["Spain", "Italy", "Portugal"]
    },
    {
      //  image: "https://www.mapcrunch.com/imghd/872683_6f0ac14d.jpg",
        correctAnswer: "California",
        answer: ["California", "Washington", "Pennslyvania"]
    },
    {
      //  image: "https://www.mapcrunch.com/imghd/871864_56ec0671.jpg",
        correctAnswer: "United Kingdom",
        answer: ["Scotland", "United Kingdom", "Ireland"]
    },
    {
        image: "19image.jpeg",
        correctAnswer: "new york",
        answer: ["new zealad", "new york", "la"]
    },
    {
      //  image: "https://www.mapcrunch.com/imghd/871748_a1b79b40.jpg",
        correctAnswer: "France",
        answer: ["Germany", "France", "Turkey"]
    },
    {
       // image: "https://www.mapcrunch.com/imghd/871396_e8b9c5db.jpg",
        correctAnswer: "Ireland",
        answer: ["Ireland", "France", "la"]
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