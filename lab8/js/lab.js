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

var number= 20;
var list= [1500,1,6,84,21,293,732]
function addTwo(x) {
  var results= x+2
  return results
}
console.log(addTwo(number));

var group=(list.map(addTwo));
console.log(group);

var mapping= list.map(function(x){
  return x+2
})
console.log(mapping)

var mapResults = `Your map results here: ${mapping} </br>` ;
console.log(mapResults);
$("#output").html(mapResults);



// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) { 
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();


//Prints

