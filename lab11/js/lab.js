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
function sortString(inputString) {
  return inputString.split('').sort().join('');
    
  }


// click listener for button
$("#submit").click(function(){
    // get new fake dialogue
    
    const userName=$('#user-name').val();
    userNameSorted=sortString(userName);
    $("#output").append('<div class="text"><p>' + userNameSorted + '</p></div>');
    
});

// append a new div to our output div







