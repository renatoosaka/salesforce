function isValidURL(url) {
  return /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(url)
}

console.log(isValidURL('https://www.ioasys.com.br'))
console.log(isValidURL('https://www.google.com'))
console.log(isValidURL('https://localhost:8080'))
console.log(isValidURL('https://localhost'))
console.log(isValidURL('invalid_url'))