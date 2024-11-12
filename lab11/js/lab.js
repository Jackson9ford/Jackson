// index.js - JavaScript Events and Forms
// Author: Jackson Ford
// Date: 11/11/2024

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// Click listener for button
$("#submit").click(function(){
	// Get value of input field
	const userName = $("#user-name").val();
	// Now let's sort it
	const userNameSorted = sortString(userName);
	// Append sorted name to output div
	$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
}); 




