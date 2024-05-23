
let lista = [2, 4, 6 , 6, 8, 9, 5, 2]

function DropWhile(arr, cb) {
  let i = 0;
  while (i < arr.length && cb(arr[i])) {
    i++;
  }
  return arr.slice(i);
}

console.log(DropWhile(lista, (val) => val % 2 === 0 ? true : false))