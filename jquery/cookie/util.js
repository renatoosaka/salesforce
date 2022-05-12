function encrypt(str) {
  return str.split('').map(val => String.fromCharCode(val.charCodeAt(0) + 1)).join('')
}

function dencrypt(str) {
  if (!str) return
  return str.split('').map(val => String.fromCharCode(val.charCodeAt(0) - 1)).join('')
}