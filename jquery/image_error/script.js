$(function () {
  $("img").bind("error", function (e) {
    $(this).attr("src", "https://random.imagecdn.app/500/150");
  });
});