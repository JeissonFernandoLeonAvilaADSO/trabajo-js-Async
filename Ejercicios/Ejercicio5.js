let lista = []
for (let i = 0; i < 5; i++) {
  lista.push(parseInt(prompt("Ingrese un numero")))
}

console.log(lista)
let pr = (val) => val % 2 == 0 ? true : false

console.log(lista.every(pr))