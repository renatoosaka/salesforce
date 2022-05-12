$(function () {
  const profiles = [
    {
      name: "Renato Hideki Osaka",
      email: "renatoosaka@ioasys.com.br"
    },
    {
      name: "Fulano",
      email: "fulano@ioasys.com.br"
    },
    {
      name: "Ciclano",
      email: "ciclano@ioasys.com.br"
    }
  ]

  $.each(profiles, function(i, item) {
    $("#select").append($("<option>", {
      value: item.email,
      text: item.name
    }))
  })
});