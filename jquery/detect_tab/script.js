$(function () {
  $("body").keyup(function(e) {
    if (e.which === 9) {
      const focussedElement = $(':focus')
      console.log(focussedElement.prop('tagName'))
      if (focussedElement.prop('tagName') === 'A') {
        focussedElement.css('text-decoration', 'underline')

        focussedElement.on('focusout', function() {
         $(this).css('text-decoration', 'none')
        })
      }
      else if (focussedElement.prop('tagName') === 'IMG') {
        focussedElement.css('outline', '1px solid red')

        focussedElement.on('focusout', function () {
          $(this).css('outline', 'none')
        })        
      }
    }
  }) 
});