/*
DiceRoller/main.js

This is a simple program that rolls dice for a user.  It asks for input on how many dice to roll and how many sides the dice should have.
In the case of 20 sided dice, on a natural 20 roll it will declare a critical hit.

Output is currently only available on the javascript browser console.
*/


//Reading in the number of dice, forcing it to be an integer.
//Reading in how many sides the dice will have, forcing that to be an integer as well.
var diceNumberCount = parseInt(prompt("How many dice would you like to roll? 1-10"))
var diceSidesCount = parseInt(prompt("How many sides would you like the dice to have? (4, 6, 8, 10, 12, 20"))


//An array of the valid types of dice or dice sides we'll allow.
var diceSidesArray = [ 4, 6, 8, 10, 12, 20 ]

//First check to see if the number of dice is within the requested range.
if (diceNumberCount <= 10) {
  //Then check to see if the user selected a valid number of sides.
  if (diceSidesArray.includes(diceSidesCount)) {
      //Beginning to output results
      console.log("Rolling Dice...")
      //Simple for loop to start generating results.
      for (var i = 0; i < diceNumberCount; i++) {
        //Dice are "rolled".  Random numbers are generated, multiplied by the number of sides of the dice,
        //rounded down, and 1 is added to create the correct range.
        var diceResults = Math.floor(Math.random()*diceSidesCount) + 1
        //In the case a natural 20 is rolled, the user is notified of a Critical Hit.
        if (diceResults === 20) {
          console.log("Dice Roll", i+1, "-", diceResults, "**Critical Hit!**")
        }
        //For all other results then 20, simply output diceResults
        else {
          console.log("Dice Roll", i+1, "-", diceResults);
        }
      }
    }
//Exit if the number of sides selected wasn't in range.
else {console.log("Sorry, thats not a valid number of sides.")}
}
//Exit if the type of dice wasn't a valid selection from the diceSidesArray
else {console.log("Sorry, not a valid number of dice.")}
//End
