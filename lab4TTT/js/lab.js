// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

//Creating Tic Tac Toe
//Create 3 buttons: Rock,Paper, Scissors</p>
// Attribute/Name Them</p>
//Have bot choose rock, paper or scissors</p>
//Set win conditions</p>
//Print and show results</p>


//Task: Digital Art
 //Reference
 //Select Brush
 //Sketch
 //Sketch 2 & adjust/modify
 //Line art
 //Shadows & Highlights
 //Color
 //Details/Textures




//Set up List for answer conditions
var Answer=[];

//Result Conditions



//Create References for buttons
const Rock = document.getElementById("Rock")
const Scissors = document.getElementById("Scissors")
const Paper = document.getElementById("Paper")
// Functions

// Functions checks win conditions and returns the result
function DetermineWinner() {
  // When Players Choice is Rock
  if (Answer[0]=="Rock"){
    if (Answer[1]=="Rock"){
      return "The Bot Chose Rock: It's a TIE :("
    }
    else if (Answer[1]=="Paper"){
      return "The Bot Chose Paper: You LOST:("
    }
    else return "The Bot Chose Scissors:YOU WIN:)"

  }

  //When Players Choice is Paper
  if (Answer[0]=="Scissors"){
    if (Answer[1]=="Scissors"){
      return "The Bot Chose Scissors: It's a TIE:("
    }
    else if (Answer[1]=="Paper"){
      return "The Bot Chose Paper: YOU WIN:)"
    }
    else return "The Bot Chose Rock: You LOST:("

  }

  //When Players Choice is Scissors
  if (Answer[0]=="Paper"){
    if (Answer[1]=="Paper"){
      return "The Bot Chose Paper: It's a TIE:("
    }
    else if (Answer[1]=="Scissors"){
      return "The Bot Chose Scissors: You LOST:("
    }
    else return "The Bot Chose Rock: YOU WIN:)"

  }
}

//This function will choose the Bots Choice
function BotChoice(num){
  //Picks random number from 0-2 *3 possibilities*
  num= Math.floor(Math.random() * 3);
  if (num==0){
    return "Rock"
  }
  if(num==1){
    return "Paper"

  }
  if(num==2){
    return "Scissors"

  }

}

//When the rock button is clicked 
Rock.addEventListener("click", function(e){
  
  //Adds Rock into List
  Answer.push("Rock");
  //Makes Sure the lists doesn't exceed 2 inputs
  if (Answer.length >2){
    Answer=["Rock"]
  }
  //Adds the Computers Choice
  Answer.push(BotChoice());
  //Will Print Who Won
  alert(DetermineWinner())

});

//When Scissors button is called
Scissors.addEventListener("click", function(e){
  
  //Adds Rock into List
  Answer.push("Scissors");
  //Makes Sure the lists doesn't exceed 2 inputs
  if (Answer.length >2){
    Answer=["Scissors"]
  }
  //Adds the Computers Choice
  Answer.push(BotChoice());
  //Will Print Who Won

  alert(DetermineWinner())

});
//When Paper button is Called
Paper.addEventListener("click", function(e){
  
  //Adds Rock into List
  Answer.push("Paper");
  //Makes Sure the lists doesn't exceed 2 inputs
  if (Answer.length >2){
    Answer=["Paper"]
  }
  //Adds the Computers Choice
  Answer.push(BotChoice());
  //Will Print Who Won
  alert(DetermineWinner())


});




function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
