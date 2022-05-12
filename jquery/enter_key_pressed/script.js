$(function () {
  $("#search").keydown(function(e) {
    if (e.which === 13) {
      alert('Enter key has been pressed')
    }
  }) 
});