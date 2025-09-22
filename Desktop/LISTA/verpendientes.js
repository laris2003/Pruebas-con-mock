import { listaDeTareas } from "./listas.js";// Importa el array listaDeTareas desde el archivo listas.js

export function vertareaspendientes()    {
    console.clear();
    console.log("Tareas pendientes:");
    for(let i=0; i<listaDeTareas.length; i++) {
        if(listaDeTareas[i].estado === "pendiente") {
            console.log(listaDeTareas[i]);
        }                                                       
    }
}

