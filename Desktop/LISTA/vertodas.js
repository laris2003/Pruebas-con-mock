import { listaDeTareas } from "./listas.js";// Importa el array listaDeTareas desde el archivo listas.js
import { editarTarea } from "./editar.js";// Importa la función editarTarea desde el archivo editar.js
 
import PromptSync from "prompt-sync";
 const prompt = PromptSync(); // Inicializa prompt-sync para entrada de usuario         

 
export function vertodas()    {
    console.clear();
    console.log("Todas las tareas:");       
    for(let i=0; i<listaDeTareas.length; i++) {
        console.log(`📌 [${i}] ${listaDeTareas[i].titulo || "(Sin título)"}`);
    }
    let indiceTareas=prompt("Ingrese el indice de la tarea que desea ver: "); 
    verTarea(parseInt(indiceTareas));
}

export function verTarea(indice) {
    console.clear();
    if(indice >= 0 && indice < listaDeTareas.length) {
const tarea = listaDeTareas[indice];

        // Función auxiliar para mostrar un campo o "(Sin información)" si está vacío
        const mostrar = (campo) => campo && campo.trim() !== "" ? campo : "(Sin información)";

// --- Función para convertir dificultad a estrellas
const dificultadEstrellas = (dificultad) => {
    if (!dificultad || dificultad === "(Sin información)") return "(Sin información)";
    dificultad = parseInt(dificultad);
    return "★".repeat(dificultad) + "☆".repeat(5 - dificultad);
};


console.log("═══════════════════════════════");
console.log("         DETALLES TAREA        ");
console.log("═══════════════════════════════");
console.log(`Título      : ${listaDeTareas[indice].titulo}`);
console.log(`Descripción : ${listaDeTareas[indice].descripcion}`);
console.log(`Estado      : ${listaDeTareas[indice].estado}`);
console.log(`Creación    : ${listaDeTareas[indice].creacion}`);
console.log(`Dificultad   : ${dificultadEstrellas(tarea.dificultad)}`);
console.log("═══════════════════════════════");
console.log("¿Desea editar algo?");
console.log("1 - Sí");
console.log("0 - No");
console.log("═══════════════════════════════");

        let opcion = prompt("Ingrese una opcion: ");  
        if(opcion === "1") {
            editarTarea(indice);}  
    } else {
        console.log("Indice invalido");
    }   }

