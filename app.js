console.log("yes I'm connected!");

//// Welcome screen; displays a modal with directions; make modal!
//// On the modal, there is a "TRAVEL" button
//// When clicked, the travel button starts the game
/////////// (if extra time available, display carousel at beginning of game)
////////////// (this allows user to pick their own traveler character!)
//// Create a for loop for the game that loops over random locations in an array
//// Each travel location will randomly appear on the screen's background
//// There will be a total of 20 randomized locations (array)
//// There will be 3 multiple choice buttons to choose from
//// make 1 button a correct choice, 2 are inncorrect
//// If user clicks correct choice:
    /// update score count;
    //// display "correct!"
    ///////// else, if user clicks incorrect choice
    /// update score count;
    //// display "incorrect!"
//// After first round, user can click "travel" again
//// clicking "travel" again will start loop to display another random location
//// if user gets 10 correct:
    /// display "win game" modal / background
    /// option to choose bonus round (button)
        /// create bonus round (if i have time)
    /// option to end game (reset to beginning)
//// if user gets 5 incorrect:
    //// display "game over"
    //// button to dtart game over (reset to beginning)




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
// an array of 20 locations (photo URLS):
const travelLocations = [
    "https://i.imgur.com/7GjJ8ua.png", 
    "img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8",
    "img9", "img10", "img11", "img12", "img13", "img14", "img15", "img16", "img17", "img18",
    "img19", "img20"
];

/// create arrays for EACH travelLocation
/// ***each string in array will appear on each of the 3 buttons in random order***
/// (this may be a lot of unnessesary work lol)
/// but it may be easier?

const buttonLocationsImg1 = [
    "New Zealand", "California", "Ireland"
];


const questions = [
    {
      image: "https://i.imgur.com/7GjJ8ua.png",
      correctAnswer: "New Zealand",
      answer: ["New Zealand", "California", "Ireland"]
    },
    {
      image: "image.jpeg",
      correctAnswer: "new york",
      answer: ["new zealad", "new york", "la"]
    }
  ]

// make an array for the randomly made choices 
const randomChoice = [];



///////////////////////////////////// functions /////////////////////////////////////////////

// begin game modal:
const toggleModal = () => {
    modal.classList.toggle("open");
}

/// somehow need to get the 3 buttons to randomly generate
/// but one button will correspond to the random image?
/// create 3 button IDs with the DOM
/// this is an object for the player choice (buttons)
let numChoice = {
    currentChoice: null
}
//// this is a template for now:
/// make a loop that loops over travelLocations array randomly
// for(let i = 0 to numChoices)
for (let i = 0; i > travelLocations.length; i++) {
  // const randNum = Math.random() * countries.length
  const randomNum = Math.random() * travelLocations.length;
  // randChoices.push countries[randnum]
  randomChoice.push(travelLocations)[randomNum];
}
console.log(randomChoice);
// for (let i = 0; i < travelLocations.length; i++)


// if randomized travelLocations equals travelLocations[0];
    /// loop over the array that corresponds to it
    /// the strings in the array will display on each button
    /// identify which string is correct, then:
//// this displays when user selects their choice:
if (userChoice === correctChoice) {
    displayResult(`Correct! You are in ${correctChoice}!`)
    //// update correct scoreboard with 1 point
    } else {
    displayResult(`Wrong! You are actually in ${correctChoice}. Try again.`)
    //// update wrong scoreboard with 1 point
};






///////////////////////////////////// event listeners ///////////////////////////////////
// travel.addEventListener("click", toggleModal);
beginButton.addEventListener("click", toggleModal);