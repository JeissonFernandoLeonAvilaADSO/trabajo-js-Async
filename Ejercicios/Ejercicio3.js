let lista = []

for (let i = 0; i < 10; i++) {
  lista.push(parseInt(prompt("Ingrese un valor")))
}

function pr(num) {
  return num * num
}

console.log(lista.map(pr))
