$(function () {
  $("p").dblclick(function() {
    $(this).css('background-color', $(this).css('background-color') === 'rgb(255, 0, 0)' ? 'yellow' : 'red')
  })
});