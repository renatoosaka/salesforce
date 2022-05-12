$(function () {
  $("body").mousedown(function(e) {
    if (e.which === 1) {
      $("div").append('<p>Left Mouse Click</p>')
    } else if (e.which === 3) {
      $("div").append('<p>Right Mouse Click</p>')
    }
  })
});