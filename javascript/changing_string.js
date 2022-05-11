function changeString(str) {
  if (!str) return
  if (str.length === 1) return str

  const [firstChar] = str

  return `${str[str.length -1]}${str.slice(1, -1)}${firstChar}`
}

console.log(changeString(''))
console.log(changeString('a'))
console.log(changeString('ab'))
console.log(changeString('abcd'))