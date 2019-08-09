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
});




 

   
   