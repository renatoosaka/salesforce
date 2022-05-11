function countLetter(str, ch) {
  return str.match(new RegExp(ch, 'gi')).length
}

console.log(countLetter('ioasys', 's'))