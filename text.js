

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
for (let i = 0; i < travelLocations.length; i++) {
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
if (userChoice === correctAnswer) {
    displayResult(`Correct! You are in ${correctAnswer}!`)
    //// update correct scoreboard with 1 point
    } else {
    displayResult(`Wrong! You are actually in ${correctAnswer}. Try again.`)
    //// update wrong scoreboard with 1 point
};


let points = 0
