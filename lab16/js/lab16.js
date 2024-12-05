// index.js - Lab 16 - JSON and APIs
// Author: Jackson Ford
// Date: 12/02/2024

$(document).ready(function () {
    const apiKey = "DEMO_KEY"; 
    const apiUrl = "https://api.nasa.gov/planetary/apod";

    function fetchAPOD() {
        const params = {
            api_key: apiKey,  // Required: Your NASA API key
            count: 1,         // Fetch one random image
            thumbs: true      // Include video thumbnails if available
        };

        // Make the AJAX request
        $.ajax({
            url: apiUrl,
            type: "GET",
            data: params,
            dataType: "json",
            success: function (data) {
                const results = Array.isArray(data) ? data : [data];
                const outputDiv = $("#output");

                // Clear previous content
                outputDiv.empty();

                results.forEach(item => {
                    // Log item for debugging
                    console.log(item);

                    // Create and append title
                    const titleElement = $("<h3>").text(item.title);
                    outputDiv.append(titleElement);

                    // Create and append media (image or video)
                    if (item.media_type === "image") {
                        const imgElement = $("<img>")
                            .attr("src", item.url)
                            .attr("alt", item.title)
                            .css({ maxWidth: "100%", height: "auto" });
                        outputDiv.append(imgElement);
                    } 

                    // Create and append explanation
                    const explanationElement = $("<p>").text(item.explanation);
                    outputDiv.append(explanationElement);
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("Error fetching data from NASA:", textStatus, errorThrown);
                $("#output").html("<p>Unable to load data at this time. Please try again later.</p>");
            }
        });
    }

    // Add event listener to button
    $("#fetchNewAPOD").on("click", function () {
        fetchAPOD(); // Fetch a new APOD on button click
    });
});