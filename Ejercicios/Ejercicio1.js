// Esta es una función anónima autoejecutable. Se ejecuta inmediatamente después de su definición.
(function (desde = parseInt(prompt("Escriba desde donde empieza el rango")), hasta = parseInt(prompt("Escriba desde donde termina el rango"))) {
  // Inicializamos la variable 'numero' con el valor de 'desde'
  let numero = desde;
  // Creamos un intervalo que se ejecuta cada 1000 milisegundos (1 segundo)
  let intervalo = setInterval(() => {
    // Imprimimos el valor actual de 'numero'
    console.log(numero);
    // Si 'numero' es igual a 'hasta', limpiamos el intervalo
    if (numero === hasta) {
      clearInterval(intervalo);
    } else {
      // Si 'numero' no es igual a 'hasta', incrementamos 'numero'
      numero++;
    }
  }, 1000);
})();



// Esta es una función anónima autoejecutable. Se ejecuta inmediatamente después de su definición.
(function (desde = parseInt(prompt("Escriba desde donde empieza el rango")), hasta = parseInt(prompt("Escriba desde donde termina el rango"))) {
  // Inicializamos la variable 'actual' con el valor de 'desde'
  let actual = desde;
  // Definimos la función 'temporizador'
  let temporizador = function () {
    // Imprimimos el valor actual de 'actual'
    console.log(actual);
    // Si 'actual' es menor que 'hasta'
    if (actual < hasta) {
      // Incrementamos 'actual'
      actual++;
      // Programamos la próxima ejecución de 'temporizador' para dentro de 1 segundo
      setTimeout(temporizador, 1000);
    }
  }
  // Llamamos a 'temporizador' por primera vez
  temporizador();
})();


