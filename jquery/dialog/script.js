$(function () {
  $("#btn1").click(function() {
    $("#dialog1").dialog({
      modal: true,
      buttons: {
        Ok: function () {
          $(this).dialog("close");
        }
      }      
    })
  })

  $("#btn2").click(function () {
    $("#dialog2").dialog({
      modal: true,
      buttons: {
        Ok: function () {
          $(this).dialog("close");
        }
      }
    })
  })
  
  $("#btn3").click(function () {
    $("#dialog3").dialog({
      modal: true,
      buttons: {
        Ok: function () {
          $(this).dialog("close");
        }
      }
    })
  })  
});