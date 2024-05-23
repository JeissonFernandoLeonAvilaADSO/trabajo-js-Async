let usuarios = [];
async function consulta() {
  fetch("ejercicio19JSON.json")
    .then(response => response.json())
    .then(datos => {
      let usuarios = Object.values(datos)
      while (true) {
        let nombre = prompt("Ingrese el nombre a buscar")
        for (const iterator of usuarios) {
          if (iterator.nombre === nombre) {
            console.log(iterator)
            break;
          }
        }
        let elec = prompt("Desea buscar otro usuario?").toLowerCase() === "si" ? false : true
        if (elec) {
          break
        } else {
          continue
        }
      }
    }).catch(error => {
      console.error(error)
    })
}; consulta()