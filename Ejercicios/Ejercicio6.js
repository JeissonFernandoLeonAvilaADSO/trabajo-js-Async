let lista = []
for (let i = 0; i < 10; i++) {
  lista.push(Math.floor(Math.random() * 10))
}

let pr = (val) => val % 2 == 0 ? true : false

console.log(lista.some(pr))