$(function () {
  $('button[type="submit"]').prop("disabled", true)

  setTimeout(() => {
    $('button[type="submit"]').prop("disabled", false)
  }, 2000)
});