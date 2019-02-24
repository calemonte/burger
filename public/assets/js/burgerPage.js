"use strict";

$(function() {
    // Move the burger to the devoured section on click via PUT request.
    $(".devour-burger").on("click", function(event) {
      const id = $(this).data("id");
    //   var newSleep = $(this).data("newsleep");
  
      const newDevour = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevour
      }).then(
        function() {
          console.log("Devoured burger!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // Handle post request 
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      const newBurger = {
        burgerName: $("#burgerName").val().trim(),
      };
  
      // Send the POST request for a new burger.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Added new burger!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete").on("click", function(event) {
      event.preventDefault();
  
      const id = $(this).data("id");
  
      $.ajax("/api/cats/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("Cat deleted");
          location.reload();
        }
      );
    })
  });
