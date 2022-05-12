import Cookie from './js.cookie.min.mjs'

$(function () {
  $("#set").click(function() {
    Cookie.set("sf-user", encrypt('ioasys'))
  })

  $("#get").click(function () {
    alert(dencrypt(Cookie.get("sf-user")))
  })  

  $("#del").click(function () {
    Cookie.remove("sf-user")
  })
});