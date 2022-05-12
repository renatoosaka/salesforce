$(function () {
  $("body").find("*").each(function(e) {
    $(this).on("focus",function() {
      $("#message").append(`<p>${$(this).prop("tagName")}</p>`)
    })
  })
});