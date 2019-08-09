$(document).ready(function() {

$(document).on("add", function(event) {

    
    event.preventDefault();

    var id = $(this).children("id").val();
  
    $.ajax ( {method: "PUT",
      url: "/burgers/" + id
    }).then(
      function(data) {
    
        location.reload();
      });
  });
});




 

   
   