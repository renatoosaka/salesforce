const array = ['a', 'A', 'b', 'c', 'b']

console.log(array.filter((value, idx, arr) => arr.map(item => item.toLowerCase()).indexOf(value.toLocaleLowerCase()) === idx))