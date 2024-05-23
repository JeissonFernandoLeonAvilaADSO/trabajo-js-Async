let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operacion Completada")
  }, 2000)
})

async function op() {
  let Resultado = await promesa
  console.log(Resultado)
}

op()