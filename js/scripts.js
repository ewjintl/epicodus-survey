$(document).ready(function() {
  $("form#basicForm").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var food = $("select#favFood").val();
    var music = $("select#favMusic").val();
    $(".showName").text(name + ', ' + food + ', ' + music);

  // $(".showName").show();
  
  });
});

  // $("form#dropDown1").submit(function(event) {
  // var food = $("#favFood").val();
  
  // });




  // $("form#dropDown2").submit(function(event) {  var music = $("#favMusic").val();
  // });
  
