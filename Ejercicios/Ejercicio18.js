let lista = []

async function eject() {
  await fetch("ejercicio18JSON.json")
    .then(response => response.json())
    .then(data => {
      lista = Object.values(data)
      for (let key of lista) {
        if (/a/i.test(key)){
          console.log(key)
        } else {
          continue;
        }
      }
    }).catch(error => {
      console.error(error)
    })
}; eject()