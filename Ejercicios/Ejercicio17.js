let usuario;
let contra;

async function eject() {
  await fetch("ejercicio17JSON.json")
  .then(response => response.json())
  .then(datos => {
    usuario = datos.usuario
    contra = datos.contra
  }).catch(error => {
    console.error("Error", error)
  })
  
  console.log(usuario)
  console.log(contra)
}

eject()
