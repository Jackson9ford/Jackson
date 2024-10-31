// index.js - Arrays and Objects
// Author: Jackson Ford
// Date:10/28/2024

function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);

  // Split string into an array
  var nameArray = userName.split(''); // split by each character instead of spaces to rearrange letters
  console.log("nameArray =", nameArray);

  // Sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  // Join array back into a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

// Output
document.writeln("Oh hey, I’ve fixed your name: ", sortUserName(), "</br>");


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
