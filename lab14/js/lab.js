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
let data= {
  "answer": "NO",
  "forced": false,
  "image": "https://yesno.wtf/assets/no/12-dafd576be23d3768641340f76658ddfe.gif"
}
  
// add button to challenge section
console.log("1")



// click listener for button
$("#submit").click(function(){
  
    $("#output").append('<h1>' + data.answer);
    $("#output").append("<img src='" + data.image + "'>")


  
});


// append a new div to our output div







