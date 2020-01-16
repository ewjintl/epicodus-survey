$(document).ready(function() {
  $("form#basicForm").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var food = $("select#favFood").val();
    $(".showName").text(name + ' ' + food);

  // $(".showName").show();
  
  });
});

  // $("form#dropDown1").submit(function(event) {
  // var food = $("#favFood").val();
  
  // });




  // $("form#dropDown2").submit(function(event) {  var music = $("#favMusic").val();
  // });
  
