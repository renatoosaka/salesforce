$(function () {
  const profile = {
    name: "Renato Hideki Osaka",
    email: "renatoosaka@ioasys.com.br",
    company: "ioasys"
  }

  $("#profile").append(`<p>${profile.name}</p>`)
  $("#profile").append(`<p>${profile.email}</p>`)
  $("#profile").append(`<p>${profile.company}</p>`)
});