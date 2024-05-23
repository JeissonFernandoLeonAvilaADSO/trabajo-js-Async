let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error, promesa rechazada")
  }, 2000)
})

async function eject() {
  try {
    let R = await promesa
  } catch (error) {
    console.error(error)
  }
}; eject()
