$(function () {
  $("form").submit(function(e) {
    e.preventDefault()
    e.stopPropagation()

    $.ajax({
      url: "https://run.mocky.io/v3/332d5111-5202-4c5a-9b05-2a1dc321db8a",
      data: $("form").serialize(),
      type: "GET",
      beforeSend: function() {
        $("#response").text('aguarde')
        $("button[type='submit']").prop("disabled", true)
      },
      success: function (response) {
        $("#response").text(`response: ${response.name}`)
      },
      error: function(error) {
        $("#response").text('an error occurred try again')
      },
      complete: function() {
        $("button[type='submit']").prop("disabled", false)
      }
    })
  })
});