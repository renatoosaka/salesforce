const mainArray = []

mainArray.push([1, 2, 3, 4, 2, 3])
mainArray.push(['a', 'b', 'c', 'b', 'a'])
mainArray.push([0, 9, 8])
mainArray.push(['i', 'o', 'a', 's', 'y', 's'])

for (const array of mainArray) {
  const unique = array.filter((value, idx, arr) => arr.map(item => item.toString().toLowerCase()).indexOf(value.toString().toLocaleLowerCase()) === idx)

  console.log(unique)
}