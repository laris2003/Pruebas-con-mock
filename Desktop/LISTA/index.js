import { listaDeTareas } from "./listas.js";// Importa el array listaDeTareas desde el archivo listas.js
let nombre = "";// Variable para almacenar el nombre del usuario

import PromptSync from "prompt-sync";
const prompt = PromptSync(); // Inicializa prompt-sync para entrada de usuario

import { agregarTarea } from "./control.js";// Importa la función agregarTarea desde el archivo control.js
import { vertareas } from "./ver.js";// Importa la función vertareas desde el archivo ver.js

import { buscartarea } from "./buscar.js";// Importa la función buscartarea desde el archivo buscar.js

function menu() {
   console.log("--Bienvenido a la lista de tareas--");
   nombre = prompt("Ingrese su nombre: ");
   console.log(`Hola ${nombre}, ¿Que deseas hacer?`);
    let opcion = 0;
    do {
console.log("╔════════════════════════════════╗");
console.log("║        🗂 MENÚ PRINCIPAL       ║");
console.log("╠════════════════════════════════╣");
console.log("║ 1️⃣  Ver tarea                 ║");
console.log("║ 2️⃣  Buscar tareas             ║");
console.log("║ 3️⃣  Agregar tarea             ║");
console.log("║ 4️⃣  Salir del programa        ║");
console.log("╚════════════════════════════════╝");

        opcion = prompt("Ingrese una opcion: ");
        switch (opcion) {
            case "1":
                if(listaDeTareas.length  != 0) {
                vertareas();
                };
                break;      
            case "2":
                if(listaDeTareas.length != 0) {
                    console.log("Buscar tareas");
                buscartarea();
                };
                break;
            case "3":
                agregarTarea();
                break;
            case "4":
                console.log("Saliendo del programa...");
                break;          
            default:    
                console.log("Opcion invalida");
                break;  

        }
        
    } while (opcion !== "4");
}
menu();
// Llama a la función menu para iniciar el programa