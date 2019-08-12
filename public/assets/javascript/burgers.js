$(document).ready(function() {

$("form").on("submit", function(event) {
console.log("add")
var newName=$("#burger_name").val()
    
    event.preventDefault();
   
  
    $.ajax ( {method: "POST",
      url: "/burgers/create/" + newName
    }).then(
      function(data) {
    
        location.reload();
      });
  });

  $(".devour").on("click", function(event) {	
    event.preventDefault();	


   var id = $(this).data("id");	
  var devouredState= {	
    devoured: 1	
  };	



   $.ajax("/burgers/" + id,  {	
    type: "PUT",	
    data: 	
    devouredState	
  }).then(	
    function() {	
      // Reload the page to get the updated list	
      location.reload();	
    });	
});

});




 

   
   