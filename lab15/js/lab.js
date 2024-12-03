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
  
    "month": "7",
    "num": 614,
    "link": "",
    "year": "2009",
    "news": "",
    "safe_title": "Woodpecker",
    "transcript": "[[A man with a beret and a woman are standing on a boardwalk, leaning on a handrail.]]\nMan: A woodpecker!\n\u003C\u003CPop pop pop\u003E\u003E\nWoman: Yup.\n\n[[The woodpecker is banging its head against a tree.]]\nWoman: He hatched about this time last year.\n\u003C\u003CPop pop pop pop\u003E\u003E\n\n[[The woman walks away.  The man is still standing at the handrail.]]\n\nMan: ... woodpecker?\nMan: It's your birthday!\n\nMan: Did you know?\n\nMan: Did... did nobody tell you?\n\n[[The man stands, looking.]]\n\n[[The man walks away.]]\n\n[[There is a tree.]]\n\n[[The man approaches the tree with a present in a box, tied up with ribbon.]]\n\n[[The man sets the present down at the base of the tree and looks up.]]\n\n[[The man walks away.]]\n\n[[The present is sitting at the bottom of the tree.]]\n\n[[The woodpecker looks down at the present.]]\n\n[[The woodpecker sits on the present.]]\n\n[[The woodpecker pulls on the ribbon tying the present closed.]]\n\n((full width panel))\n[[The woodpecker is flying, with an electric drill dangling from its feet, held by the cord.]]\n\n{{Title text: If you don't have an extension cord I can get that too.  Because we're friends!  Right?}}",
    "alt": "If you don't have an extension cord I can get that too.  Because we're friends!  Right?",
    "img": "https://imgs.xkcd.com/comics/woodpecker.png",
    "title": "Woodpecker",
    "day": "24"
  
}


// click listener for button
$("#submit").click(function(){
  
    $("#output").append('<h1>' + data.month);
    $("#output").append('<h1>' + data.num);
    $("#output").append('<h1>' + data.year);
    $("#output").append('<h1>' +'Title:' + data.safe_title);
   
    $("#output").append("<img src='" + data.img + "'>")


});


// append a new div to our output div







