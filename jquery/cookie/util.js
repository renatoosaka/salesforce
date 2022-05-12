//Simple encrypt/decrypt function, just for example
function encrypt(str) {
  return str.split('').map(val => String.fromCharCode(val.charCodeAt(0) + 1)).join('')
}

function decrypt(str) {
  if (!str) return
  return str.split('').map(val => String.fromCharCode(val.charCodeAt(0) - 1)).join('')
}