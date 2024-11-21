// index.js - Conditionals
// Author: Jackson Ford
// Date: 11/14/2024

// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on length mod 4
function sortingHat(str) {
    let len = str.length;
    let mod = len % 4;
    
    if (mod === 0) {
        return "Gryffindor";
    } else if (mod === 1) {
        return "Ravenclaw";
    } else if (mod === 2) {
        return "Slytherin";
    } else {
        return "Hufflepuff";
    }
}

// Get the button element and add a click event listener
let myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    let name = document.getElementById("input").value;
    let house = sortingHat(name);
    let newText = "<p>The Sorting Hat has sorted you into " + house + "!</p>";
    
    document.getElementById("output").innerHTML = newText;
});





