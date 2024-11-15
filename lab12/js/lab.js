// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

/**
 * Author:    Jose B
 * Created:   10.30.2024
 * 
 * (c) Copyright by PJ546.
 **/
//List
  
  
// add button to challenge section
function sortHat(str) {
     
  var mod=  str.length%4;
  if (mod==0){
    return "Gryffindor"
  }
  else if (mod==1){
    return "Ravenclaw"

  }
  else if (mod==2){
    return "Slytherin :)"

  }
  else if (mod==3){
    return "Ew Hufflepuff"
  }
  }


// click listener for button
$("#submit").click(function(){
    // get new fake dialogue
    var response= sortHat($("#user-name").val())
    
    $("#output").append('<div class="text"><p>' + "AND YOUR HOUSE IS.... "+response + '</p></div>');
    
});

// append a new div to our output div







