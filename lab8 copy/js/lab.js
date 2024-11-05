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
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#results").append("<button id='button-results'>Make Special</button>");
$("#problems").append("<button id='button-problems'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");

  
});
$("#button-results").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#results").toggleClass("special");

  
});
$("#button-problems").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#problems").toggleClass("special");

  
});







