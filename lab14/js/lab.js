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

function sortHat() {
  var answer=''
  for (var i=0; i<=200; i++) {
    
    if (i%15==0 && i%21==0){
      $("#output").append('<div class="text"><p>' + "FizzBuzzBoom!" + '</p></div>');
    }
    else if (i%15==0){ //3&5
      $("#output").append('<div class="text"><p>' + "FizzBuzz!" + '</p></div>');
    }
    else if (i%21==0){ //3&7
      $("#output").append('<div class="text"><p>' + "FizzBooM!" + '</p></div>');
    }
    else if (i%35==0){
      $("#output").append('<div class="text"><p>' + "BuzzBoom!" + '</p></div>'); //5&7
    }
    else if(i%3==0){
      $("#output").append('<div class="text"><p>' + "Fizz!" + '</p></div>');
  
    }
    else if(i%5==0){
      $("#output").append('<div class="text"><p>' + "Buzz!" + '</p></div>');
  
    }
    else if(i%7==0){
      $("#output").append('<div class="text"><p>' + "Boom!" + '</p></div>');
  
    }
    else{
      $("#output").append('<div class="text"><p>' + i + '</p></div>');
    }
  }
  
}

// click listener for button
$("#submit").click(function(){
    let data= 
      {
        "answer": "yes",
        "forced": false,
        "image": "https://yesno.wtf/assets/yes/2.gif"
      }
      $("#output").append('<div class="text"><p>' + data.answer + '</p></div>');
      $("#output").append('<div class="text"><p>' + data.image + '</p></div>');


    
});

// append a new div to our output div







