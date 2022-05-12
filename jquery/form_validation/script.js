$(function () {
  $("form").submit(function(e) {
    e.preventDefault()
    e.stopPropagation()
    
    const email = $("#email").val()

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))  {
      alert('Invalid email')
      return
    }

    alert('Valid email')
  })
});