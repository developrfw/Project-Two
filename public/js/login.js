$("#add-btn").on("click", function (event) {
    event.preventDefault();

    // make a newUser obj
    var newUser = {
        // username from username input
        username: $("#username").val().trim(),
        // password from password input
        password: $("#password").val().trim(),

    };

    // send an AJAX POST-request with jQuery
    $.post("/api/new", newUser)
        // on success, run this callback
        .then(function (data) {
            // log the data we found
            console.log(data);
            // tell the user we're adding a user with an alert window
            alert("Adding user...");
        });

    // empty each input box by replacing the value with an empty string
    $("#username").val("");
    $("#password").val("");

