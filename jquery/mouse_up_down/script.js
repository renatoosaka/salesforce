$(function () {
  $("body").mousedown(function() {
    $("div").append('<p>Mouse Down event</p>')
  })
  $("body").mouseup(function () {
    $("div").append('<p>Mouse Up event</p>')
  })  
});