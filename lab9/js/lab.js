// index.js - Lab 9 - Libraries & jQuery
// Author: Jackson Ford
// Date:11/4/2024


  
  // this is an example function and this comment tells what it doees and what parameters are passed to it.
  function myFunction(param1, param2) {
    // some code here
    // return results;
  }
  
// Add a click listener to the challenge button
$("#button-challenge").click(function() {
  // Toggle the "special" class on the challenge section
  $("#challenge").toggleClass("special");
});


// Toggle the "problems-special" class on the Problems section
$("#button-problems").click(function() {
  $(this).toggleClass("problems-special");
});

// Toggle the "reflection-special" class on the Reflection section
$("#button-reflection").click(function() {
  $(this).toggleClass("reflection-special");
});

// Use jQuery to select the element by its ID and set the HTML content


    
    // the code that makes everything happen
  
  
  // let's get this party started
  main();
  