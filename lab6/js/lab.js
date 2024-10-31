// index.js - Arrays and Objects
// Author: Jackson Ford
// Date:10/24/2024

// Constants
let myTransportation = ["Nissan Maxima","bike","bus","walking","running"];

let myMainRide = {
  make: "Nissan",
  model: "Maxima",
  color: "silver",
  year: 2005,
  age: function () {
      return 2024 - this.year;
  }
};

// output
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

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
