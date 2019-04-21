$(document).ready(function () {

    var myactivity = ["Surfing", "Soccer", "Volleyball", "Dance", "Dog", "Family", "Skiing", "Swimming"];
    var searchTerm = "";



    // Adding Click Event   
    $('button').on("click", function () {

        // Grabing and Storing    
        var myactivity = $(this).attr("data-activity");

        // The attrbute JQuery method it allows to get and set
        var state = $(this).attr("data-name");
        searchTerm = $(this).attr("data-name");

        // Constructing URL.   
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=v6uves1uIGwW6MIFL8iYPq8xwImziwcA";

        console.log(myactivity);

        // Performing an AJAX
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            //After data come back from request
            .then(function (response) {
                console.log(queryURL);
                console.log(response);

                //Storing data from the AJAX
                var results = response.data;


                // Looping through each result
                for (var i = 0; i < results.length; i++) {
                   
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }

                    //Creating and Storing Div tag
                    var activityDiv = $("<div>");

                    // Creating a paragraph tag with the result items rating
                    var p = $("<p>").text("Rating: " + results[i].rating);

                    //Creating and storing image tag
                    var activityImage = $("<img>");

                    // Setting up src attrubite 
                    activityImage.attr("src", results[i].images.fixed_height.url);

                    // Appending the paragraph and image tag to the activityDiv
                    activityDiv.append(p);
                    activityImage.append(activityImage);

                    //Prepending the activityDiv to the HTML
                    $('#add-gif').prepend(activityImage);

                } //forloop close



            });//then() close

    }); //button.click close




}); //document.on close