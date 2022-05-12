$(function () {
  $("body").find("*").each(function(e) {
    $(this).on("focus",function() {
      $(this).css("background-color", "red")
      $("#message").append(`<p>Focus in ${$(this).prop("tagName")}</p>`)
    })

    $(this).on("focusout", function () {
      $(this).css("background-color", "transparent")
      $("#message").append(`<p>Focus out ${$(this).prop("tagName")}</p>`)
    })    
  })
});