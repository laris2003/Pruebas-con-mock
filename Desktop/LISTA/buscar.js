import { listaDeTareas } from "./listas.js";// Importa el array listaDeTareas desde el archivo listas.js
import promptSync from 'prompt-sync'; // Importa la librería prompt-sync para entrada de usuario
import { verTarea } from "./vertodas.js";


const prompt = promptSync(); // Inicializa prompt-sync para entrada de usuario
export function buscartarea () {
    console.clear();
let tituloBuscado = prompt("Ingrese el título de la tarea que desea buscar: ");
for(let i=0; i<listaDeTareas.length; i++) {
    if(listaDeTareas[i].titulo === tituloBuscado) {
        verTarea(i);
        return; // Sale de la función después de encontrar la tarea
    }   
};
};
