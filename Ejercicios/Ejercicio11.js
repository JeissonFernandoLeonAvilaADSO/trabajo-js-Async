let i = 0

setTimeout(() => alert(i), 100)

for (let j = 0; j < 100000000; j++){
  console.log()
  i++
}

/*
  ¿Qué va a mostrar alert()?
    R/ las funciones de temporización que permiten programar la ejecución de código en un momento futuro,sin embargo, debido a que JavaScript es un lenguaje de programación de un solo hilo, estas funciones no garantizan que el código se ejecute exactamente después del tiempo especificado,
    en cambio, el tiempo especificado es el tiempo mínimo antes de que el código se ejecute. El alert() va a mostrar "10000000" porque el codigo sigue ejecutandose aunque este el setTimeOut
    y cuando el setTimeout termina de cargar se ejecuta, por lo que "i" ya no vale "0" sino que "i" ahora valdria "100000000"
*/