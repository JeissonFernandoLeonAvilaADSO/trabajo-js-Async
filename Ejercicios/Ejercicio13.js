let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resuelta")
  }, 3000)
})

promesa.then((respuesta) => {
  console.log(respuesta)
}).catch((error) => {
  console.error("Error", error)
})