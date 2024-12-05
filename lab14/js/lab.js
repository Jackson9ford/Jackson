// index.js - Anon Functions and Callbacks
// Author: Jackson Ford
// Date:10/31/2024

function multiplyNumbersByFive(x){
    var results = (5 * x)
    return results;
}

multiplyNumbersByFive(10)
//50
array = [1, 2, 3, 4, 5]
//(5) [1, 2, 3, 4, 5]
array.map(multiplyNumbersByFive);
//(5) [5, 10, 15, 20, 25]
array.map(function(x){
    var results = (x - 2)
    return results;
})
//(5) [-1, 0, 1, 2, 3]
var mapResults = array.map(multiplyNumbersByFive);

console.log("Results: ", mapResults)
 //(5) [5, 10, 15, 20, 25]

  // Your map results data
var mapResults = array.map(multiplyNumbersByFive)
  
  
  // this is an example function and this comment tells what it doees and what parameters are passed to it.
  function myFunction(param1, param2) {
    // some code here
    // return results;
  }
  
// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);
  function main() {
    
    // the code that makes everything happen
  }
  
  // let's get this party started
  main();
  