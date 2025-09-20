const prompt = require("prompt-sync")(); // Importa la librería para leer datos del usuario en consola

// ===== FUNCIONES DE OPERACIONES =====
function suma(numeros) {                      // Función que suma todos los números de un array
  return numeros.reduce((acc, n) => acc + n, 0); // Recorre el array y acumula la suma, iniciando desde 0
}

function resta(numeros) {                     // Función que resta todos los números de un array
  return numeros.slice(1).reduce((acc, n) => acc - n, numeros[0]); // Toma el primer número como base y resta el resto
}

function multiplicacion(numeros) {           // Función que multiplica todos los números de un array
  return numeros.reduce((acc, n) => acc * n, 1); // Recorre el array y acumula la multiplicación, iniciando desde 1
}

function division(numeros) {                 // Función que divide todos los números de un array
  return numeros.slice(1).reduce((acc, n) => acc / n, numeros[0]); // Toma el primer número como base y divide por los demás
}

// ===== FUNCIÓN PARA MOSTRAR EL MENÚ DE OPCIONES =====
function menu() {
  console.log("--- CALCULADORA BONUS---"); // Encabezado
  console.log("1. Suma");                // Opción 1
  console.log("2. Resta");               // Opción 2
  console.log("3. Multiplicación");      // Opción 3
  console.log("4. División");            // Opción 4
  console.log("5. Salir");               // Opción 5
  console.log("=======================");   // Separador
}


// Función de bienvenida ASCII
function bienvenida() {
  console.log("======================================");
  console.log("   ____      _            _           ");
  console.log("  / ___|__ _| | ___ _   _| | ___  ___ ");
  console.log(" | |   / _` | |/ __| | | | |/ _ \\/ __|");
  console.log(" | |__| (_| | | (__| |_| | |  __/\\__ \\");
  console.log("  \\____\\__,_|_|\\___|\\__,_|_|\\___||___/");
  console.log("                                      ");
  console.log("       ¡Bienvenido a la Calculadora!  ");
  console.log("======================================\n");
}




// ===== FUNCIÓN DE VALIDACIÓN DE NÚMEROS =====
function controlDeErrores(numeros) {       // Valida que todos los elementos sean números
  if (numeros.some(isNaN)) {               // `some` devuelve true si algún elemento NO es número
    console.log("INGRESE NUMERO VALIDOS");
    return false;                           // Retorna false si hay error
  }
  return true;                              // Retorna true si todos son números
}

// ===== FUNCIÓN PARA PEDIR LOS NÚMEROS =====
function pedirNumeros() {
  const cantidad = parseInt(prompt("¿Cuántos números va a ingresar? ")); // Pregunta cantidad de números
  if (isNaN(cantidad) || cantidad < 2) {                                 // Validación mínima (al menos 2 números)
    console.log(" Debe ingresar al menos 2 números.");
    return null;                                                         // Retorna null si hay error
  }

  let numeros = [];                                                       // Inicializa array vacío
  for (let i = 0; i < cantidad; i++) {                                   // Bucle para pedir cada número
    let num = parseFloat(prompt(`Ingrese el número ${i + 1}: `));        // Lee cada número y lo convierte a float
    numeros.push(num);                                                    // Agrega número al array
  }

  if (!controlDeErrores(numeros)) {                                       // Valida los números ingresados
    return null;                                                          // Retorna null si hay error
  }

  return numeros;                                                         // Retorna array de números válidos
}

// =MAIN - FUNCIÓN PRINCIPAL DE LA CALCULADORA
function main() {
  let opcion;                                                              // Variable para la opción del usuario
  do {                                                                     // Bucle principal, se repite hasta que el usuario elija salir
    console.clear();                                                       // Limpia la consola
    menu();   
// Llamar a la función de bienvenida
bienvenida();                                                             // Muestra el menú
    opcion = prompt("Ingrese una opción: ");                               // Lee la opción del usuario

    if (["1","2","3","4"].includes(opcion)) {                              // Si la opción es una operación
      const numeros = pedirNumeros();                                      // Llama a la función para pedir los números
      if (!numeros) {                                                      // Si hay error al ingresar números
        prompt("Presione Enter para volver al menú.");                  // Pausa
        continue;                                                          // Vuelve al inicio del bucle
      }

      if (opcion === "4" && numeros.slice(1).includes(0)) {               // Verifica que no haya división por cero
        console.log(" No se puede dividir por cero.");
      } else {                                                             // Si todo está bien, calcula
        let resultado;
        switch(opcion) {                                                  // Selecciona la operación según la opción
          case "1": resultado = suma(numeros); break;
          case "2": resultado = resta(numeros); break;
          case "3": resultado = multiplicacion(numeros); break;
          case "4": resultado = division(numeros); break;
        }
        console.log("Resultado:", resultado);                             // Muestra el resultado
      }

      prompt("Presione Enter para volver al menú...");                     // Pausa antes de mostrar menú otra vez
    } else if (opcion === "5") {                                          // Si elige salir
      console.log("Saliendo.");                                         // Mensaje de salida
    } else {                                                               // Si opción no válida
      console.log("Opción no válida");                                    // Mensaje de error
      prompt("Presione Enter para volver al menú");
    }

  } while (opcion !== "5");                                               // Se repite mientras no elija salir
}

// LLAMADA A LA FUNCIÓN PRINCIPAL
main();                                                                  // Llama a la función principal para iniciar la calculadora

