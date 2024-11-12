// index.js - Javascript For the Web
// Author: Jackson Ford
// Date: 11/7/2024

function generateRandomText() {
  const text = "What the fuck, who are you? Where did you come from? What is your name? OMG this is so weird. Woah there cowboy. Chill. Maybe I need some peace and quiet. Or maybe I just need to get outside to get my energy up. It's all a mystery. A divine paradox. Where we exist only in our memory.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// Main function to set up event listeners
function main() {
  // click listener for button
  $("#make-convo").click(function() {
    // get new fake dialogue
    const newText = generateRandomText();
    // append a new div to our output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
  });
}

// Call the main function to initialize event listeners
main();