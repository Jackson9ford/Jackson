// index.js - Loops
// Author: Jackson Ford
// Date: 11/18/2024
function fizzBuzz() {
    let oneLongString = ""; // Initialize an empty string

    for (let num = 1; num <= 200; num++) {
        let output = `${num}: `; // Start with the number

        if (num % 3 === 0) {
            output += "Fizz";
        }
        if (num % 5 === 0) {
            output += "Buzz";
        }
        if (num % 7 === 0) {
            output += "Boom";
        }

        // If the number isn't a multiple of 3, 5, or 7, it has no label
        if (output === `${num}: `) {
            output = `${num}`; // Just the number
        }

        oneLongString += output + "<br>";
    }

    // Output the compiled string to the div with id "output"
    $("#output").html(oneLongString);
}

// Call the fizzBuzz function
fizzBuzz();
