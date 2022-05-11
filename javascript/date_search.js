function extractDate(text) {
  const match = text.match(/[0-9]{1,2}\/[0-9]{2}\/[0-9]{2,4}/)
  if (!match) return
  const [date] = match
  return date
}

console.log(extractDate('today is 05/11/2022'))
console.log(extractDate('today is 5/11/2022'))
console.log(extractDate('today is 05/11/22'))
console.log(extractDate('today is 5/11/22'))
console.log(extractDate('today is wednesday'))