// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions
myTransport=["The 18<3","Walking","Nissan Sentra","Uber"];


myMainRide={
  make:"Nissan",
  model: "SUV",
  color:"Grey",
  year:2022,
  age: function(){
      return 2024- this.year;
  }
}
document.writeln(`Kinds of transportation I use: ${myTransport} </br>` );
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

document.writeln(`My main ride is a ${myMainRide.color} ${myMainRide.make}</br>` );


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
