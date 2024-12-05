// index.js - Lab 15 - AJAX
// Author: Jackson Ford
// Date: 11/25/2024

$(document).ready(function () {
  $("#activate").on("click", function () {
      // Perform an AJAX call to the Yes or No API
      $.ajax({
          url: "https://yesno.wtf/api", // API endpoint
          type: "GET", // HTTP method
          dataType: "json", // Data type expected from the API
          success: function (data) {
              // Display the "answer" in the output div
              $("#output").html(`
                  <p><strong>Answer:</strong> ${data.answer}</p>
                  <img src="${data.image}" alt="${data.answer}" />
              `);
              console.log("API Data:", data); // Log the data to the console
          },
          error: function (jqXHR, textStatus, errorThrown) {
              // Display an error message if the API call fails
              $("#output").html(`<p style="color: red;">An error occurred: ${textStatus}</p>`);
              console.error("Error:", textStatus, errorThrown);
          },
      });
  });
});