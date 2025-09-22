import promptSync from 'prompt-sync'; // Importa la librería prompt-sync para entrada de usuario
const prompt = promptSync();
import { listaDeTareas } from "./listas.js";// Importa el array listaDeTareas desde el archivo listas.js
import { vertareaspendientes } from "./verpendientes.js";// Importa la función vertareaspendientes desde el archivo verpendientes.js
import { verencurso } from "./verencurso.js";// Importa la función verencurso desde el archivo verencurso.js
import { vertareasterminadas } from "./verterminada.js";// Importa la función vertareasterminadas desde el archivo verterminada.js
import { vertodas } from './vertodas.js';



let opcion = "";// Variable para almacenar la opción del usuario

export function vertareas()    {// export sirve para usar la funcion en otros archivos
 console.clear();
console.log("═══════════════════════════════");
console.log("        MENÚ DE TAREAS       ");
console.log("═══════════════════════════════");
console.log("1️⃣  Ver todas las tareas");
console.log("2️⃣  Pendientes");
console.log("3️⃣  En curso");
console.log("4️⃣  Terminadas");
console.log("5️⃣  Volver al menú principal");
console.log("═══════════════════════════════");


    opcion = prompt("Ingrese una opción: ").trim();
    switch (opcion) {
        case "1":
        vertodas ();
        break;
        case "2":
            vertareaspendientes();
          break;
        case "3":
            verencurso();
          break;        
        case "4":   
            console.log("Tareas terminadas:");
            vertareasterminadas();
            break;
        case "5":   
            console.log("Volviendo al menú principal...");
            break;          
        default:        
            console.log("Opción inválida. Por favor, intente nuevamente.");
            break;
    }
    

};