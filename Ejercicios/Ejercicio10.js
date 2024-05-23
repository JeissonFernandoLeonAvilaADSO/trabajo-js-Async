let lista = [2, 4, 6 , 6, 8, 9, 5, 2]

function TakeWhile(arr, cb) {
  let i = 0
  while (i < arr.length && cb(arr[i])) {
    i++
  }
  return arr.slice(0, i)
}

console.log(TakeWhile(lista, (val) => val % 2 === 0 ? true : false))