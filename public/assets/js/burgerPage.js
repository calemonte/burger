"use strict";

$(function() {
  // Move the burger to the devoured section on click via PUT request.
  $(".devour-burger").on("click", function(event) {
    // If the burger has already been eaten, delete it.
    if ($(this).data("devoured")) {
      event.preventDefault();

      const id = $(this).data("id");

      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(function() {
        console.log("Burger deleted");
        location.reload();
      });

    // Otherwise, let's devour it.
    } else {
      const id = $(this).data("id");

      const newDevour = {
        devoured: true
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevour
      }).then(function() {
        console.log("Devoured burger!");
        // Reload the page to get the updated list
        location.reload();
      });
    }
  });

  // Handle post request
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    const newBurger = {
      burgerName: $("#burgerName")
        .val()
        .trim()
    };

    // Send the POST request for a new burger.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("Added new burger!");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
