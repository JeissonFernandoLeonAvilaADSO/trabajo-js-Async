let prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 2000)
})

let prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error con la consulta")
  }, 4000)
})

let prom3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(4)
  }, 3000)
})

Promise.allSettled([prom1, prom2, prom3]).then(resultados => {
  for (const iterator of resultados) {
    iterator.status === 'fulfilled' ? console.log(`la promesa ${resultados.indexOf(iterator) + 1} salio bien`) : console.log(`la promesa ${resultados.indexOf(iterator) + 1} salio mal`)
  }
  console.table(resultados)
})