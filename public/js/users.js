// Code here handles queries for specific users in the database
// In this case, the user submits a username's name... we then pass that username's name as a
// URL parameter. Our server then performs the search to grab that username from the Database.

// when user hits the search-btn
$("#search-btn").on("click", function () {
    // save the username they typed into the username-search input
    var searchedusername = $("#username-search")
        .val()
        .trim();

    // Using a RegEx Pattern to remove spaces from searchedusername
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    searchedusername = searchedusername.replace(/\s+/g, "").toLowerCase();

    // run an AJAX GET-request for our servers api,
    // including the user's username in the url
    $.get("/api/" + searchedusername, function (data) {
        // log the data to our console
        console.log(data);
        // empty to well-section before adding new content
        $("#well-section").empty();
        // if the data is not there, then return an error message
        if (!data) {
            $("#well-section").append("<h2> The force is not strong with this one. Your username was not found. </h2>");
        }
        else {
            // otherwise
            // append the username name
            $("#well-section").append("<h2>" + data.username + "</h2>");
            // the role
      $("#well-section").append("<h3>Role: " + data.credits + "</h3>");

        }
    });
});
