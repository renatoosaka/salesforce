function reverseNumber(num) {
  const str = num.toString()
  
  if (!/^[0-9]+$/.test(str)) return

  return str.split('').reverse().join('')
}

console.log(reverseNumber('a2'))
console.log(reverseNumber(0))
console.log(reverseNumber(1))
console.log(reverseNumber(123))
console.log(reverseNumber(7890))

