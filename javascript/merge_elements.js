function merge(arr1, arr2) {
  const newArr = [...arr1, ...arr2]
  return newArr.filter((value, idx, arr) => arr.map(item => item.toString().toLowerCase()).indexOf(value.toString().toLocaleLowerCase()) === idx)
}

{
  const arr1 = [1, 2, 3, 4, 5]
  const arr2 = [5, 6, 7, 8, 9, 0]
  const result = merge(arr1, arr2)
  console.log(result)
}

{
  const arr1 = ['a', 'b', 'c']
  const arr2 = ['a', 'd', 'b', 'e', 'c', 'f']
  const result = merge(arr1, arr2)
  console.log(result)
}