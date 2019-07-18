$(".create-form").on("submit", function(event) {
    
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger_name").val().trim(),
    };
 console.log(newBurger)
   
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".devour").on("click", function(event) {
    var id = $(this).data("id");

   
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: 
      {
      devoured: true
    }
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


