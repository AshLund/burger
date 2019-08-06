$(function() {

$(".create-form").on("submit", function(event) {
    
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger_name").val().trim(),
      devoured: 0
    };
 console.log(burger_name)
   
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("added")
        location.reload();
      });
  });

  $(".devour").on("click", function(event) {
      event.preventDefault();

    var id = $(this).data("id");
    var devouredState= {
      devoured: 1
    };

   
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: 
      devouredState
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      });
  });

$(".deleteBurger").on("click", function (event) {
  event.preventDefault();

  var id=$(this).data("id");

  $ajax({
    type: "DELETE",
    url: "/api/burgers/" + id
  }).then(location.reload());
});

});