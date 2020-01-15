$(document).ready(function() {
  $("form#basicForm").submit(function(event) {
  var name = $("#name").val();
  });
  $("form#dropDown1").submit(function(event) {
  var food = $("#favFood").val();
  });
  $("form#dropDown2").submit(function(event) {  var music = $("#favMusic").val();
  });
  event.preventDefault();
  $("#output").text(result);
});